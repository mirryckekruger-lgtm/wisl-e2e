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

  it('selects the Pharmacy office', () => {
    // Act
    cy.get('input[formcontrolname=office]').click();
    // Dropdown is expanded
    cy.get('mat-option').contains('Pharmacy').click();

    // Assert
    cy.get('input[formcontrolname=wilOffice]').should('have.value', 'Pharmacy');
  });

  it('selects the Biokinetics office', () => {
    cy.get('input[formcontrolname=office]').click();
    cy.get('mat-option').contains('Biokinetics').click();
    cy.get('input[formcontrolname=wilOffice]').should('have.value', 'Biokinetics');
  })

   it('selects the Social Work office', () => {
    cy.get('input[formcontrolname=office]').click();
    cy.get('mat-option').contains('Social Work').click();
    cy.get('input[formcontrolname=wilOffice]').should('have.value', 'Social Work');
  })
  
   it('selects the Dietetics office', () => {
    cy.get('input[formcontrolname=office]').click();
    cy.get('mat-option').contains('Dietetics').click();
    cy.get('input[formcontrolname=wilOffice]').should('have.value', 'Dietetics');
  })

   it('selects the Tourism office', () => {
    cy.get('input[formcontrolname=office]').click();
    cy.get('mat-option').contains('Tourism').click();
    cy.get('input[formcontrolname=wilOffice]').should('have.value', 'Tourism');
  })

   it('selects the Agricultural office', () => {
    cy.get('input[formcontrolname=office]').click();
    cy.get('mat-option').contains('Agricultural').click();
    cy.get('input[formcontrolname=wilOffice]').should('have.value', 'Agricultural');
  })

  it('selects the Engineering office', () => {
    cy.get('input[formcontrolname=office]').click();
    cy.get('mat-option').contains('Engineering').click();
    cy.get('input[formcontrolname=wilOffice]').should('have.value', 'Engineering');
  })

  it('selects the Occypational Hygiene office', () => {
    cy.get('input[formcontrolname=office]').click();
    cy.get('mat-option').contains('Occupational Hygiene').click();
    cy.get('input[formcontrolname=wilOffice]').should('have.value', 'Occupational Hygiene');
  })

  it('selects the Consumer Sciences office', () => {
    cy.get('input[formcontrolname=office]').click();
    cy.get('mat-option').contains('Consumer Sciences').click();
    cy.get('input[formcontrolname=wilOffice]').should('have.value', 'Consumer Sciences');
  })

  it('selects the Theology office', () => {
    cy.get('input[formcontrolname=office]').click();
    cy.get('mat-option').contains('Theology').click();
    cy.get('input[formcontrolname=wilOffice]').should('have.value', 'Theology');
  })

  it('selects the Law office', () => {
    cy.get('input[formcontrolname=office]').click();
    cy.get('mat-option').contains('Law').click();
    cy.get('input[formcontrolname=wilOffice]').should('have.value', 'Law');
  })

  it('selects the Humanities office', () => {
    cy.get('input[formcontrolname=office]').click();
    cy.get('mat-option').contains('Humanities').click();
    cy.get('input[formcontrolname=wilOffice]').should('have.value', 'Humanities');
  })

  it('selects the Economic Management and Sciences office', () => {
    cy.get('input[formcontrolname=office]').click();
    cy.get('mat-option').contains('Economic Management and Sciences').click();
    cy.get('input[formcontrolname=wilOffice]').should('have.value', 'Economic Management and Sciences');
  })
});
