// Test Case 5: Register User with existing email
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click on 'Signup / Login' button
// 5. Verify 'New User Signup!' is visible
// 6. Enter name and already registered email address
// 7. Click 'Signup' button
// 8. Verify error 'Email Address already exist!' is visible

/// <reference types="cypress" />

describe('Test Case 5: Register User with existing email', () => {
    it('Register User with existing email', () => {
        // 1. Launch browser
        // 2. Navigate to url 'http://automationexercise.com'
        cy.step0();

        // 3. Verify that home page is visible successfully
        cy.url().should('eq', 'https://automationexercise.com/');

        // 3.1. create user

        cy.contains('Signup / Login').should('be.visible');
        cy.get('body').should('be.visible');
        cy.get('a[href="/login"]').click();
        cy.contains('New User Signup!').should('be.visible');
        cy.get('input[data-qa="signup-name"]').type('VartotojasX');
        cy.get('input[data-qa="signup-email"]').type('vartotojasX@kazkur.com');
        cy.get('[data-qa="signup-button"]').click();
        cy.createAccount('VartotojasX', 'vartotojasX', '123456789');
        cy.get('li a b').should('have.text', 'VartotojasX');
        cy.get('.shop-menu > .nav > :nth-child(4) > a').contains(' Logout').click();

        // 4. Click on 'Signup / Login' button
        cy.contains('Signup / Login').should('exist').click();

        cy.get('.signup-form h2').should('contain', 'New User Signup!');

        // 6. Enter name and already registered email address
        cy.get('[data-qa="signup-name"]').type('VartotojasX');
        cy.get('[data-qa="signup-email"]').type('vartotojasX@kazkur.com');

        // 7. Click 'Signup' button
        cy.get('[data-qa="signup-button"]').click();

        // 8. Verify error 'Email Address already exist!' is visible
        cy.get('form p').contains('Email Address already exist!');

        // 9. deleting account
        cy.deleteAccount();
    })

})