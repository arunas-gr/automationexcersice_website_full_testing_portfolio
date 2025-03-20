// Test Case 23: Verify address details in checkout page
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
// 12. Verify that the delivery address is same address filled at the time registration of account
// 13. Verify that the billing address is same address filled at the time registration of account
// 14. Click 'Delete Account' button
// 15. Verify 'ACCOUNT DELETED!' and click 'Continue' button

describe('Test Case 23: Verify address details in checkout page', () => {
    it('Verify address details in checkout page', () => {
        cy.step0();
        cy.get('a[href="/login"]').contains('Signup / Login').click();

        // 5. Fill all details in Signup and create account
        cy.get('[data-qa="signup-name"]').type('Dar vienas vardas');
        cy.get('[data-qa="signup-email"]').type('emailas@emailas.za');
        cy.get('[data-qa="signup-button"]').click();

        // 6. Verify 'ACCOUNT CREATED!' and click 'Continue' button
        cy.createAccount('Dar vienas vardas', 'emailas@emailas.za', '123456789');

        // 7. Verify ' Logged in as username' at top
        cy.get('li a b').should('have.text', 'Dar vienas vardas');

        // 8. Add products to cart
        // cy.get('.product-image-wrapper').first().find('.add-to-cart').click();

        cy.get('a.add-to-cart')
        .contains('Add to cart')
        .click({ force: true });

        cy.get('.modal-footer .btn-success').click(); // uždarom modalą

        // 9. Click 'Cart' button
        cy.get('a[href="/view_cart"]').first().click();

        // 10. Verify that cart page is displayed
        cy.get('.cart_info').should('be.visible');

        // 11. Click Proceed To Checkout
        cy.get('.check_out').click();

        // 12. Verify that the delivery address is same address filled at the time registration of account
        // 13. Verify that the billing address is same address filled at the time registration of account
        cy.get('#address_delivery').invoke('text').then((deliveryAddress) => {
            cy.get('#address_invoice').invoke('text').then((invoiceAddress) => {
                if (deliveryAddress.trim() === invoiceAddress.trim()) {
                    cy.log('✅ Address verification passed: Delivery and Billing addresses match');
                } else {
                    cy.log('❌ Address Mismatch:');
                    cy.log(`Delivery Address: ${deliveryAddress.trim()}`);
                    cy.log(`Billing Address: ${invoiceAddress.trim()}`);
                }
            });
        });
        
        // 14. Click 'Delete Account' button
        // 15. Verify 'ACCOUNT DELETED!' and click 'Continue' button
        cy.deleteAccountWhenLoggedIn();
    })
});
