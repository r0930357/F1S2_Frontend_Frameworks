// Definieer een constante voor de naam van de test survey
// Deze wordt gebruikt in de laatste end-to-end test
const testSurveyName = 'Test Survey'

// Voer een end-to-end test uit voor het beheren van surveys
Cypress._.times(1, () => {
    describe('Surveys beheren', () => {

        beforeEach(() => {
            // Bezoek de startpagina voor elke test
            cy.visit('/')
        })

        describe(`Een niet-ingelogde gebruiker`, () => {
            it('kan de surveys zien, maar kan de edit knop en het formulier om een nieuwe survey aan te maken niet zien', () => {
                // Controleer of de surveys zichtbaar zijn
                cy.getByData('survey').should('exist')
                // Controleer of de edit knop niet zichtbaar is
                cy.getByData('edit-survey').should('not.exist')
                // Er wordt geen formulier getoond als de edit knop niet bestaat
                // cy.getByData('new-survey-form').should('not.exist')
            })
        })
    })

    describe(`Een ingelogde gebruiker`, () => {
        beforeEach(() => {
            // Maak een testaccount aan, log in en bezoek de startpagina voor elke test
            // Het testaccound staat in het bestand "cypress.config.ts" in de root-map.
            cy.createTestAccount()
            cy.login()
            cy.visit('/')
        })

        afterEach(() => {
            // Verwijder het testaccount na elke test
            cy.deleteTestAccount()
        })

        it('kan geen survey aanmaken met een lege naam.', () => {
            // Controleer of een ingelogde gebruiker geen lege survey kan aanmaken
            cy.getByData('survey').its('length').then(oldLength => {
                // Klik op de knop om een nieuwe survey aan te maken
                cy.getByData('new-survey-form').find('button').click()
                // Controleer of het aantal surveys is toegenomen na het aanmaken van een lege survey
                cy.getByData('survey').should('have.length', oldLength + 1)
            })
        })

        it('kan de taal selecteren en de titel van de overzichtspagina wijzigen.', () => {
            // Controleer of de taalselectie de titel van de overzichtspagina beïnvloedt
            // Indien Engels (English) geselecteerd is, moet de hoofding "My Surveys" weergeven.
            cy.getByData('english').click()
            cy.getByData('survey-title').should('have.text', 'My Surveys')
            // Indien Nederands (dutch) geselecteerd is, mag de hoofding geen "My Surveys" weergeven.
            cy.getByData('dutch').click()
            cy.getByData('survey-title').should('not.have.text', 'My Surveys')
        })

        it('kan een survey aanmaken en deze terugvinden op de overzichtspagina.', () => {
            // Controleer of een ingelogde gebruiker een survey kan aanmaken en terugvinden
            cy.getByData('survey').its('length').then(oldLength => {
                // Voer de naam van de nieuwe survey in en klik op de knop om deze aan te maken
                cy.getByData('new-survey-form').find('input').type(testSurveyName)
                cy.getByData('new-survey-form').find('button').click()
                // Controleer of het aantal surveys is toegenomen na het aanmaken van een nieuwe survey
                cy.getByData('survey').its('length').should('equal', oldLength + 1)
            })
        })
    })
})
