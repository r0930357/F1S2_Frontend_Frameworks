import {faker} from '@faker-js/faker'

export const generateAllData = () => {
    const surveys = generateSurveys()
    generateQuestions(surveys)

    const users = generateUsers()
    localStorage._allUsers = JSON.stringify(users)
    const projects = generateProjects(users)
    localStorage._projects = JSON.stringify(projects)
    const repositories = generateRepositories(projects)
    localStorage._repositories = JSON.stringify(repositories)
}

/**
 * Generate 10 random surveys.
 *
 * @return {Array<{
 *     name: string,
 *     id: string,
 *     createdAt: number,
 * }>}
 */
const generateSurveys = () => {
    const surveys = Array(20).fill(null).map(() => generateSurvey())
    localStorage._surveys = JSON.stringify(surveys)
    return surveys
}

/**
 *
 * @param surveys {Array<{
 *     name: string,
 *     id: string,
 *     createdAt: number,
 * }>}
 * @return {Array<{
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
export const generateQuestions = (surveys) => {
    let questions = []

    for (const survey of surveys) {
        questions = [
            ...questions,
            ...Array(faker.number.int({min: 2, max: 8})).fill(null).map(() => generateQuestion(survey.id))
        ]
    }
    localStorage._questions = JSON.stringify(questions)

    return questions
}

/**
 * Generate a random survey.
 *
 * @return {{
 *     name: string,
 *     id: string,
 *     createdAt: number,
 * }}
 */
export const generateSurvey = () => {
    return {
        id: faker.string.uuid(),
        name: faker.lorem.sentence({min: 5, max: 10}),
        createdAt: new Date(faker.date.past({years: 3})).getTime(),
    }
}

/**
 * Generate a question
 *
 * @param surveyId {string}
 * @return {{
 *      id: string,
 *      surveyId: string,
 *      title: string,
 *      type: 'single-line-answer' | 'multi-line-answer' | 'multiple-select',
 *      options: Array<{
 *          name: string,
 *          id: string,
 *      }> | null
 * }}
 */
export const generateQuestion = (surveyId) => {
    const type = pickRandomFromArray(['single-line-answer', 'multi-line-answer', 'multiple-select'], 1, 1)[0]
    let options = null

    if (type === 'multiple-select') {
        options = Array(faker.number.int({min: 2, max: 5})).fill(null).map(() => ({
            name: faker.lorem.sentence({min: 3, max: 5}),
            id: faker.string.uuid(),
        }))
    }

    return {
        id: faker.string.uuid(),
        surveyId,
        title: faker.lorem.sentence({min: 3, max: 10}),
        options,
        type,
    }
}


/**
 * Choose a specified amount of random elements from a given array.
 *
 * @param array {any[]} The array to choose random elements from.
 * @param nbElementsMin {number} The minimum amount of elements to choose from the array.
 * @param nbElementsMax {number} The maximum amount of elements to choose from the array, defaults to nbElementsMin.
 */
const pickRandomFromArray = (array, nbElementsMin, nbElementsMax) => {
    if (!nbElementsMax) {
        nbElementsMax = nbElementsMin
    }
    const nbElements = faker.number.int({min: nbElementsMin, max: nbElementsMax})
    return shuffle(array).slice(0, nbElements)
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
