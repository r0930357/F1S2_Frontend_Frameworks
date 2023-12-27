import {
    persistToDatabase,
    retrieveFromDatabase
} from './NIET_OPENEN_WORDT_GEBRUIKT_DOOR_DE_API_FILES/databaseSimulation.js'
import {getCurrentUser} from './userApi.js'
import {generateRepository} from './NIET_OPENEN_WORDT_GEBRUIKT_DOOR_DE_API_FILES/generateData.js'
import {getProjects} from './projectsAPI.js'
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query'
import {faker} from '@faker-js/faker'
import lodash from 'lodash'


//region Mutations & queries

/**
 * ---------------------------------------------------------------------------------------------------------------------
 *                                          MUTATIONS & QUERIES
 * ---------------------------------------------------------------------------------------------------------------------
 */

export const useGetRepositories = (projectId) => {
    return useQuery(
        ['repositories', projectId],
        () => getRepositories({projectId}),
        {}
    )
}

export const useCreateRepository = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: createRepository,
        onMutate: ({projectId, name, description}) => {
            queryClient.setQueryData(['repositories'], old => {
                old = old ? old : []
                return [{
                    projectId,
                    name,
                    description,
                }, ...old]
            })
        },
        onSettled: async (data, error, {projectId, user}) => {
            await queryClient.invalidateQueries(['repositories', projectId])
            await queryClient.invalidateQueries(['repositories', data.ownerId])
        }
    })
}


export const useGetRepository = (id) => {
    return useQuery(
        ['repository', id],
        () => getRepository({id}),
        {}
    )
}

export const useCreateNewCommit = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: createNewCommit,
        onSettled: async (data, error, {repoId}) => {
            await queryClient.invalidateQueries(['repository', repoId])
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

/**
 * Haal alle repositories op die in het opgegeven project zitten.
 *
 * @param projectId {string} Het id van het project waarin de repositories moeten zitten.
 * @return {Array<{
 *     id: string,
 *     name: string,
 *     description: string,
 *     lastActivity: number,
 *     projectId: string,
 *     ownerId: string,
 *     branches: Array<{
 *      name: string,
 *      id: string,
 *      commits: Array<{
 *          date: number,
 *          message: string,
 *          sha: string,
 *          user: {id: string, lastName: string, firstName: string, email: string, avatar: string}
 *      }>
 *  }>
 * }>}
 */
const getRepositories = async ({projectId}) => {
    if (!projectId) {
        return []
    }

    const repos = retrieveFromDatabase('_repositories')
    const reposForProject = repos.filter(r => r.projectId === projectId)
    return reposForProject.sort((a, b) => b.lastActivity - a.lastActivity)
}

/**
 * Haal een repository op, op basis van het id.
 *
 * @param id {string} Het id van het repository dat opgehaald moet worden.
 * @return {{
 *     id: string,
 *     name: string,
 *     description: string,
 *     lastActivity: number,
 *     projectId: string,
 *     ownerId: string,
 *     branches: Array<{
 *      name: string,
 *      id: string,
 *      commits: Array<{
 *          date: number,
 *          message: string,
 *          sha: string,
 *          user: {id: string, lastName: string, firstName: string, email: string, avatar: string},
 *          changedFiles: string[]
 *      }>
 *  }>
 * }}
 */
const getRepository = async ({id}) => {
    const repos = retrieveFromDatabase('_repositories')
    return repos.find(r => r.id === id) ?? null
}

/**
 * Maak een nieuw repository aan met de opgegeven naam en beschrijving in het opgegeven project.
 *
 * @param projectId {string} Het id van het project waarin het nieuwe repository aangemaakt moet worden.
 * @param name {string} De naam van het nieuwe repository.
 * @param description {string} De beschrijving van het nieuwe repository.
 * @return {{
 *     id: string,
 *     name: string,
 *     description: string,
 *     lastActivity: number,
 *     projectId: string,
 *     ownerId: string,
 *     branches: Array<{
 *      name: string,
 *      commits: Array<{
 *          date: number,
 *          message: string,
 *          sha: string,
 *          user: {id: string, lastName: string, firstName: string, email: string, avatar: string}
 *      }>
 *  }>
 * }}
 */
export const createRepository = ({projectId, name, description}) => {
    if (!getCurrentUser()?.id) {
        throw new Error('Please login to create a repository')
    }

    const project = getProjects().filter(p => p.id === projectId)
    const repo = generateRepository(project, false)
    repo.name = name
    repo.description = description
    repo.ownerId = getCurrentUser().id
    const repos = retrieveFromDatabase('_repositories')
    persistToDatabase('_repositories', [...repos, repo])
    return repo
}

/**
 * Push een nieuwe commit naar de opgegeven branch in het opgegeven repository en geef het aangepaste repository terug.
 *
 * @param repoId {string} Het id van het repository waarin de nieuwe commit geplaatst moet worden.
 * @param branchId {string} Het id van de branch waarin de nieuwe commit geplaatst moet worden.
 * @param message {string} De commit boodschap.
 * @param user {{id: string, lastName: string, firstName: string, email: string, avatar: string}} De gebruiker die de
 * commit maakt.
 * @param changedFiles {string} Een string waarin de verschillende files staat gescheiden van elkaar met een puntkomma.
 * @return {{
 *     id: string,
 *     name: string,
 *     description: string,
 *     lastActivity: number,
 *     projectId: string,
 *     ownerId: string,
 *     branches: Array<{
 *      name: string,
 *      commits: Array<{
 *          date: number,
 *          message: string,
 *          sha: string,
 *          user: {id: string, lastName: string, firstName: string, email: string, avatar: string}
 *      }>
 *  }>
 * }}
 */
const createNewCommit = async ({repoId, branchId, message, user, changedFiles}) => {
    const repos = retrieveFromDatabase('_repositories')
    const newCommit = {
        date: Date.now(),
        message,
        sha: faker.git.commitSha(),
        user,
        changedFiles: changedFiles.split(';')
    }
    const i = repos.findIndex(r => r.id === repoId)
    const newRepo = addNewCommitToRepo(newCommit, repos[i], branchId)
    repos[i] = newRepo

    persistToDatabase('_repositories', repos)
    return newRepo
}

/**
 * Neem een repository en voeg hier een nieuwe commit aan toe. Deze methode maakt een volledige kloon van het repository
 * voordat de commit toegevoegd wordt, zo wordt een nieuwe locatie in het geheugen gebruikt en kan een re-render
 * uitgevoerd worden.
 *
 * @param newCommit De nieuwe commit
 * @param repo Het repo waaraan de commit toegevoegd moet worden.
 * @param branchId {string} Het id van de branch waaraan de commit toegevoegd moet worden.
 * @return {*} Het repository met de nieuwe commit.
 */
const addNewCommitToRepo = (newCommit, repo, branchId) => {
    const newRepo = lodash.cloneDeep(repo)
    const branch = newRepo?.branches?.find(b => b.id === branchId)
    branch.commits = [newCommit, ...branch.commits]
    return newRepo
}

//endregion
