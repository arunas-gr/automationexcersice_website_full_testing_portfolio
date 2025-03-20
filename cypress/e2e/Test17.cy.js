// Test Case 17: Remove Products From Cart
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Add products to cart
// 5. Click 'Cart' button
// 6. Verify that cart page is displayed
// 7. Click 'X' button corresponding to particular product
// 8. Verify that product is removed from the cart

describe('Test Case 17: Remove Products From Cart', () => {
    it('Remove Products From Cart', () => {
        cy.step0();
        cy.addProducts();

        // 5. Click 'Cart' button
        cy.contains('Cart').click();

// 6. Verify that cart page is displayed
        cy.get('.breadcrumbs').contains('Shopping Cart').should('exist');
        cy.get('a[href="/product_details/1"]').contains('Blue Top').should('be.visible');
        cy.get('a[href="/product_details/2"]').contains('Men Tshirt').should('be.visible');
        cy.get('a[href="/product_details/5"]').contains('Winter Top').should('be.visible');

        // 7. Click 'X' button corresponding to particular product
        cy.get('[data-product-id="1"]').click();

        // 8. Verify that product is removed from the cart
        cy.get('a[href="/product_details/1"]').should('not.exist');

    })
});