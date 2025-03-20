// Test Case 13: Verify Product quantity in Cart
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click 'View Product' for any product on home page
// 5. Verify product detail is opened
// 6. Increase quantity to 4
// 7. Click 'Add to cart' button
// 8. Click 'View Cart' button
// 9. Verify that product is displayed in cart page with exact quantity

describe('Test Case 13: Verify Product quantity in Cart', () => {
    it('Verify Product quantity in Cart', () => {
         // // 1. Launch browser
        // // 2. Navigate to url 'http://automationexercise.com'
        cy.step0();

        // 3. Verify that home page is visible successfully
        cy.get('body').should('be.visible');

        cy.get(':nth-child(6) > .product-image-wrapper > .choose > .nav > li > a').should('contain', 'View Product').and('be.visible').click();
        cy.url().should('eq', 'https://automationexercise.com/product_details/4');
        cy.get('.product-information').should('be.visible');
        cy.get('.product-information h2').contains('Stylish Dress').should('be.visible');

        // 6. Increase quantity to 4
        cy.get('#quantity').clear().type('4');

        // 7. Click 'Add to cart' button
        cy.get('.btn').contains('Add to cart').click();

        // 8. Click 'View Cart' button
        cy.contains('View Cart').click();
        cy.url().should('eq', 'https://automationexercise.com/view_cart');

        // 9. Verify that product is displayed in cart page with exact quantity
        cy.get('.cart_quantity button').invoke('text').should('eq', '4');
    })
})