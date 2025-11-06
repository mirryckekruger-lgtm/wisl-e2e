describe('Navigating Education Side Bar Menu', () => {
  beforeEach(() => {
    // Arrange
    cy.login();
    cy.visit('https://test.wisl.nwu.ac.za/nav/systemAdministrationOverview/');
    cy.url().should('include', '/systemAdministrationOverview');
  });

  it('navigates to Education Reports', () => {
    cy.get('button:contains("Reports")').eq(1).click();
    cy.pause()
    cy.get('button').contains('Placements').closest('button').click();
     cy.get('button').contains('Total Placements').closest('button').click();
    cy.url().should('include', 'reportOnCampusPlacements/main');
  })

})
