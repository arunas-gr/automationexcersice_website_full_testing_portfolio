/// <reference types="cypress" />

// Test Case 1: Register User
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click on 'Signup / Login' button
// 5. Verify 'New User Signup!' is visible
// 6. Enter name and email address
// 7. Click 'Signup' button
// 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
// 9. Fill details: Title, Name, Email, Password, Date of birth
// 10. Select checkbox 'Sign up for our newsletter!'
// 11. Select checkbox 'Receive special offers from our partners!'
// 12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
// 13. Click 'Create Account button'
// 14. Verify that 'ACCOUNT CREATED!' is visible
// 15. Click 'Continue' button
// 16. Verify that 'Logged in as username' is visible
// 17. Click 'Delete Account' button
// 18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button

describe('Test Case 1: Register User', () => {
    it('Register User', () => {

        // 1. Launch browser
        // 2. Navigate to url 'http://automationexercise.com'
        // 3. Verify that home page is visible successfully
        cy.step0();
        cy.url().should('eq', 'https://automationexercise.com/');

        // 4. Click on 'Signup / Login' button
        cy.contains('Signup / Login').should('be.visible');
        cy.get('body').should('be.visible');
        cy.get('a[href="/login"]').click();

        // 5. Verify 'New User Signup!' is visible
        cy.contains('New User Signup!').should('be.visible');

        // 6. Enter name and email address
        cy.get('input[data-qa="signup-name"]').type('VartotojasX');
        cy.get('input[data-qa="signup-email"]').type('vartotojasX@kazkur.com');

        // 7. Click 'Signup' button
        cy.get('[data-qa="signup-button"]').click();

        // 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
        cy.contains('h2.title.text-center', 'Enter Account Information').should('be.visible');

        // 9. Fill details: Title, Name, Email, Password, Date of birth
        // 10. Select checkbox 'Sign up for our newsletter!'
        // 11. Select checkbox 'Receive special offers from our partners!'
        // 12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
        // 13. Click 'Create Account button'
        // 14. Verify that 'ACCOUNT CREATED!' is visible
        // 15. Click 'Continue' button
        cy.createAccount('VartotojasX', 'vartotojasX@kazkur.com', '123456789');

        // 16. Verify that 'Logged in as username' is visible
        cy.get('li a b').should('have.text', 'VartotojasX');

        // 17. Click 'Delete Account' button
        cy.get('.shop-menu > .nav > :nth-child(5) > a').contains(' Delete Account').click();
        cy.get('h2.title.text-center').should('contain', 'Account Deleted!').and('be.visible');
    
        // // 18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
        cy.get('[data-qa="account-deleted"]').should('be.visible');
        cy.get('[data-qa="account-deleted"]').should('have.text', 'Account Deleted!');
    })
});