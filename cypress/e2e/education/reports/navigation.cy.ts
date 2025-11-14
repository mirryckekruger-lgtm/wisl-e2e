describe('Navigating Education Side Bar Menu', () => {
  beforeEach(() => {
    // Arrange
    cy.login();
    cy.visit('https://test.wisl.nwu.ac.za/nav/systemAdministrationOverview/');
    cy.url().should('include', '/systemAdministrationOverview');
  });

  it('navigates to Education Reports Placements Total Placements', () => {
    cy.get('button:contains("Reports")').eq(1).click();
    cy.get('button').contains(/^ Placements$/).closest('button').click();
     cy.get('button').contains('Total Placements').closest('button').click();
    cy.url().should('include', 'reportOnCampusPlacements/main');
  })

 it('navigates to Education Reports Placements Capacity and Demand', () => {
    cy.get('button:contains("Reports")').eq(1).click();
    cy.get('button').contains(/^ Placements$/).closest('button').click();
     cy.get('button').contains('Capacity and Demand').closest('button').click();
    cy.url().should('include', 'systemAdministrationOverview/'); 
 })

 it('navigates to Education Reports Placements Modules and Demand', () => {
    cy.get('button:contains("Reports")').eq(1).click();
    cy.get('button').contains(/^ Placements$/).closest('button').click();
     cy.get('button').contains('Modules and Demand').closest('button').click();
    cy.url().should('include', 'reportPlacementsModuleDemand/main'); 
 })

it('navigates to Education Reports Placements Campus and Program Version', () => {
    cy.get('button:contains("Reports")').eq(1).click();
    cy.get('button').contains(/^ Placements$/).closest('button').click();
     cy.get('button').contains('Campus And Program Version').closest('button').click();
    cy.url().should('include', 'reportPlacementsCampusQualification/main'); 
 })

 it('navigates to Education Reports Placements Placements at Service Providers', () => {
    cy.get('button:contains("Reports")').eq(1).click();
    cy.get('button').contains(/^ Placements$/).closest('button').click();
     cy.get('button').contains('Placements at Service Providers').closest('button').click();
    cy.url().should('include', 'reportPlacementsAtServiceProviders/main'); 
 })

 it('navigates to Education Reports Placements Discipline Category', () => {
    cy.get('button:contains("Reports")').eq(1).click();
    cy.get('button').contains(/^ Placements$/).closest('button').click();
     cy.get('button').contains('Discipline Category').closest('button').click();
    cy.url().should('include', 'reportDisciplineCategory/main'); 
 })

  it('navigates to Education Reports Placements Placement Approval/Rejection', () => {
    cy.get('button:contains("Reports")').eq(1).click();
    cy.get('button').contains(/^ Placements$/).closest('button').click();
     cy.get('button').contains('Placement Approval/Rejection').closest('button').click();
    cy.url().should('include', 'studentsPlacementsChecksGrid/main'); 
 })

})
