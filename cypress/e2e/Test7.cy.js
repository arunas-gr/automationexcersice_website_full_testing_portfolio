// Test Case 7: Verify Test Cases Page
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click on 'Test Cases' button
// 5. Verify user is navigated to test cases page successfully

/// <reference types="cypress" />

describe('Test Case 7: Verify Test Cases Page', () => {
    it('Verify Test Case Page', () => {
        // 1. Launch browser
        // 2. Navigate to url 'http://automationexercise.com'
        cy.step0();

        // 3. Verify that home page is visible successfully
        cy.get('body').should('be.visible');

        // 4. Click on 'Test Cases' button
        cy.get('a[href="/test_cases"]').contains('Test Cases').click();

        // 5. Verify user is navigated to test cases page successfully
        cy.url().should('eq', 'https://automationexercise.com/test_cases');
        cy.get('body').should('be.visible');
        cy.get('.title.text-center b').should(($el) => {
            expect($el.text().trim()).to.eq('Test Cases');
        });

        //6. Additional - expansion of each link
        cy.get('a').each(($link) => {
            const linkText = $link.text();
            if (linkText.startsWith('Test Case')) {
                cy.wrap($link).click();
            }
        });
    })
});