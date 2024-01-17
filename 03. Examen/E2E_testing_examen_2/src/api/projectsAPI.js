import {retrieveFromDatabase} from './NIET_OPENEN_WORDT_GEBRUIKT_DOOR_DE_API_FILES/databaseSimulation.js'
import {getCurrentUser} from './userApi.js'
import {useQuery} from '@tanstack/react-query'
import UserContext from '../context/userContext.jsx'
import {useContext} from 'react'

//region Mutations & queries

/**
 * ---------------------------------------------------------------------------------------------------------------------
 *                                          MUTATIONS & QUERIES
 * ---------------------------------------------------------------------------------------------------------------------
 */

export const useGetProjects= () => {
    const {user} = useContext(UserContext)
    return useQuery(
        ['projects', user?.id],
        () => getProjects(),
        {})
}

//endregion


//region Fetching functions


/**
 * ---------------------------------------------------------------------------------------------------------------------
 *                                          Fetching functions
 * ---------------------------------------------------------------------------------------------------------------------
 */

/**
 * Haal alle projecten op waar de ingelogde gebruiker toegang tot heeft.
 *
 * @return {Array<{
 *     id: string,
 *     name: string,
 *     isPrivate: boolean,
 *     description: string,
 *     users: string[],
 *     owner: string
 * }>}
 */
export const getProjects = () => {
    const allProjects = retrieveFromDatabase('_projects')
    const user = getCurrentUser()
    return allProjects.filter(p => !p.isPrivate || p.owner === user?.id || p.users.map(u => u.id).includes(user?.id))
}


//endregion



