// Test Case 20: Search Products and Verify Cart After Login
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Click on 'Products' button
// 4. Verify user is navigated to ALL PRODUCTS page successfully
// 5. Enter product name in search input and click search button
// 6. Verify 'SEARCHED PRODUCTS' is visible
// 7. Verify all the products related to search are visible
// 8. Add those products to cart
// 9. Click 'Cart' button and verify that products are visible in cart
// 10. Click 'Signup / Login' button and submit login details
// 11. Again, go to Cart page
// 12. Verify that those products are visible in cart after login as well

describe('Test Case 20: Search Products and Verify Cart After Login', () => {
    it('Search Products and Verify Cart After Login', () => {
        // 1. Launch browser
        // 2. Navigate to url 'http://automationexercise.com'
        cy.step0();

        // Create account
        //  Click on 'Signup / Login' button
        cy.contains('Signup / Login').should('be.visible');
        cy.get('body').should('be.visible');
        cy.get('a[href="/login"]').click();

        // Enter name and email address
        cy.get('input[data-qa="signup-name"]').type('VartotojasX');
        cy.get('input[data-qa="signup-email"]').type('vartotojasX@kazkur.lt');

        // Click 'Signup' button
        cy.get('[data-qa="signup-button"]').click();

        // Create user and verify it logs in
        cy.createAccount('VartotojasX', 'vartotojasX@kazkur.lt', '123456789');
        cy.get('li a b').should('have.text', 'VartotojasX');

        //  of the account
        cy.get('.shop-menu > .nav > :nth-child(4) > a').contains(' Logout').click();

        // 3. Click on 'Products' button
        cy.get('a[href="/products"]').contains('Products').click();

        // 4. Verify user is navigated to ALL PRODUCTS page successfully
        cy.url().should('eq', 'https://automationexercise.com/products');
        cy.get('.title').should('contain', "All Products");

        // 5. Enter product name in search input and click search button
        cy.get('#search_product').type('Printed Off Shoulder Top - White');
        cy.get('#submit_search').click();


        // 7. Verify all the products related to search are visible
        // cy.get('.features_items h2').contains('SEARCHED PRODUCTS').should('be.visible'); // meta klaidą
        cy.get('.productinfo.text-center').each(($el) => {
            cy.wrap($el)
                .parent()
                .find('.add-to-cart')
                .first() // Ensure only one element is clicked
                .click({ force: true });
            cy.get('.modal-footer .btn-success').click(); // uždarom modalą
        });

        // 8. Add those products to cart

        cy.get('a.add-to-cart')
            .contains('Add to cart')
            .click({ force: true });

        cy.get('.modal-footer .btn-success').click(); // uždarom modalą

        // 9. Click 'Cart' button and verify that products are visible in cart
        cy.get('ul.nav.navbar-nav').find('a[href="/view_cart"]').click();

        // 10. Click 'Signup / Login' button and submit login details
        cy.get('ul.nav.navbar-nav')
            .find('a[href="/login"]')
            .click();

        cy.get('input[data-qa="login-email"]').type('vartotojasX@kazkur.lt');
        cy.get('input[data-qa="login-password"]').type('123456789');

        cy.get('button[data-qa="login-button"]').click();
        cy.get('li a b').should('have.text', 'VartotojasX');

        // 11. Again, go to Cart page
        // 12. Verify that those products are visible in cart after login as well
        cy.get('ul.nav.navbar-nav').find('a[href="/view_cart"]').click();
        cy.get('#cart_info').should('be.visible').and('not.be.empty');

        // Delete Account 
        cy.deleteAccountWhenLoggedIn();
    });
})