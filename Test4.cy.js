// Test Case 4: Logout User
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click on 'Signup / Login' button
// 5. Verify 'Login to your account' is visible
// 6. Enter correct email address and password
// 7. Click 'login' button
// 8. Verify that 'Logged in as username' is visible
// 9. Click 'Logout' button
// 10. Verify that user is navigated to login page

/// <reference types="cypress" />

describe('Test Case 4: Logout User', () => {
    it('Logout User', () => {
        // 1. Launch browser
        // 2. Navigate to url 'http://automationexercise.com'
        cy.step0();
        // 3. Verify that home page is visible successfully
        cy.get('body').should('be.visible');
        // 3.1. Create user

        cy.contains('Signup / Login').should('be.visible');
        cy.get('body').should('be.visible');
        cy.get('a[href="/login"]').click();

        cy.contains('New User Signup!').should('be.visible');

        cy.get('input[data-qa="signup-name"]').type('VartotojasX');
        cy.get('input[data-qa="signup-email"]').type('vartotojasX@kazkur.com');

        // // 3.4. Click 'Signup' button
        cy.get('[data-qa="signup-button"]').click();

        //3.5 Create user and verify it logs in

        cy.createAccount('VartotojasX', 'vartotojasX', '123456789');
        cy.get('li a b').should('have.text', 'VartotojasX');
        cy.get('.shop-menu > .nav > :nth-child(4) > a').contains(' Logout').click();

        // 4. Click on 'Signup / Login' button
        cy.contains('Signup / Login').should('exist').click();

        // 5. Verify 'Login to your account' is visible
        cy.get('.login-form h2').should('have.text', 'Login to your account').and('be.visible');

        // 6. Enter correct email address and password
        cy.get('[data-qa="login-email"]').type('vartotojasX@kazkur.com');
        cy.get('[data-qa="login-password"]').type('123456789');

        // 7. Click 'login' button
        cy.get('[data-qa="login-button"]').should('be.visible').click();
        // 8. Verify that 'Logged in as username' is visible
        cy.get('li a b').should('have.text', 'VartotojasX');

        // 9. Click 'Logout' button
        cy.get('ul.navbar-nav li').contains('Logout').click();

        // 10. Verify that user is navigated to login page
        cy.url().should('eq', 'https://automationexercise.com/login');

        // 11. deleting user account to have it clean for next tests
        cy.contains('Signup / Login').should('exist').click();
        cy.get('.login-form h2').should('have.text', 'Login to your account').and('be.visible');
        cy.get('[data-qa="login-email"]').type('vartotojasX@kazkur.com');
        cy.get('[data-qa="login-password"]').type('123456789');
        cy.get('[data-qa="login-button"]').should('be.visible').click();
        cy.get('ul.navbar-nav li').contains(' Delete Account').click();
        cy.get('h2.title.text-center').should('contain', 'Account Deleted!').and('be.visible');

    })
})