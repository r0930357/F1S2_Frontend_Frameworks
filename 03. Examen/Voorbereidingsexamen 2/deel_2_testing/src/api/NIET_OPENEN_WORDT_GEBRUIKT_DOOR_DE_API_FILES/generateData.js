import {faker} from '@faker-js/faker'

export const generateAllData = () => {
    const users = generateUsers()
    localStorage._allUsers = JSON.stringify(users)
    const projects = generateProjects(users)
    localStorage._projects = JSON.stringify(projects)
    const repositories = generateRepositories(projects)
    localStorage._repositories = JSON.stringify(repositories)
}

/**
 *
 * @param projects
 * @return {Array<{
 *     id: string,
 *     name: string,
 *     description: string,
 *     projectId: string,
 *     branches: Array<{
 *      id: string,
 *      name: string,
 *      commits: Array<{
 *          date: number,
 *          message: string,
 *          sha: string,
 *          user: {id: string, lastName: string, firstName: string, email: string, avatar: string},
 *          changedFiles: string[]
 *      }>
 *  }>
 * }>}
 */
export const generateRepositories = (projects) => {
    let repos = Array(20).fill(null).map(_ => generateRepository(projects))

    // Ensure that each project contains a repository.
    projects = projects.filter(p => !repos.find(r => r.projectId === p.id))
    while (projects.length !== 0) {
        repos = [...repos, ...Array(20).fill(null).map(_ => generateRepository(projects))]
        projects = projects.filter(p => !repos.find(r => r.projectId === p.id))
    }

    localStorage._repositories = JSON.stringify(repos)
    return repos
}

/**
 *
 * @return {{id: string, lastName: string, firstName: string, email: string, avatar: string}[]}
 * */
const generateUsers = () => {
    const users = []
    for (let i = 0; i < 4; i++) {
        const sex = faker.name.sexType()
        const firstName = faker.name.firstName(sex)
        const lastName = faker.name.lastName(sex)
        users.push({
            id: faker.datatype.uuid(),
            lastName,
            firstName,
            email: faker.internet.email(firstName, lastName),
            avatar: `https://ui-avatars.com/api/?background=random&name=${firstName}+${lastName}&format=svg`
        })
    }
    return users
}

/**
 * Generate 20 random project, each project has between 1 and 5 participating users.
 *
 * @param users {{id: string, lastName: string, firstName: string, email: string, avatar: string}[]}
 * @return {Array<{
 *     id: string,
 *     name: string,
 *     isPrivate: boolean,
 *     description: string,
 *     users: string[],
 *     owner: string
 * }>}
 */
const generateProjects = (users) => {
    let projects = Array(5).fill(null).map(_ => generateProject(users))

    // Ensure that there is at least 1 public project.
    while (!projects.find(p => !p.isPrivate)) {
        projects = [...projects, ...Array(5).fill(null).map(_ => generateProject(users))]
    }

    // Check that every user is a member of at least 1 repository
    users = users.filter(u => !!projects.find(p => !!p.users.includes(u.id)))
    while (users.length !== 0 ) {
        projects = [...projects, ...Array(5).fill(null).map(_ => generateProject(users))]
        users = users.filter(u => !!projects.find(p => !!p.users.includes(u.id)))
    }

    localStorage._projects = JSON.stringify(projects)
    return projects
}

/**
 * Generate a random project, each project has between 1 and 5 participating users.
 *
 * @param users {{id: string, lastName: string, firstName: string, email: string, avatar: string}[]}
 * @return {{
 *     id: string,
 *     name: string,
 *     isPrivate: boolean,
 *     description: string,
 *     users: string[],
 *     owner: string
 * }}
 */
export const generateProject = (users) => {
    const chosenUsers = pickRandomFromArray(users, 1, 5)

    return {
        id: faker.datatype.uuid(),
        name: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
        isPrivate: faker.datatype.boolean(),
        description: faker.lorem.paragraphs(faker.datatype.number({min: 1, max: 3})),
        users: chosenUsers,
        owner: chosenUsers[0].id
    }
}


