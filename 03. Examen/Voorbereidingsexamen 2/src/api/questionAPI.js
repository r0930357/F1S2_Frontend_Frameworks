import {
    persistToDatabase,
    retrieveFromDatabase
} from './NIET_OPENEN_WORDT_GEBRUIKT_DOOR_DE_API_FILES/databaseSimulation.js'
import {faker} from '@faker-js/faker'

//region Mutations & queries

/**
 * ---------------------------------------------------------------------------------------------------------------------
 *                                          MUTATIONS & QUERIES
 * ---------------------------------------------------------------------------------------------------------------------
 */


//endregion


//region Fetching functions


/**
 * ---------------------------------------------------------------------------------------------------------------------
 *                                          Fetching functions
 * ---------------------------------------------------------------------------------------------------------------------
 */

/**
 * Haal alle vragen op voor een bepaalde survey.
 *
 * @param surveyId {string} Het id van de survey waarvoor de vragen opgehaald moeten worden
 * @return {Promise<Array<{
 *      id: string,
 *      surveyId: string,
 *      title: string,
 *      type: 'single-line-answer' | 'multi-line-answer' | 'multiple-select',
 *      options: Array<{
 *          name: string,
 *          id: string,
 *      }> | null
 * }>>}
 */
export const getAllQuestionsForSurvey = async ({surveyId}) => {
    const allQuestions = await retrieveFromDatabase('_questions')
    return allQuestions.filter(q => q.surveyId === surveyId)
}

/**
 * Verwijder de vraag met het opgegeven ID.
 *
 * @param questionId {string} Het id van de vraag die verwijderd moet worden.
 * @return {Promise<void>}
 */
export const deleteQuestion = async ({questionId}) => {
    const allQuestions = await retrieveFromDatabase('_questions')
    if (!allQuestions) return
    await persistToDatabase('_questions', allQuestions.filter(q => q.id !== questionId))
}

/**
 * Maak een nieuwe vraag aan.
 *
 * @param surveyId {string} Het id van de survey waarin de vraag gekoppeld is.
 * @param title {string} De title van de vraag.
 * @param type {'single-line-answer' | 'multi-line-answer' | 'multiple-select'} Het type van de vraag.
 * @param options {string[] | null} De opties voor een vraag van het type 'multiple-select'.
 * @return {Promise<{
 *      id: string,
 *      surveyId: string,
 *      title: string,
 *      type: 'single-line-answer' | 'multi-line-answer' | 'multiple-select',
 *      options: Array<{
 *          name: string,
 *          id: string,
 *      }> | null
 * }>}
 */
export const createQuestion = async ({surveyId, title, type, options}) => {
    const allQuestions = await retrieveFromDatabase('_questions')
    const question = {
        id: faker.string.uuid(),
        surveyId,
        title,
        type,
        options
    }
    allQuestions.push(question)
    await persistToDatabase('_questions', allQuestions)
    return question
}

//endregion



