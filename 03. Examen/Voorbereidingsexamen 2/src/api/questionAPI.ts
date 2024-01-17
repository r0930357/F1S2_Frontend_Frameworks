import {
    persistToDatabase,
    retrieveFromDatabase,
} from './NIET_OPENEN_WORDT_GEBRUIKT_DOOR_DE_API_FILES/databaseSimulation.ts'
import {IQuestion} from '../models/IQuestion.ts'
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query'

//region Mutations & queries

/**
 * ---------------------------------------------------------------------------------------------------------------------
 *                                          MUTATIONS & QUERIES
 * ---------------------------------------------------------------------------------------------------------------------
 */

// Deze hook wordt gebruikt om alle vragen op te halen voor een specifieke enquête.
export const useGetAllQuestionsForSurvey = (surveyId: string) => {
    // Gebruik van de useQuery hook voor het uitvoeren van een query
    return useQuery({
        // Unieke query key op basis van het type gegevens ('surveys') en de specifieke enquête-ID
        queryKey: ['surveys', surveyId],

        // Functie die daadwerkelijk de gegevens ophaalt voor de query
        queryFn: () => getAllQuestionsForSurvey({ surveyId }),
    });
}


// Deze hook wordt gebruikt om een vraag te verwijderen in het kader van een enquête, met een optimistische update.
export const useDeleteQuestion = (surveyId: string) => {
    // Initialiseren van de query client
    const queryClient = useQueryClient()

    // Functie die de daadwerkelijke mutatie uitvoert
    return useMutation({
        // Functie die de daadwerkelijke mutatie uitvoert

        mutationFn: deleteQuestion,
        // Deze wordt uitgevoerd voordat de mutatie wordt gestart

        onMutate: ({questionId}) => {
            // Ophalen van de enquêtegegevens uit de query cache
            queryClient.setQueryData(['survey', surveyId], o => o.filter(x => x.id !== questionId))
        },

        // Deze wordt uitgevoerd bij een succesvolle mutatie
        onSuccess: async () => {
            // Ongeldig maken van de cache voor de specifieke enquête om de meest recente gegevens op te halen
            await queryClient.invalidateQueries(['survey', surveyId])
        }
    })
}

//endregion


//region Fetching functions


/**
 * ---------------------------------------------------------------------------------------------------------------------
 *                                          Fetching functions
 * ---------------------------------------------------------------------------------------------------------------------
 */

interface GetAllQuestionsForSurveyParams {
    surveyId: string
}

/**
 * Haal alle vragen op voor een bepaalde survey.
 *
 * @param surveyId Het id van de survey waarvoor de vragen opgehaald moeten worden
 */
export const getAllQuestionsForSurvey = async ({surveyId}: GetAllQuestionsForSurveyParams): Promise<IQuestion[]> => {
    const allQuestions = await retrieveFromDatabase<IQuestion[]>('_questions', false)
    return allQuestions.filter(q => q.surveyId === surveyId)
}

interface DeleteQuestionsParams {
    questionId: string
}

/**
 * Verwijder de vraag met het opgegeven ID.
 *
 * @param questionId Het id van de vraag die verwijderd moet worden.
 */
export const deleteQuestion = async ({questionId}: DeleteQuestionsParams): Promise<void> => {
    const allQuestions = await retrieveFromDatabase<IQuestion[]>('_questions', false)
    if (!allQuestions) return
    await persistToDatabase('_questions', allQuestions.filter(q => q.id !== questionId), false)
}

//endregion



