// Test Case 8: Verify All Products and product detail page
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click on 'Products' button
// 5. Verify user is navigated to ALL PRODUCTS page successfully
// 6. The products list is visible
// 7. Click on 'View Product' of first product
// 8. User is landed to product detail page
// 9. Verify that detail detail is visible: product name, category, price, availability, condition, brand

/// <reference types="cypress" />
describe('Test Case 8: Verify All Products and product detail page', () => {
    it('Verify All Products and product detail page', () => {
        // // 1. Launch browser
        // // 2. Navigate to url 'http://automationexercise.com'
        cy.step0();
        // 3. Verify that home page is visible successfully
        cy.get('body').should('be.visible');
        // // 4. Click on 'Products' button
        cy.get('a[href="/products"]').contains('Products').click();
        cy.url().should('eq', 'https://automationexercise.com/products');
        cy.get('body').should('be.visible');

        // 5. Verify user is navigated to ALL PRODUCTS page successfully
        cy.get('div.features_items h2').contains('All Products').should('be.visible');

        // 6. The products list is visible??
        cy.get('a[href="/products"]').contains('Products').click();

        // 7. Click on 'View Product' of first product
        cy.get('a[href="/product_details/1"]').contains('View Product').click();

        // 8. User is landed to product detail page
        cy.url().should('eq', 'https://automationexercise.com/product_details/1');

        // 9. Verify that detail detail is visible: product name, category, price, availability, condition, brand
        
        //Extra - chacking if the product quantity is visible
        cy.get('#quantity').should('be.visible');
        cy.get('#quantity').should('not.have.value', '');

        // Cheking if the product category is visible
        cy.get('.product-information p').should('contain.text', 'Category:');

        // checking whether the price is visible
        cy.get('.product-information span > span')  // price is in <span> 
            .should('be.visible')
            .and('not.be.empty');

        // checking if availability is displayed
        cy.get('.product-information p')
            .contains('Availability:')  // Look for the text "Availability:"
            .should('be.visible')
            .and('not.be.empty');

        // checking if condition is displayed
        cy.get('.product-information p')
            .contains('Condition:')
            .should('be.visible')
            .and('not.be.empty');

        //checking if brand is displayed
        cy.get('.product-information p')
            .contains('Brand:')
            .should('be.visible')
            .and('not.be.empty');

    })
})