// // Test Case 11: Verify Subscription in Cart page
// // 1. Launch browser
// // 2. Navigate to url 'http://automationexercise.com'
// // 3. Verify that home page is visible successfully
// // 4. Click 'Cart' button
// // 5. Scroll down to footer
// // 6. Verify text 'SUBSCRIPTION'
// // 7. Enter email address in input and click arrow button
// // 8. Verify success message 'You have been successfully subscribed!' is visible

/// <reference types="cypress" />

describe('Test Case 11: Verify Subscription in Cart page', () => {
    it('Verify Subscription in Cart page', () => {
        // // 1. Launch browser
        // // 2. Navigate to url 'http://automationexercise.com'
        cy.step0();

        // 3. Verify that home page is visible successfully
        cy.get('body').should('be.visible');

        // // 4. Click 'Cart' button
        cy.contains('Cart').click();

        // // 5. Scroll down to footer
        cy.scrollTo('bottom');      
        cy.get('footer').should('be.visible');

        // // 6. Verify text 'SUBSCRIPTION'
        cy.get('.single-widget h2').contains('Subscription').should('be.visible');

        // // 7. Enter email address in input and click arrow button
        cy.get('#susbscribe_email').type('VartotojasX@kazkur.lt');
        cy.get('#subscribe').click();

        // // 8. Verify success message 'You have been successfully subscribed!' is visible
        cy.contains('You have been successfully subscribed!', { timeout: 2000 }).should('be.visible');

    })
})