/**
 * Generate a repository.
 *
 * @param projects {{
 *     id: string,
 *     name: string,
 *     isPrivate: boolean,
 *     description: string,
 *     users: string[],
 *     owner: string
 * }[]} The projects in which to place the repositories.
 * @param mock {boolean} If true branches and commits will be generated, if false a "real" repo will be created with
 * only a main branch and no commits.
 * @return {{
 *     id: string,
 *     name: string,
 *     description: string,
 *     projectId: string,
 *     lastActivity: number,
 *     ownerId: string,
 *     branches: Array<{
 *      id: string,
 *      name: string,
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
export const generateRepository = (projects, mock = true) => {
    const project = pickRandomFromArray(projects, 1, 1)[0]
    const users = project.users
    const owner = pickRandomFromArray(project.users, 1, 1)[0]

    const repo = {
        id: faker.datatype.uuid(),
        name: faker.lorem.words(faker.datatype.number({min: 3, max: 5})),
        description: faker.lorem.paragraph(),
        projectId: project.id,
        ownerId: owner.id
    }
    if (mock) {
        repo.branches = Array(faker.datatype.number({min: 1, max: 6})).fill(null).map(_ => generateBranch(users))
    } else {
        repo.branches = [
            {
                id: faker.datatype.uuid(),
                name: 'main',
                commits: []
            }
        ]
    }
    repo.lastActivity = mock ? getLastActivityForRepo(repo) : Date.now()
    return repo
}

/**
 * Generate a branch.
 *
 * @param users {{id: string, lastName: string, firstName: string, email: string, avatar: string}[]}
 * @return {{
 *      id: string,
 *      name: string,
 *      commits: Array<{
 *          date: number,
 *          message: string,
 *          sha: string,
 *          user: {id: string, lastName: string, firstName: string, email: string, avatar: string},
 *          changedFiles: string[]
 *      }>
 * }}
 */
export const generateBranch = (users) => {
    const commits = Array(faker.datatype.number({min: 3, max: 6})).fill(null).map(_ => generateCommit(users))
    commits.sort((a, b) => a.date - b.date)

    return {
        id: faker.datatype.uuid(),
        name: faker.git.branch(),
        commits
    }
}

/**
 * Generate a commit.
 *
 * @param users {{id: string, lastName: string, firstName: string, email: string, avatar: string}[]}
 * @return {{
 *      date: number,
 *      message: string,
 *      sha: string,
 *      user: {id: string, lastName: string, firstName: string, email: string, avatar: string},
 *      changedFiles: string[]
 * }}
 */
export const generateCommit = (users) => {
    const user = pickRandomFromArray(users, 1, 1)[0]
    const changedFiles = pickRandomFromArray(
        Array(20).fill(null)
            .map(_ => faker.system.filePath()),
        1,
        20
    )

    return {
        sha: faker.git.commitSha(),
        message: faker.git.commitMessage(),
        date: faker.date.recent(150).getTime(),
        user,
        changedFiles
    }
}


/**
 * Choose a specified amount of random elements from a given array.
 *
 * @param array {any[]} The array to choose random elements from.
 * @param nbElementsMin {number} The minimum amount of elements to choose from the array.
 * @param nbElementsMax {number} The maximum amount of elements to choose from the array, defaults to nbElementsMin.
 */
export const pickRandomFromArray = (array, nbElementsMin, nbElementsMax) => {
    if (!nbElementsMax) {
        nbElementsMax = nbElementsMin
    }
    const nbElements = faker.datatype.number({min: nbElementsMin, max: nbElementsMax})
    return shuffle(array).slice(0, nbElements)
}

/**
 *
 * @param repo {{
 *     id: string,
 *     name: string,
 *     description: string,
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
 * @return {number} The date of the last commit.
 */
const getLastActivityForRepo = (repo) => {
    return Math.max(...repo.branches.map(b => b.commits[b.commits.length - 1].date))
}

/**
 * Perform a Fisher Yates shuffle on the given array.
 *
 * @param array {any[]} The array to shuffle.
 * @returns {any[]} The shuffled array.
 */
export const shuffle = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1

        // And swap it with the current element.
        temporaryValue = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temporaryValue
    }

    return array
}
