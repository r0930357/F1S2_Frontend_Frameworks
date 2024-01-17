import {ReactElement} from 'react';
import {MountReturn} from 'cypress/react';

declare global {
    namespace Cypress {
        interface Chainable<Subject = any> {
            /**
             * Retrieve a HTMLElement using the data-cy attribute.
             * @example
             * cy.getByData('example-attribute')
             */
            getByData(dataAttribute: string): Chainable<JQuery>

            /**
             * Mount a React component.
             * @example
             * cy.mount(<></>)
             */
            mount(dataAttribute: ReactElement): Chainable<MountReturn>

            /**
             * Login with the default account specified in cypress.config.ts.
             * @example
             * cy.login()
             */
            login(): void,

            /**
             * Logout and reload the page.
             * @example
             * cy.logout()
             */
            logout(): void,

            /**
             * Delete the test account from the database.
             * @example
             * cy.deleteTestAccount()
             */
            deleteTestAccount(): void

            /**
             * Create a test account and create a private project and one repository in this project for the test
             * account.
             * @example
             * cy.createTestAccount()
             */
            createTestAccount(): void
        }
    }
}
