// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
import './commands'
import {pickRandomFromArray} from '../../src/api/NIET_OPENEN_WORDT_GEBRUIKT_DOOR_DE_API_FILES/generateData.js'

Cypress.Commands.add('createTestAccount', () => {

    const email = Cypress.env('testAccount')
    if (email.includes('[') || email.includes(']')) {
        throw new Error(`Email contains invalid characters`)
    }

    localStorage.testAccountCreated = true

    const projects = JSON.parse(localStorage._projects)
    projects.push({
        "id":"5a656647-cead-4a2b-86e6-e2237e6ff97c",
        "name":"Test Project (command created)",
        "isPrivate":true,
        "description":"Cypress test project (command created)",
        "users": pickRandomFromArray(JSON.parse(localStorage._allUsers), 0, 3),
        "owner":"89bd9d8d-69a6-474e-8f46-7cc8796ed151"})
    localStorage._projects = JSON.stringify(projects)

    const repos = JSON.parse(localStorage._repositories)
    repos.push({
        projectId: "5a656647-cead-4a2b-86e6-e2237e6ff97c",
        name: "Test repo (command created)",
        description: "Cypress Test repo (command created)"
    })
    localStorage._repositories = JSON.stringify(repos)
})


Cypress.Commands.add('deleteTestAccount', () => {
    const projects = localStorage._projects ? JSON.parse(localStorage._projects) : []
    const filteredProjects = projects.filter(p => p.owner !== Cypress.env('testUserId'))
    localStorage._projects = JSON.stringify(filteredProjects)

    localStorage.removeItem('testAccountCreated')
})

Cypress.Commands.add('login', () => {
    const firstName = Cypress.env('testFirstName')
    const lastName = Cypress.env('testLastName')

    const user = {
        id: Cypress.env('testUserId'),
        lastName,
        firstName,
        email: Cypress.env('testAccount'),
        avatar: `https://ui-avatars.com/api/?background=random&name=${firstName}+${lastName}&format=svg`
    }

    window.localStorage._currentUser = JSON.stringify(user)
})

Cypress.Commands.add('logout', () => {
    window.localStorage.removeItem('_currentUser')
    cy.reload()
    cy.wait(250)
})
