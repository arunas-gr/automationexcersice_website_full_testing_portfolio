// Test Case 6: Contact Us Form
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click on 'Contact Us' button
// 5. Verify 'GET IN TOUCH' is visible
// 6. Enter name, email, subject and message
// 7. Upload file
// 8. Click 'Submit' button
// 9. Click OK button
// 10. Verify success message 'Success! Your details have been submitted successfully.' is visible
// 11. Click 'Home' button and verify that landed to home page successfully

import 'cypress-file-upload';
/// <reference types="cypress" />
describe('Test Case 6: Contact Us Form', () => {
    it('Contact Us Form', () => {
        // 1. Launch browser
        // 2. Navigate to url 'http://automationexercise.com'
        cy.step0();
        
        // 3. Verify that home page is visible successfully
        cy.get('body').should('be.visible');

        // 4. Click on 'Contact Us' button
        cy.get('ul.navbar-nav li').contains('Contact us').click();

        // 5. Verify 'GET IN TOUCH' is visible
        cy.get('.contact-form h2').contains('Get In Touch').and('be.visible');

        // 6. Enter name, email, subject and message
        cy.get('[data-qa="name"]').type('Vardas');
        cy.get('[data-qa="email"]').type('right@email.lt');
        cy.get('[data-qa="subject"]').type('failed delivery');
        cy.get('[data-qa="message"]').type('I have not received my parcel yet. When I will get it?');
        
        // 7. Upload file
        cy.get('input[type="file"]').attachFile('complaint.txt');

        // 8. Click 'Submit' button
        cy.get('[data-qa="submit-button"]').click();

        // 9. Click OK button
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.eq('Press ok to proceed!');
        });
        cy.on('window:confirm', () => true);

        // 10. Verify success message 'Success! Your details have been submitted successfully.' is visible
        cy.get('.alert-success').contains('Success! Your details have been submitted successfully.');
        
        // 11. Click 'Home' button and verify that landed to home page successfully
        cy.get('a[href="/"]').contains('Home').click(); //nepaima ahref kazkodel be contains???
        cy.url().should('eq', 'https://automationexercise.com/');
        cy.get('.logo').should('be.visible');
    })
})