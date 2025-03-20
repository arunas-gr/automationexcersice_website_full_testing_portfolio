// Test Case 21: Add review on product
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Click on 'Products' button
// 4. Verify user is navigated to ALL PRODUCTS page successfully
// 5. Click on 'View Product' button
// 6. Verify 'Write Your Review' is visible
// 7. Enter name, email and review
// 8. Click 'Submit' button
// 9. Verify success message 'Thank you for your review.'

describe('Test Case 20: Search Products and Verify Cart After Login / Test Case 21: Add review on product', () => {
    it('Add review on product', () => {
        cy.step0();

        // 3. Click on 'Products' button
        cy.get('a[href="/products"]').contains('Products').click();

        // 4. Verify user is navigated to ALL PRODUCTS page successfully
        cy.get('.features_items h2').contains('All Products').should('be.visible');
        cy.get('.features_items .col-sm-4').its('length').should('be.greaterThan', 0);

        // 5. Click on 'View Product' button
        cy.get('a[href="/product_details/1"]').contains('View Product').click();

        // 6. Verify 'Write Your Review' is visible
        cy.get('a[href="#reviews"]').contains('Write Your Review').should('be.visible');

        // 7. Enter name, email and review
        cy.get('#name').type('Labai slapta pirkėja');
        cy.get('#email').type('pirkeja@x.lt');
        cy.get('#review').type('Kaip tai buvo gerai! Bet daugiau nereikia. Niekada nebepirksiu. Ačiū!');

        // 8. Click 'Submit' button
        cy.get('#button-review').click();
        cy.contains('Thank you for your review').should('be.visible');
        cy.wait(1000);
        //// trūksta sustojimo - sistema review tekstą palaiko nepilną sekundę
        

    })
});