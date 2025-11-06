// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Programmatic CAS login establishing app session.
       */
      login(): Chainable<void>;
    }
  }
}
export {};

Cypress.Commands.add('login', () => {
  const user = Cypress.env('user');

  cy.session(
    `cas-${user.username}`,
    () => {
      // Stub the app /login once to stop the redirect (establish primary origin = app domain)
      cy.intercept('GET', 'https://test.wisl.nwu.ac.za/login', (req) => {
        req.reply('<html><body id="preauth">Pre-auth placeholder</body></html>');
      }).as('preauth');

      cy.visit('https://test.wisl.nwu.ac.za/login');
      cy.wait('@preauth');

      cy.intercept('GET', 'https://test.wisl.nwu.ac.za/login', undefined);

      cy.request({
        url: 'https://test.wisl.nwu.ac.za/login',
        followRedirect: false,
      }).then((r) => {
        if (r.status !== 302 || !r.headers.location) {
          throw new Error(`Expected 302 to CAS, got ${r.status}`);
        }
        const casLoginUrl = r.headers.location as string;
        const casOrigin = new URL(casLoginUrl).origin;

        cy.origin(casOrigin, { args: { casLoginUrl } }, ({ casLoginUrl }) => {
          cy.visit(casLoginUrl);
          cy.get('input[name="username"]').type(Cypress.env('user').username);
          cy.get('input[name="password"]').type(Cypress.env('user').password);
          cy.get('input[type="submit"]').first().click();
        });

        cy.get('#accept').click();
        cy.url().should('include', 'nav/systemAdministrationOverview/');
      });
    },
    {
      validate() {
        cy.getCookie('PHPSESSID').should('exist');
      },
    },
  );
});
