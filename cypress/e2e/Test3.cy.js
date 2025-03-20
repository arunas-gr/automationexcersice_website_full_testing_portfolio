// Test Case 3: Login User with incorrect email and password
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click on 'Signup / Login' button
// 5. Verify 'Login to your account' is visible
// 6. Enter incorrect email address and password
// 7. Click 'login' button
// 8. Verify error 'Your email or password is incorrect!' is visible

/// <reference types="cypress" />

describe('Test Case 3: Login User with incorrect email and password', () => {
    it('Login User with incorrect email and password', () => {
        // 1. Launch browser
        // 2. Navigate to url 'http://automationexercise.com'
        // 3. Verify that home page is visible successfully
        cy.step0();
        // 4. Click on 'Signup / Login' button
        cy.contains('Signup / Login').should('exist').click();
        // 5. Verify 'Login to your account' is visible
        cy.get('.login-form h2').should('have.text', 'Login to your account').and('be.visible');
        // 6. Enter incorrect email address and password
        cy.get('[data-qa="login-email"]').type('wrong@user.com');
        cy.get('[data-qa="login-password"]').type('123456');
        // 7. Click 'login' button
        cy.get('[data-qa="login-button"]').click();
        // 8. Verify error 'Your email or password is incorrect!' is visible
        cy.get('form p').contains('Your email or password is incorrect!').and('be.visible');
    })
});