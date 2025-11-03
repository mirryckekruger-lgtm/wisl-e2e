describe('Selecting an office', () => {
  beforeEach(() => {
    // Arrange
    cy.login();
    cy.visit('https://test.wisl.nwu.ac.za/nav/systemAdministrationOverview/');
    cy.url().should('include', '/systemAdministrationOverview');
  });

  it('selects the Nursing office', () => {
    // Act
    cy.get('input[formcontrolname=office]').click();
    // Dropdown is expanded
    cy.get('mat-option').contains('Nursing').click();

    // Assert
    cy.get('input[formcontrolname=wilOffice]').should('have.value', 'Nursing');
  });

  it('selects the __________ office', () => {
    // Act
    cy.get('input[formcontrolname=office]').click();
    // Dropdown is expanded
    cy.get('mat-option').contains('Nursing').click();

    // Assert
    cy.get('input[formcontrolname=wilOffice]').should('have.value', 'Nursing');
  });
});
