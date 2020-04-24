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

//////////////////// E2E TESTING USING CYPRESS ////////////////////////////
describe('User Onboarding Form', () => {
    
    /////////////////// SUCCESSFULLY NAVIGATES TO LOCALHOST //////////////////////
    it('navigates to the localhost', () => {
        cy.visit(`${baseUrl}`)
        cy.url().should('include', 'localhost')
    })

    ////////////////////// INPUT FIELD TESTS ///////////////////////////
    it('can input a name', () => {
        cy.get('[data-cy_name_input="cy_name_input"]')
            .type(`${name}`)
            .should('have.value', `${name}`)
    })
    it('can input a username', () => { ////////////// STRETCH ///////////////////
        cy.get('[data-cy_username_input="cy_username_input"]')
            .type(`${username}`)
            .should('have.value', username)
    })
    it('can input an email', () => {
        cy.get('[data-cy_email_input="cy_email_input"]')
            .type(`${email}`)
            .should('have.value', email)
    })
    it('can input a password', () => {
        cy.get('[data-cy_password_input="cy_password_input"]')
            .type(`${password}`)
            .should('have.value', password)
    })

    ////////////////////// CHECKBOX TEST //////////////////////////
    it('can check the \'Terms of Service\' checkbox', () => {
        cy.get('[data-cy_terms_input="cy_terms_input"]')
            .check()
            .should('have.checked')
    })

    ///////////////////// SUBMIT BUTTON FUNCTIONALITY TEST //////////////////////////
    it('can submit the form', () => {
        cy.get('[data-cy_submit="cy_submit"]')
            .click()
    })

    //////////////////////// FORM VALIDATION IF INPUT IS LEFT EMPTY ////////////////////////////
    it('form validation is displayed', () => {
        cy.get('[data-cy_name_input="cy_name_input"]')
            .type('Benjamin')
            .clear()
        
        cy.get('[data-cy_name_validation="data-cy_name_validation"]')
            .should('not.be.empty')
    })
    
})
