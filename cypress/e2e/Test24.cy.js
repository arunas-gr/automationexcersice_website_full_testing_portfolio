// Test Case 24: Download Invoice after purchase order
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
// 19. Click 'Download Invoice' button and verify invoice is downloaded successfully.
// 20. Click 'Continue' button
// 21. Click 'Delete Account' button
// 22. Verify 'ACCOUNT DELETED!' and click 'Continue' button

describe('Test Case 24: Download Invoice after purchase order', () => {
    it('Download Invoice after purchase order', () => {
        // 1. Launch browser
        // 2. Navigate to url 'http://automationexercise.com'
        // 3. Verify that home page is visible successfully
        cy.step0();

        // 4. Add products to cart
        cy.get('a[href="/products"]').contains('Products').click();
        cy.url().should('eq', 'https://automationexercise.com/products');
        cy.get('.product-overlay').first().trigger('mouseover');

        // 4. Add products to cart
        cy.contains('Add to cart').click();
        cy.get('.modal-footer .btn-success').click();
        // cy.get('a[href="/view_cart"]').click();
        cy.contains('Cart').click();

        // 6. Verify that cart page is displayed
        cy.url().should('include', '/view_cart');

        // 7. Click Proceed To Checkout
        cy.contains('Proceed To Checkout').click();
        // cy.contains('Register / Login').click();
        cy.get('.modal-body a[href="/login"]')
            .should('be.visible')
            .click();

        // 9. Fill all details in Signup and create account
        // 10. Verify 'ACCOUNT CREATED!' and click 'Continue' button
        cy.get('[data-qa="signup-name"]').type('Dar vienas vardas');
        cy.get('[data-qa="signup-email"]').type('emailas@emailas.za');
        cy.get('[data-qa="signup-button"]').click();
        cy.createAccount('Dar vienas vardas', 'emailas@emailas.za', '123456789');

        // 11. Verify ' Logged in as username' at top
        cy.contains('Logged in as Dar vienas vardas').should('be.visible');

        // 12. Click 'Cart' button
        cy.get('a[href="/view_cart"]').first().click();
        cy.get('.cart_info').should('be.visible');

        // 13. Click Proceed To Checkout
        cy.get('.check_out').click();

        // 14. Verify Address Details and Review Your Order
        cy.contains('Review Your Order').should('be.visible');

        // 15. Enter description in comment text area and click 'Place Order'
        cy.get('textarea[name="message"]').type('Atvežkit ką nors!');
        cy.contains('Place Order').click();

        // 16. Enter payment details: Name on Card, Card Number, CVC, Expiration date
        // 17. Click 'Pay and Confirm Order' button
        cy.paymentCardData();

        // 17. Click 'Pay and Confirm Order' button

        // 18. Verify success message 'Your order has been placed successfully!' - inaccuracy - exact message displayed is "Order Placed!"
        cy.contains('Order Placed!').should('be.visible');

        // 19. Click 'Download Invoice' button and verify invoice is downloaded successfully.
        cy.contains('Download Invoice').click();

        // 20. Click 'Continue' button
        cy.contains('Continue').click();

        // 21. Click 'Delete Account' button
        // 22. Verify 'ACCOUNT DELETED!' and click 'Continue' button
        cy.deleteAccountWhenLoggedIn();
        cy.contains('Continue').click();
    })
});