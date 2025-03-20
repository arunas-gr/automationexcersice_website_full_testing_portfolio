// Test Case 14: Place Order: Register while Checkout
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Add products to cart
// 5. Click 'Cart' button
// 6. Verify that cart page is displayed
// 7. Click Proceed To Checkout
// 8. Click 'Register / Login' button
// 9. Fill all details in Signup and create account
// 10. Verify 'ACCOUNT CREATED!' and click 'Continue' button
// 11. Verify ' Logged in as username' at top
// 12.Click 'Cart' button
// 13. Click 'Proceed To Checkout' button
// 14. Verify Address Details and Review Your Order
// 15. Enter description in comment text area and click 'Place Order'
// 16. Enter payment details: Name on Card, Card Number, CVC, Expiration date
// 17. Click 'Pay and Confirm Order' button
// 18. Verify success message 'Your order has been placed successfully!'
// 19. Click 'Delete Account' button
// 20. Verify 'ACCOUNT DELETED!' and click 'Continue' button

describe('Test Case 14: Place Order: Register while Checkout', () => {
    it('Place Order: Register while Checkout', () => {
        // 1. Launch browser
        // 2. Navigate to url 'http://automationexercise.com'
        // 3. Verify that home page is visible successfully
        cy.step0();
        // 4. Add products to cart
        cy.addProducts();
        cy.url().should('eq', 'https://automationexercise.com/view_cart');
        
        // 5. Click 'Cart' button
        // 6. Verify that cart page is displayed
        cy.get('.breadcrumbs li').contains('Cart').should('be.visible');
        

        // 7. Click Proceed To Checkout
        cy.get('.btn').contains('Proceed To Checkout').click();
        cy.get('.modal-footer .btn-success').click(); // uždarom modalą

        // 8. Click 'Register / Login' button
        cy.get('a[href="/login"]').contains('Signup / Login').click();
        cy.get('body').should('be.visible');
        cy.get('a[href="/login"]').click();
        cy.contains('New User Signup!').should('be.visible');
        cy.get('input[data-qa="signup-name"]').type('VartotojasX');
        cy.get('input[data-qa="signup-email"]').type('vartotojasX@kazkur.com');
        cy.get('[data-qa="signup-button"]').click();

        // 9. Fill all details in Signup and create account
        // 10. Verify 'ACCOUNT CREATED!' and click 'Continue' button
        cy.createAccount('VartotojasX', 'vartotojasX@kazkur.com', '123456789');
        cy.get('.shop-menu > .nav > :nth-child(3) > a').contains(' Cart').click();

               // // 11. Verify ' Logged in as username' at top
        cy.contains('Logged in as VartotojasX').should('exist');
        cy.contains('Cart').click();

        // // 13. Click 'Proceed To Checkout' button
        cy.get('.btn').contains('Proceed To Checkout').click();

        // // 14. Verify Address Details and Review Your Order
        cy.get('.step-one h2').contains('Address Details').should('be.visible');
        cy.get('.step-one h2').contains('Review Your Order').should('be.visible');

        // // 15. Enter description in comment text area and click 'Place Order'
        cy.get('.form-group textarea').type('send my order ASAP');

        
        // // 17. Click 'Pay and Confirm Order' button
        cy.get('a[href="/payment"]').contains('Place Order').click();

        cy.paymentCardData();

        // // 18. Verify success message 'Your order has been placed successfully!'
        cy.get('h2.title.text-center[data-qa="order-placed"]')
        .should('be.visible')
        .and('contain.text', 'Order Placed!');
        
        // 19. Click 'Delete Account' button
        cy.get('.shop-menu > .nav > :nth-child(5) > a').contains(' Delete Account').click();

        // 20. Verify 'ACCOUNT DELETED!' and click 'Continue' button
        cy.get('h2.title.text-center').should('contain', 'Account Deleted!').and('be.visible');
    })
})