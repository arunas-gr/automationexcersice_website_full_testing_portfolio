// 16. Test Case 16: Place Order: Login before Checkout
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click 'Signup / Login' button
// 5. Fill email, password and click 'Login' button
// 6. Verify 'Logged in as username' at top
// 7. Add products to cart
// 8. Click 'Cart' button
// 9. Verify that cart page is displayed
// 10. Click Proceed To Checkout
// 11. Verify Address Details and Review Your Order
// 12. Enter description in comment text area and click 'Place Order'
// 13. Enter payment details: Name on Card, Card Number, CVC, Expiration date
// 14. Click 'Pay and Confirm Order' button
// 15. Verify success message 'Your order has been placed successfully!'
// 16. Click 'Delete Account' button
// 17. Verify 'ACCOUNT DELETED!' and click 'Continue' button

describe('Test Case 16: Place Order: Login before Checkout', () => {
    it('Verify success message "Your order has been placed successfully!"', () => {

        // 1. Launch browser
        // 2. Navigate to url 'http://automationexercise.com'
        // 3. Verify that home page is visible successfully
        cy.step0();
        cy.url().should('eq', 'https://automationexercise.com/');
        // register account
        // logout

        // 4. Click 'Signup / Login' button
        cy.get('a[href="/login"]').contains('Signup / Login').click();

        // 3.1. Click on 'Signup / Login' button
        cy.contains('Signup / Login').should('be.visible');
        cy.get('body').should('be.visible');
        cy.get('a[href="/login"]').click();

        // // 3.2. Verify 'New User Signup!' is visible
        // cy.contains('New User Signup!').should('be.visible');

        // // 3.3. Enter name and email address
        cy.get('input[data-qa="signup-name"]').type('VartotojasX');
        cy.get('input[data-qa="signup-email"]').type('vartotojasX@kazkur.com');

        // // 3.4. Click 'Signup' button
        cy.get('[data-qa="signup-button"]').click();

        //3.5 Create user and verify it logs in
        cy.createAccount('VartotojasX', 'vartotojasX', '123456789');
        cy.get('li a b').should('have.text', 'VartotojasX');

        // // 3.6. Logout of the account
        cy.get('.shop-menu > .nav > :nth-child(4) > a').contains(' Logout').click();

        // 4. Click on 'Signup / Login' button
        // 5. Verify 'Login to your account' is visible
        // 6. Enter correct email address and password
        cy.get('input[data-qa="login-email"]').type('vartotojasX@kazkur.com');
        cy.get('input[data-qa="login-password"]').type('123456789');
        cy.get('[data-qa="login-button"]').click();

        // 6. Verify 'Logged in as username' at top
        cy.contains('Logged in as').should('exist').and('be.visible');

        // 7. Add products to cart

        cy.addProducts();

        // 8. Click 'Cart' button
        cy.contains('Cart').click();

        // 9. Verify that cart page is displayed
        cy.get('.breadcrumbs').contains('Shopping Cart').should('exist');

        // 10. Click Proceed To Checkout
        cy.contains('Proceed To Checkout').click();

        // 11. Verify Address Details and Review Your Order
        cy.get('.step-one h2').contains('Address Details').should('be.visible');

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

        //Deleting account
        cy.deleteAccountWhenLoggedIn();

    })
})
