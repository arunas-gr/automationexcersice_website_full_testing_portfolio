// Test Case 25: Verify Scroll Up using 'Arrow' button and Scroll Down functionality - o čia ne tas pats su 26?
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Scroll down page to bottom
// 5. Verify 'SUBSCRIPTION' is visible
// 6. Click on arrow at bottom right side to move upward
// 7. Verify that page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screen

describe('Test Case 25: Verify Scroll Up using Arrow button and Scroll Down functionality', () => {
    it('Verify Scroll Up using Arrow button and Scroll Down functionality', () => {
        // 1. Launch browser
        // 2. Navigate to url 'http://automationexercise.com'
        cy.step0();

        // 3. Verify that home page is visible successfully
        cy.url().should('eq', 'https://automationexercise.com/');
        cy.get('body').should('be.visible');
        cy.document().its('readyState').should('eq', 'complete');

        // 4. Scroll down page to bottom
        cy.scrollTo('bottom');

        // 5. Verify 'SUBSCRIPTION' is visible // tricky condition - the text "subscription" on the page is written in lowercase
        cy.contains('h2', 'Subscription').should('be.visible');

        // 6. Click on arrow at bottom right side to move upward
        cy.get('#scrollUp').should('be.visible').click();

        // 7. Verify that page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screen
        cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible');
    })
});