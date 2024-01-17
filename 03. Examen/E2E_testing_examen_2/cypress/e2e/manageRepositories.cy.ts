// Definieer een constante voor de naam van de test survey
const testRepoName = 'Test Repository'
const testRepoDescription = 'Cypress test repository'
/* De properties zijn de volgende:

    - project-btn: Verwijst naar de knoppen die projecten aanduiden.
    - my-repositories-btn: Verwijst naar de knop waarmee de privé repositories getoond kunnen worden.
    - public-repositories-btn: Verwijst naar de knop waarmee de publieke repositories getoond kunnen worden.
    - name: Verwijst naar het input element voor de naam van een nieuw repository.
    - description: Verwijst naar het input element voor de beschrijving van een nieuw repository.
    - create-new-repo-btn: Verwijst naar de knop waarmee in het formulier een nieuw repository aangemaakt kan worden.
    - repository: Verwijst naar een repository.
    - new-repo-modal-btn: Verwijst naar de knop waarmee het modale venster, dat het formulier voor een nieuw repository aan te maken bevat, geopend kan worden.*/

// Voer een end-to-end test uit voor het beheren van surveys
Cypress._.times(1, () => {
    // Begin met het beschrijven van de test suite voor het beheren van repositories
    describe('Repositories beheren', () => {

        beforeEach(() => {
            // Bezoek de startpagina voor elke test
            cy.visit('/')
        })

        // Test voor een niet-ingelogde gebruiker die geen privé projecten of bijhorende repositories kan zien
        describe(`Een niet-ingelogde gebruiker`, () => {
            it('kan geen privé projecten of bijhorende repositories zien in de ‘My projects view', () => {
                cy.getByData('my-repositories-btn').should('exist').click()
                cy.getByData('project-btn').should('not.exist')
                cy.getByData('repository').should('not.exist')
            })
        })

        // Test voor een niet-ingelogde gebruiker die minstens één publiek project en bijhorend repository kan zien
        describe(`Een niet-ingelogde gebruiker`, () => {
            it('kan minstens één publiek project en bijhorend repository zien in de ‘Public projects’ view', () => {
                cy.getByData('public-repositories-btn').should('exist').click()
                cy.getByData('public-repositories-btn').should('have.class', 'active')
                cy.getByData('project-btn').should('exist')
                cy.getByData('repository').should('exist')
            })
        })

        // Tests voor een ingelogde gebruiker
        describe(`Een ingelogde gebruiker`, () => {
            beforeEach(() => {
                // Maak een testaccount aan, log in en bezoek de startpagina voor elke test
                // Het testaccount staat in het bestand "cypress.config.ts" in de root-map.
                cy.createTestAccount()
                cy.login()
                cy.visit('/')
            })

            afterEach(() => {
                // Verwijder het testaccount na elke test
                cy.deleteTestAccount()
            })

            // Test voor een ingelogde gebruiker die minstens één privé project en bijhorend repository kan zien
            it('kan minstens één privé project en bijhorend repository zien in de ‘My projects view.', () => {
                cy.getByData('my-repositories-btn').should('exist').click()
                cy.getByData('project-btn').should('exist')
                cy.getByData('repository').should('exist')
            })

            // Test voor een ingelogde gebruiker die het ‘Nieuw repository’ formulier niet kan indienen met een lege naam en beschrijving
            it('kan het ‘Nieuw repository’ formulier niet indienen met een lege naam en beschrijving.', () => {
                cy.getByData('new-repo-modal-btn').click()
                cy.getByData('name').should('exist').should('be.empty')
                cy.getByData('description').should('exist').should('be.empty')

                cy.getByData('repository').its('length').then(oldLength => {
                    cy.getByData('create-new-repo-btn').click()
                    cy.getByData('repository').its('length').should('eq', oldLength)
                })
            })

            // Test voor een ingelogde gebruiker die het ‘Nieuw repository’ formulier succesvol kan indienen met een geldige naam en beschrijving
            it('kan het ‘Nieuw repository’ formulier succesvol indienen met een geldige naam en beschrijving, de resultaten zijn zichtbaar op de pagina.', () => {
                cy.getByData('new-repo-modal-btn').click()
                cy.getByData('name').should('exist').should('exist').type('testRepoName')
                cy.getByData('description').should('exist').should('exist').type('testRepoDescription')

                cy.getByData('repository').its('length').then(oldLength => {
                    cy.getByData('create-new-repo-btn').click()
                    cy.getByData('repository').its('length').should('eq', oldLength + 1)
                    cy.getByData('repository').should('include.text', testRepoName)
                    cy.getByData('repository').should('include.text', testRepoDescription)
                })
            })
        })
    })
})
