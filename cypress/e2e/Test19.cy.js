// Test Case 19: View & Cart Brand Products
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Click on 'Products' button
// 4. Verify that Brands are visible on left side bar
// 5. Click on any brand name
// 6. Verify that user is navigated to brand page and brand products are displayed
// 7. On left side bar, click on any other brand link
// 8. Verify that user is navigated to that brand page and can see products

describe('Test Case 19: View & Cart Brand Products', () => {
    it('View & Cart Brand Products', () => {
        cy.step0();

        // kodas testui su vienu pasirinktu produktu

        // 3. Click on 'Products' button
        // cy.get('a[href="/products"]').should('contain', 'Products').and('be.visible').click();

        // // 4. Verify that Brands are visible on left side bar
        // cy.get('.brands_products').should('be.visible');

        // // 5. Click on any brand name
        // cy.get('a[href="/brand_products/Polo"]').contains('Polo').click();
        // cy.get('.breadcrumb li').contains('Polo').should('be.visible');
        // cy.get('.features_items').should('be.visible');
        // cy.get('.features_items .col-sm-4').its('length').should('be.greaterThan', 0);
        // cy.get('a[href="/brand_products/Babyhug"]').contains('Babyhug').click();
        // cy.get('.breadcrumb li').contains('Babyhug').should('be.visible');
        // cy.get('.features_items h2').contains('Brand - Babyhug Products').should('be.visible');
        // cy.get('.features_items .col-sm-4').its('length').should('be.greaterThan', 0);

        // Kodas testui, kad paimtų visą brandų sąrašą ir pagal jį automatiškai prasuktų visus

        cy.get('a[href="/products"]').should('contain', 'Products').and('be.visible').click();

        // Verify that Brands are visible in the left sidebar
        cy.get('.brands_products').should('be.visible');

        // Collect all brand elements into an array
        cy.get('.brands-name ul.nav-stacked li a').then(($brands) => {
            const brandArray = [];

            // Extract brand names from elements
            $brands.each((index, brand) => {
                let brandName = Cypress.$(brand).text().replace(/\(\d+\)/, '').trim();
                let brandHref = Cypress.$(brand).attr('href');
                brandArray.push({ name: brandName, href: brandHref });
            });

            // Iterate over the array of brand names
            cy.wrap(brandArray).each((brandObj, index) => {
                cy.get(`a[href="${brandObj.href}"]`).click(); // Click on brand

                // Verify breadcrumb contains brand name
                cy.get('.breadcrumb li').should('contain.text', brandObj.name);

                // Verify products section is visible
                cy.get('.features_items').should('be.visible');

                // Verify that brand-specific products are displayed
                cy.get('.features_items .col-sm-4').its('length').should('be.greaterThan', 0);

                // Reporting on the number of products of each brand
                cy.get('.features_items .col-sm-4').its('length').then((productCount) => {
                    cy.log(`Number of items in brand "${brandObj.name}" equals to ${productCount}`);
                    expect(productCount).to.be.greaterThan(0);
                });

            });
        });
    })
});