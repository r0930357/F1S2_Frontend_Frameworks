import {FunctionComponent, Suspense, useContext, useEffect, useState} from 'react'
import {useGetAllCinemas} from '../../api/cinemaApi.ts'
import CinemaSelector from './cinemaSelector.tsx'
import viewModeContext from '../../context/viewModeContext.tsx'
import {useCreateMovie, useGetAllMoviesForCinema} from '../../api/movieApi.ts'
import MovieList from './movieList.tsx'
import LoadingPart from '../../utils/loadingPart.tsx'

const HomePage: FunctionComponent = () => {
    const {data: cinemas} = useGetAllCinemas()
    const [selectedCinema, setSelectedCinema] = useState<string | null>(null)
    const {viewMode} = useContext(viewModeContext)
    const {mutate: createMovie, isLoading} = useCreateMovie()

    useEffect(() => {
        if (viewMode != 'admin' && selectedCinema === null && cinemas) {
            setSelectedCinema(cinemas[0].id)
        }
    }, [viewMode])

    return (
        <>
            <div className="cinema-selector">
                {viewMode === 'admin' && <CinemaSelector location={'All'}
                                                         selectCinema={() => setSelectedCinema(null)}
                                                         selected={selectedCinema === null}/>}

                {cinemas?.map(c =>
                    <CinemaSelector {...c} key={c.id}
                                    selected={selectedCinema === c.id}
                                    selectCinema={() => setSelectedCinema(c.id)}/>)}

            </div>

            {viewMode === 'admin' && (
                <button onClick={() => createMovie()} disabled={isLoading}>
                    + Add movie
                    {isLoading && <LoadingPart/>}
                </button>
            )}

            <Suspense fallback={<LoadingPart/>}>
            <MovieList cinemaId={selectedCinema}/>
            </Suspense>
        </>
    )
}

export default HomePage
