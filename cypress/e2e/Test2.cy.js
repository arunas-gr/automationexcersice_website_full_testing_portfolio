// Test Case 2: Login User with correct email and password
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click on 'Signup / Login' button
// 5. Verify 'Login to your account' is visible
// 6. Enter correct email address and password
// 7. Click 'login' button
// 8. Verify that 'Logged in as username' is visible
// 9. Click 'Delete Account' button
// 10. Verify that 'ACCOUNT DELETED!' is visible

/// <reference types="cypress" />

describe('Test Case 2: Login User with correct email and password', () => {
    it('Login User with correct email and password', () => {

        // 1. Launch browser
        // 2. Navigate to url 'http://automationexercise.com'
        // 3. Verify that home page is visible successfully
        cy.step0();
        cy.get('body').should('be.visible');

        // 3.1. Click on 'Signup / Login' button
        cy.contains('Signup / Login').should('be.visible');
        cy.get('body').should('be.visible');
        cy.get('a[href="/login"]').click();

        // // 3.2. Verify 'New User Signup!' is visible
        // cy.contains('New User Signup!').should('be.visible');

        // // 3.3. Enter name and email address
        cy.get('input[data-qa="signup-name"]').type('VartotojasX');
        cy.get('input[data-qa="signup-email"]').type('vartotojasX@kazkur.com');

        // // 3.4. Click 'Signup' button
        cy.get('[data-qa="signup-button"]').click();

        //3.5 Create user and verify it logs in
        cy.createAccount('VartotojasX', 'vartotojasX', '123456789');
        cy.get('li a b').should('have.text', 'VartotojasX');

        // // 3.6. Logout of the account
        cy.get('.shop-menu > .nav > :nth-child(4) > a').contains(' Logout').click();

        // 4. Click on 'Signup / Login' button
        // 5. Verify 'Login to your account' is visible
        // 6. Enter correct email address and password
        cy.get('input[data-qa="login-email"]').type('vartotojasX@kazkur.com');
        cy.get('input[data-qa="login-password"]').type('123456789');

        // 7. Click 'login' button
        cy.get('button[data-qa="login-button"]').click();

        // 8. Verify that 'Logged in as username' is visible
        cy.get('li a b').should('have.text', 'VartotojasX');

        // 9. Click 'Delete Account' button
        // 10. Verify that 'ACCOUNT DELETED!' is visible
        cy.deleteAccountWhenLoggedIn();

    })
})