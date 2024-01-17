import {persistToDatabase} from './NIET_OPENEN_WORDT_GEBRUIKT_DOOR_DE_API_FILES/databaseSimulation.js'
import {generateAllData} from './NIET_OPENEN_WORDT_GEBRUIKT_DOOR_DE_API_FILES/generateData.js'

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
 * Haal alle gebruikers die in het systeem zitten op.
 *
 * @return {{id: string, lastName: string, firstName: string, email: string, avatar: string}[]}
 */
export const getAllUsers = () => {
    let storageItem = localStorage._allUsers

    if (storageItem) return JSON.parse(storageItem)

    generateAllData()
    storageItem = localStorage._allUsers
    return JSON.parse(storageItem)
}

/**
 * Haal de ingelogde gebruiker op, of geef undefined terug als er geen ingelogde gebruiker is.
 *
 * @return {{id: string, lastName: string, firstName: string, email: string, avatar: string} | undefined}
 */
export const getCurrentUser = () => {
    const storageItem = localStorage._currentUser
    return storageItem ? JSON.parse(storageItem) : undefined
}

/**
 * Log in met een nieuwe gebruiker.
 *
 * @param user {{id: string, lastName: string, firstName: string, email: string, avatar: string} | undefined} De
 * gebruiker waarmee ingelogd moet worden.
 */
export const setCurrentUser = async (user) => {
    if (user) {
        await persistToDatabase('_currentUser', user)
    } else {
        localStorage.removeItem('_currentUser')
    }
}

//endregion
