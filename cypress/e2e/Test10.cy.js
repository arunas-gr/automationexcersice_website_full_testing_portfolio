// Test Case 10: Verify Subscription in home page
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Scroll down to footer
// 5. Verify text 'SUBSCRIPTION'
// 6. Enter email address in input and click arrow button
// 7. Verify success message 'You have been successfully subscribed!' is visible

/// <reference types="cypress" />

describe('Test Case 10: Verify Subscription in home page', () => {
    it('Verify Subscription in home page', () => {

        // 1. Launch browser
        // 2. Navigate to url 'http://automationexercise.com'
        cy.step0();

        // 3. Verify that home page is visible successfully
        cy.get('body').should('be.visible');

        // 4. Scroll down to footer
        cy.scrollTo('bottom');

        // 5. Verify text 'SUBSCRIPTION'
        cy.get('footer').should('be.visible');
        cy.get('.single-widget h2').contains('Subscription').should('be.visible');

        // 6. Enter email address in input and click arrow button
        cy.get('#susbscribe_email').type('VartotojasX@kazkur.lt');
        cy.get('#subscribe').click();

        // 7. Verify success message 'You have been successfully subscribed!' is visible
        cy.contains('You have been successfully subscribed!', { timeout: 1000 }).should('be.visible');

    })
})