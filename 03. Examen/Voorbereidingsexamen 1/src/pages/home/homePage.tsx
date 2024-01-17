import {FunctionComponent, Suspense, useContext, useEffect, useState} from 'react'
import {useGetAllCinemas} from '../../api/cinemaApi.ts'
import CinemaSelector from './cinemaSelector.tsx'
import viewModeContext from '../../context/viewModeContext.tsx'
import {useCreateMovie} from '../../api/movieApi.ts'
import MovieList from './movieList.tsx'
import LoadingPart from '../../utils/loadingPart.tsx'

const HomePage: FunctionComponent = () => {
    const {data: cinemas} = useGetAllCinemas()
    const [selectedCinema, setSelectedCinema] = useState<string | null>(null)
    const {viewMode} = useContext(viewModeContext)
    const {mutate: createMovie, isLoading} = useCreateMovie()

    /*Standaard wordt de eerste knop geselecteerd, ongeacht of dit de “All” knop is of een echte cinema.
    Als er gewisseld wordt tussen de view moeten de knoppen zich mee aanpassen.
    Als de pagina dus in admin modus staat en daarna gewisseld wordt naar user modus, moet de eerste echte cinema automatisch geselecteerd worden.*/

    useEffect(() => {
        if (viewMode != 'admin' && selectedCinema === null && cinemas) {
            setSelectedCinema(cinemas[0].id)
        }
    }, [viewMode])

    return (
        <>

            {/*Deze pagina stelt de administrator in staat om een overzicht te bekijken van alle films die in de verschillende cinema’s te zien zijn.*/}

            <div className="cinema-selector">

                {/*Als de pagina in de admin-modus bekeken wordt, is er naast de lijst van cinema’s ook een knop ‘All’ beschikbaar waarmee alle films bekeken kunnen worden.*/}
                {/*Indien de gebruiker een bepaalde cinema geselecteerd heeft, moet het <button> in de bijhorende CinemaSelector de CSS-klasse selected krijgen.*/}

                {viewMode === 'admin' && <CinemaSelector location={'All'}
                                                         selectCinema={() => setSelectedCinema(null)}
                                                         selected={selectedCinema === null}/>}

                {/*Gebruik react-query om een overzicht op te halen van de verschillende cinema’s en gebruik CinemaSelector component om de cinema’s op te lijsten.*/}

                {cinemas?.map(c =>
                    <CinemaSelector {...c} key={c.id}
                                    selected={selectedCinema === c.id}
                                    selectCinema={() => setSelectedCinema(c.id)}/>)}

            </div>
            {/*Voeg onder de lijst van cinema’s een nieuwe knop toe waarmee een nieuwe film toegevoegd kan worden aan de database.
            Deze knop mag enkel zichtbaar zijn in de admin modus.*/}
            {/*De administrator kan ook een nieuwe film toevoegen. Een gewone gebruiker kan enkel de films bekijken*/}
            {/*Terwijl een film aangemaakt wordt, is de knop disabled en wordt de LoadingPart component gerenderd als kind van de knop.*/}

            {viewMode === 'admin' && (
                <button onClick={() => createMovie()} disabled={isLoading}>
                    + Add movie
                    {isLoading && <LoadingPart/>}
                </button>
            )}

            {/*Zodra een cinema (of alle cinema’s) geselecteerd zijn, moeten de films voor die cinema geladen worden.
            Om dit overzicht te bouwen maak je gebruik van de Movie component die reeds voorzien is in de startbestanden.*/}

            {/*Tenslotte moet er gebruik gemaakt worden van suspense om de LoadingPart component te tonen terwijl de films voor een bepaalde cinema aan het laden zijn.
            Deze component is al te vinden in de startbestanden.*/}

            <Suspense fallback={<LoadingPart/>}>
            <MovieList cinemaId={selectedCinema}/>
            </Suspense>
        </>
    )
}

export default HomePage
