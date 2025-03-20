// Test Case 15: Place Order: Register before Checkout
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click 'Signup / Login' button
// 5. Fill all details in Signup and create account
// 6. Verify 'ACCOUNT CREATED!' and click 'Continue' button
// 7. Verify ' Logged in as username' at top
// 8. Add products to cart
// 9. Click 'Cart' button
// 10. Verify that cart page is displayed
// 11. Click Proceed To Checkout
// 12. Verify Address Details and Review Your Order
// 13. Enter description in comment text area and click 'Place Order'
// 14. Enter payment details: Name on Card, Card Number, CVC, Expiration date
// 15. Click 'Pay and Confirm Order' button
// 16. Verify success message 'Your order has been placed successfully!'
// 17. Click 'Delete Account' button
// 18. Verify 'ACCOUNT DELETED!' and click 'Continue' button

describe('Test Case 15: Place Order: Register before Checkout', () => {
    it('Place Order:Register before Checkout', () => {
        cy.step0();

        // 4. Click 'Signup / Login' button
        cy.get('a[href="/login"]').contains('Signup / Login').click();

        // 5. Fill all details in Signup and create account
        // 6. Verify 'ACCOUNT CREATED!' and click 'Continue' button
        // 7. Verify ' Logged in as username' at top

        cy.get('[data-qa="signup-name"]').type('VartotojasX');
        cy.get('[data-qa="signup-email"]').type('vartotojasX@kazkur.com');
        cy.get('[data-qa="signup-button"]').click();
        cy.createAccount('VartotojasX', 'vartotojasX@kazkur.com', '123456789');
        cy.contains('Logged in as').should('exist').and('be.visible');


        // 8. Add products to cart
        cy.addProducts();

        // 9. Click 'Cart' button
        cy.contains('Cart').click();

        // 10. Verify that cart page is displayed
        cy.get('.breadcrumbs').contains('Shopping Cart').should('exist');

        // 11. Click Proceed To Checkout
        cy.contains('Proceed To Checkout').click();

        // 12. Verify Address Details and Review Your Order
        cy.get('.step-one h2').contains('Address Details').should('be.visible');
        cy.get('.step-one h2').contains('Review Your Order').should('be.visible');

        // 13. Enter description in comment text area and click 'Place Order'
        cy.get('.form-group textarea').type('send my order ASAP, plz, for I cannot live without it anymore');
        cy.get('a[href="/payment"]').contains('Place Order').click();

        // 14. Enter payment details: Name on Card, Card Number, CVC, Expiration date
        // 15. Click 'Pay and Confirm Order' button
        cy.paymentCardData();

        // 16. Verify success message 'Your order has been placed successfully!'
        cy.get('h2.title.text-center[data-qa="order-placed"]')
            .should('be.visible')
            .and('contain.text', 'Order Placed!');

        // 17. Click 'Delete Account' button
        cy.get('.shop-menu > .nav > :nth-child(5) > a').contains(' Delete Account').click();
        cy.get('h2.title.text-center').should('contain', 'Account Deleted!').and('be.visible');

        // 18. Verify 'ACCOUNT DELETED!' and click 'Continue' button
        cy.get('[data-qa="account-deleted"]').should('be.visible');
        cy.get('[data-qa="account-deleted"]').should('have.text', 'Account Deleted!');

        cy.get('[data-qa="continue-button"]').click();

    })
})