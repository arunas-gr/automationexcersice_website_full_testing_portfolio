// Test Case 26: Verify Scroll Up without 'Arrow' button and Scroll Down functionality
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Scroll down page to bottom
// 5. Verify 'SUBSCRIPTION' is visible
// 6. Scroll up page to top
// 7. Verify that page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screen

describe('Test Case 26: Verify Scroll Up without Arrow button and Scroll Down functionality', () => {
    it('Verify Scroll Up without Arrow button and Scroll Down functionality', () => {

        // 1. Launch browser
        // 2. Navigate to url 'http://automationexercise.com'
        cy.step0();

        // 3. Verify that home page is visible successfully
        cy.url().should('eq', 'https://automationexercise.com/'); // ar to pakanka?
        cy.document().its('readyState').should('eq', 'complete');

        // 3. Verify that home page is visible successfully
        cy.scrollTo('bottom');

        // 5. Verify 'SUBSCRIPTION' is visible // tricky condition - the text "subscription" on the page is written in lowercase
        cy.get('h2').should('contain', 'Subscription').and('be.visible');

        // 6. Scroll up page to top
        cy.scrollTo('top');

        // 7. Verify that page is scrolled up ???
        cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible');
    })

});