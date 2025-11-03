describe('System administration navigation', () => {
  beforeEach(() => {
    cy.login();
    cy.visit('https://test.wisl.nwu.ac.za/nav/systemAdministrationOverview/');
    cy.url().should('include', '/systemAdministrationOverview');
  });

  it('navigates to Program Versions', () => {
    cy.get('button').contains('Program Versions').closest('button').click();
    cy.url().should('include', '/qualificationsGrid/main');
  });

  it('navigates to Modules', () => {
    cy.get('button').contains('Modules').closest('button').click();
    cy.url().should('include', 'modulesOfficesGrid/main');
  });

  it('navigates to Campuses', () => {
    cy.get('button').contains('Campuses').closest('button').click();
    cy.url().should('include', 'campusesGrid/main');
  });
});
