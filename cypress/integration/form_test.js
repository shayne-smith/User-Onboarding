//////////////////// IMPORT COMPONENTS AND DATA /////////////////
import { v4 as uuid } from 'uuid';
import { baseUrl } from '../../cypress.json';
import Name from '../../user-onboarding/src/Name';

//////////////////// SET VARIABLES /////////////////////////
// const name = Name(); // Random Name Generator
const name = 'Benjamin';
const username = uuid().slice(0, 7); // use only a portion of the hashed unique id
const email = `${username}@lambda.com`;
const password = 'password12345';
const termsOfService = true;

describe('User Onboarding Form', () => {
    it('can navigate to the site', () => {
        cy.visit(`${baseUrl}`)
        cy.url().should('include', 'localhost')
    })

    it('can submit a user (happy path)', () => {
        cy.get('[data-cy_name_input="cy_name_input"]')
            .type(`${name}`)
            .should('have.value', `${name}`)

        cy.get('[data-cy_username_input="cy_username_input"]')
            .type(`${username}`)

        cy.get('[data-cy_email_input="cy_email_input"]')
            .type(`${email}`)

        cy.get('[data-cy_password_input="cy_password_input"]')
            .type(`${password}`)
        
        cy.get('[data-cy_terms_input="cy_terms_input"]')
            .check()
            .should('have.checked')
        
    })
})
