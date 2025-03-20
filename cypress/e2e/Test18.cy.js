// Test Case 18: View Category Products
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that categories are visible on left side bar
// 4. Click on 'Women' category
// 5. Click on any category link under 'Women' category, for example: Dress
// 6. Verify that category page is displayed and confirm text 'WOMEN - TOPS PRODUCTS'
// 7. On left side bar, click on any sub-category link of 'Men' category
// 8. Verify that user is navigated to that category page

describe('Test Case 18: View Category Products', () => {
    it('View Category Products', () => {
        cy.step0();
        cy.get('.left-sidebar').should('be.visible');

        // 4. Click on 'Women' category
        cy.get('a[href="#Women"]').contains('Women').click();

        // 5. Click on any category link under 'Women' category, for example: Dress
        cy.get('.panel-body ul li').contains('Dress').click();

        // 6. Verify that category page is displayed and confirm text 'WOMEN - TOPS PRODUCTS' - trick with caps
        cy.get('.breadcrumb li').contains('Women > Dress').should('be.visible');
        cy.get('.features_items h2').contains('Women - Dress Products').should('be.visible');
        
        // 7. On left side bar, click on any sub-category link of 'Men' category
        cy.get('a[href="#Men"]').contains('Men').click();

        // 7. On left side bar, click on any sub-category link of 'Men' category
        cy.get('.panel-body ul li').contains('Jeans').click();

        // 8. Verify that user is navigated to that category page
        cy.get('.breadcrumb li').contains('Men > Jeans').should('be.visible');
        cy.get('.features_items h2').contains('Men - Jeans Products').should('be.visible');
    })
});