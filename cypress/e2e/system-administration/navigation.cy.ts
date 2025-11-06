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

  it('navigates to Learning Types', () => {
    cy.get('button').contains('Learning Types').closest('button').click();
    cy.url().should('include', 'ypesGrid/main');
  })

  it('navigates to Public Holidays', () => {
    cy.get('button').contains('Public Holidays').closest('button').click();
    cy.url().should('include', 'publicHolidaysGrid/main');
  })

   it('navigates to Years', () => {
    cy.get('button').contains('Years').closest('button').click();
    cy.url().should('include', 'yearsGrid/main');
  })

  it('navigates to Towns', () => {
    cy.get('button').contains('Towns').closest('button').click();
    cy.url().should('include', 'townsConfigs/towns');
  })

  it('navigates to Master Data List', () => {
    cy.get('button').contains('Master Data List').closest('button').click();
    cy.url().should('include', 'masterDataListGrid/main');
  })
  
   it('navigates to Service Providers Approve List', () => {
    cy.get('button').contains('Service Providers').closest('button').click();
    cy.get('button').contains('Approve').closest('button').click();
    cy.url().should('include', 'serviceProvidersApprove/systemAdmin');
  })

   it('navigates to Service Providers Unassign List', () => {
    cy.get('button').contains('Service Providers').closest('button').click();
    cy.get('button').contains('Unassign').closest('button').click();
    cy.url().should('include', 'serviceProvidersUnassign/systemAdmin');
  })

  it('navigates to Service Providers All Service Providers List', () => {
    cy.get('button').contains('Service Providers').closest('button').click();
    cy.get('button').contains('All Service Providers').closest('button').click();
    cy.url().should('include', 'allServiceProviders/main');
  })

it('navigates to Reports Placements Overview List', () => {
    cy.get('button').contains('Reports').closest('button').click();
    cy.get('button').contains('Placements Overview').closest('button').click();
    cy.url().should('include', 'placementsOverviewReport/main');
  })

  it('navigates to Service Providers All Service Providers List', () => {
    cy.get('button').contains('Reports').closest('button').click();
    cy.get('button').contains('Users Year on Year').closest('button').click();
    cy.url().should('include', 'usersReport/main');
  })
  
   it('navigates to Service Providers All Service Providers List', () => {
    cy.get('button').contains('Reports').closest('button').click();
    cy.get('button').contains('New Users Year on Year').closest('button').click();
    cy.url().should('include', 'newUsersReport/main');
  })

  it('navigates to Service Providers All Service Providers List', () => {
    cy.get('button').contains('Reports').closest('button').click();
    cy.get('button').contains('New Vs Returning Users').closest('button').click();
    cy.url().should('include', 'newVsReturningUsersReport/main');
  })

  it('navigates to Service Providers All Service Providers List', () => {
    cy.get('button').contains('Reports').closest('button').click();
    cy.get('button').contains('Site Overview').closest('button').click();
    cy.url().should('include', 'pageViewsReport/main');
  })
  
it('navigates to Service Providers All Service Providers List', () => {
    cy.get('button').contains('Reports').closest('button').click();
    cy.get('button').contains('Site Overview Graphs').closest('button').click();
    cy.url().should('include', 'mainGraphsReport/main');
  }) 

  })

