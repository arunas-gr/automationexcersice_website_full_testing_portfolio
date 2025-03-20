// Test Case 22: Add to cart from Recommended items
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Scroll to bottom of page
// 4. Verify 'RECOMMENDED ITEMS' are visible
// 5. Click on 'Add To Cart' on Recommended product
// 6. Click on 'View Cart' button
// 7. Verify that product is displayed in cart page

describe('Test Case 22: Add to cart from Recommended items', () => {
    it('Add to cart from Recommended items', () => {
        cy.step0();
        cy.scrollTo('bottom');

        // 4. Verify 'RECOMMENDED ITEMS' are visible
        cy.get('.recommended_items').scrollIntoView({ block: 'center' }).should('be.visible');
        // cy.contains('h2', 'RECOMMENDED ITEMS').should('be.visible'); // meta klaidą
        cy.get('.recommended_items').find('.add-to-cart').first().click({ force: true });
        cy.get('.recommended_items .productinfo.text-center p')
            .first()
            .invoke('text')
            .then((text) => {
                cy.log('Product Name:', text.trim()); // Logs the product name
                cy.wrap(text.trim()).as('productName'); // Store product name
            });

        cy.get('.modal-footer .btn-success').click(); // uždarom modalą

        // 6. Click 'Cart' button and verify that products are visible in cart
        cy.get('ul.nav.navbar-nav').find('a[href="/view_cart"]').click();

        // 7. Verify that product is displayed in cart page
        cy.get('@productName').then((productName) => {
            cy.get('.cart_info').should('be.visible');
            cy.get('.cart_info').should('contain.text', productName); // Verify correct product is in cart
        });

    })
});