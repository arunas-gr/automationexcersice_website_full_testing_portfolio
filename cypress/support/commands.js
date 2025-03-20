
Cypress.Commands.add('step0', () => {
    cy.visit('https://automationexercise.com/');
    cy.url().should('eq', 'https://automationexercise.com/');
    cy.get('body').should('be.visible');
});

Cypress.Commands.add('addProducts', () => {
    cy.get('.product-image-wrapper').eq(0).trigger('mouseover');
    cy.get('.product-image-wrapper').eq(0).contains('Add to cart').click();
    cy.contains('Continue Shopping').click();
    cy.get('.product-image-wrapper').eq(1).trigger('mouseover');
    cy.get('.product-image-wrapper').eq(1).contains('Add to cart').click();
    cy.contains('Continue Shopping').click();
    cy.get('.product-image-wrapper').eq(4).trigger('mouseover');
    cy.get('.product-image-wrapper').eq(4).contains('Add to cart').click();
    cy.contains('View Cart').click();
})

Cypress.Commands.add('createAccount', (name, email, password) => {
    // cy.session('createAccSession',()=>{
    // cy.get('#name').clear().type(name); / neleidžią ištrinti
    // cy.get('#email').clear().type(email, {force : true}); - prievartavimas neveikia - neištrina 
    cy.get('#password').type(password);
    cy.get('[data-qa="days"]').select('31');
    cy.get('[data-qa="months"]').select('December');
    cy.get('[data-qa="years"]').select('1971');
    cy.get('#newsletter').click();
    cy.get('#optin').click();
    cy.get('#first_name').type(name);
    cy.get('#last_name').type('Jono Pavardė');
    cy.get('#company').type('Dešrų rojus');
    cy.get('#address1').type('Dešrų g.');
    cy.get('#address2').type('1');
    cy.get('[data-qa="country"]').select('Canada');
    cy.get('#state').type('Harbin');
    cy.get('#city').type('Harbin City');
    cy.get('#zipcode').type('12345');
    cy.get('#mobile_number').type('555-555-555');
    cy.get('[data-qa="create-account"]').click();
    cy.get('[data-qa="account-created"]').contains('Account Created!');
    cy.get('[data-qa="account-created"]').should('be.visible');
    cy.get('[data-qa="continue-button"]').click();
    // });
})

Cypress.Commands.add('paymentCardData', () => {
    cy.get('[data-qa="name-on-card"]').type('Slaptas Pirkejas');
    cy.get('[data-qa="card-number"]').type('1234 5678 9012 3456');
    cy.get('[data-qa="cvc"]').type('999');
    cy.get('[data-qa="expiry-month"]').type('12');
    cy.get('[data-qa="expiry-year"]').type('2025');
    cy.get('[data-qa="pay-button"]').click();
})

Cypress.Commands.add('logInAnddeleteAccount', () => {
    cy.contains('Signup / Login').should('exist').click();

    // Verify 'Login to your account' is visible
    cy.get('.login-form h2').should('have.text', 'Login to your account').and('be.visible');

    // Enter correct email address and password
    cy.get('[data-qa="login-email"]').type('vartotojasX@kazkur.com');
    cy.get('[data-qa="login-password"]').type('123456789');
    cy.get('[data-qa="login-button"]').should('be.visible').click();
    cy.get('ul.navbar-nav li').contains(' Delete Account').click();
    cy.get('h2.title.text-center').should('contain', 'Account Deleted!').and('be.visible');
});

Cypress.Commands.add('deleteAccountWhenLoggedIn', () => {
    cy.get('.shop-menu > .nav > :nth-child(5) > a').contains(' Delete Account').click();
    cy.get('h2.title.text-center').should('contain', 'Account Deleted!').and('be.visible');
})