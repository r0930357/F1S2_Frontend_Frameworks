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
 * Haal alle surveys op die in de database zitten.
 *
 * @return {Promise<Array<{
 *     name: string,
 *     id: string,
 *     createdAt: number,
 * }>>}
 */
const getAllSurveys = async () => {
    const surveys = await retrieveFromDatabase('_surveys')
    return surveys.sort((a, b) => b.createdAt - a.createdAt)
}

/**
 * Maak een nieuwe survey aan.
 *
 * @param name {string} De naam van de survey.
 * @return {Promise<{
 *     name: string,
 *     id: string,
 *     createdAt: number,
 * }>}
 */
const createSurvey = async ({name}) => {
    const survey = {
        name,
        id: faker.string.uuid(),
        createdAt: Date.now(),
    }
    const surveys = await retrieveFromDatabase('_surveys')
    await persistToDatabase('_surveys', [...surveys, survey])
    return survey
}

/**
 * Verwijder een bepaalde survey.
 *
 * @param id {string} Het id van de survey die verwijderd moet worden.
 * @return {Promise<void>}
 */
const deleteSurvey = async ({id}) => {
    const surveys = await retrieveFromDatabase('_surveys')
    await persistToDatabase('_surveys', surveys.filter(s => s.id !== id))
}
//endregion
