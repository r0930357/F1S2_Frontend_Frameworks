import {IMovie} from '../models/IMovie.ts'
import {
    persistToDatabase,
    retrieveFromDatabase,
} from './NIET_OPENEN_WORDT_GEBRUIKT_DOOR_DE_API_FILES/databaseSimulation.ts'
import {getRandomUnusedMovie, MOVIE_KEY} from './NIET_OPENEN_WORDT_GEBRUIKT_DOOR_DE_API_FILES/generateData.ts'
import {faker} from '@faker-js/faker'
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query'


//region Mutations & queries

/**
 * ---------------------------------------------------------------------------------------------------------------------
 *                                          MUTATIONS & QUERIES
 * ---------------------------------------------------------------------------------------------------------------------
 */

export const useGetAllMoviesForCinema = (cinemaId: string | null) => {
    return useQuery({
        queryKey: ['movies', cinemaId],
        queryFn: () => getAllMoviesForCinema(cinemaId),
    })
}

// UseCreateMovie

// Deze hook wordt gebruikt om een nieuwe film te maken met een afwachtende update.
export const useCreateMovie = () => {
    // Initialiseren van de query client
    const queryClient = useQueryClient()

    // Gebruik van de useMutation hook voor het verwerken van de mutatie
    return useMutation({
        // Functie die de daadwerkelijke mutatie uitvoert
        mutationFn: createMovie,

        // Deze wordt uitgevoerd nadat de mutatie is afgerond (zowel bij succes als bij fout)
        onSettled: async () => {
            // Ongeldig maken van de cache voor de 'movies' query om de meest recente gegevens op te halen
            await queryClient.invalidateQueries(['movies'])
        },
    });
}

export const useGetMovieById = (movieId: string) => {
    return useQuery({
        queryKey: ['movies', movieId],
        queryFn: () => getMovieById(movieId),
    })
}

// UseAddActorToMovie

// Deze hook wordt gebruikt om een acteur toe te voegen aan een film met een optimistische update.
export const useAddActorToMovie = () => {
    // Initialiseren van de query client
    const queryClient = useQueryClient()

    // Gebruik van de useMutation hook voor het verwerken van de mutatie
    return useMutation({
        // Functie die de daadwerkelijke mutatie uitvoert
        mutationFn: addActorToMovie,
        // Deze wordt uitgevoerd voordat de mutatie wordt gestart
        onMutate: ({ name, movieId }) => {
            // Creëren van een unieke query key op basis van de film-ID
            const queryKey = ['movies', movieId]

            // Ophalen van de oude filmgegevens uit de query cache
            const oldMovie = queryClient.getQueryData<IMovie>(queryKey)

            // Aanmaken van een nieuw filmobject met een tijdelijke acteur toegevoegd aan de lijst
            const newMovie = {...oldMovie, actors: [...oldMovie?.actors ?? [], { id: 'temp', name }]}

            // Bijwerken van de filmgegevens in de query cache met de optimistische update
            queryClient.setQueryData(queryKey, newMovie)

            // Retourneren van gegevens die later gebruikt kunnen worden bij het ongedaan maken van de mutatie
            return { queryKey, oldMovie }
        },
        // Deze wordt uitgevoerd bij een fout tijdens de mutatie
        onError: (_, __, context) => {
            // Als er een fout optreedt, wordt de originele data hersteld in de query cache
            if (context) {
                queryClient.setQueryData(context.queryKey, context.oldMovie)
            }
        },
        // Deze wordt uitgevoerd bij een succesvolle mutatie
        onSuccess: (newMovie, _, context) => {
            // Bij een succesvolle mutatie wordt de query cache bijgewerkt met de definitieve gegevens
            if (context) {
                queryClient.setQueryData(context.queryKey, newMovie)
            }
        },
    });
}


//endregion


//region API functions


/**
 * ---------------------------------------------------------------------------------------------------------------------
 *                                          API functions
 * ---------------------------------------------------------------------------------------------------------------------
 */

/**
 * Retrieve all movies that are currently stored in the database.
 *
 * @param cinemaId The id of the cinema for which the movies must be retrieved,
 */
async function getAllMoviesForCinema(cinemaId: string | null): Promise<IMovie[]> {
    const movies = await retrieveFromDatabase<IMovie[]>(MOVIE_KEY)
    if (cinemaId) {
        movies.forEach(m => m.schedule = m.schedule.filter(s => s.cinemaId === cinemaId))
        return movies.filter(m => m.schedule.length > 0)
    }
    return movies
}

/**
 * Retrieve a specific movie using its IMDB id.
 *
 * @param id The IMDB id of the movie.
 */
async function getMovieById(id: string): Promise<IMovie | undefined> {
    return (await retrieveFromDatabase<IMovie[]>(MOVIE_KEY)).find(m => m.id === id)
}

/**
 * Add a new random movie to the database.
 *
 * @return The newly created movie.
 */
async function createMovie(): Promise<IMovie> {
    const movies = await retrieveFromDatabase<IMovie[]>(MOVIE_KEY)
    const newMovie = getRandomUnusedMovie()
    await persistToDatabase(MOVIE_KEY, [newMovie, ...movies])
    return newMovie
}

interface AddActorToMovieProps {
    movieId: string
    name: string
}

async function addActorToMovie({movieId, name}: AddActorToMovieProps): Promise<IMovie> {
    const movies = await retrieveFromDatabase<IMovie[]>(MOVIE_KEY)
    const movie = movies.find(m => m.id === movieId)
    movie?.actors.push({
        id: faker.string.uuid(),
        name,
    })

    if (!movie) {
        throw new Error(`The movie doesn't exist.`)
    }

    await persistToDatabase(MOVIE_KEY, movies)
    return movie
}

//endregion
