describe('Navigating Education Side Bar Menu', () => {
  beforeEach(() => {
    // Arrange
    cy.login();
    cy.visit('https://test.wisl.nwu.ac.za/nav/systemAdministrationOverview/');
    cy.url().should('include', '/systemAdministrationOverview');
    cy.get('button:contains("Reports")').eq(1).click();
    cy.get('button')
      .contains(/^ Placements$/)
      .closest('button')
      .click();
    cy.get('button').contains('Total Placements').closest('button').click();
    cy.url().should('include', 'reportOnCampusPlacements/main');
  });

  it('Filter by year level', () => {
    cy.get('input[formcontrolname=yearLevel]').click();
    cy.get('mat-option').contains('3rd years').click();
    // Apply the filter
    cy.get('button#ci285081').click();
    // Loading before filters are updated
    cy.wait(6000);
    // For each row in the table, verify that the year level column contains '3rd years'
    cy.get('table tbody tr').each(($row) => {
      cy.wrap($row)
        .find('td')
        .eq(2) // Assuming the year level is in the 3rd column (index 2)
        .should('contain.text', '3');
    });
  });
});
