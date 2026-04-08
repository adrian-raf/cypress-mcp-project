import LoginPage from '../pages/LoginPage';
import PimPage from '../pages/PimPage';

describe('PIM Menu Test Scenarios', () => {
  beforeEach(() => {
    LoginPage.visit();
    LoginPage.login('Admin', 'admin123');
  });

  it('Should open PIM menu and show employee information page', () => {
    PimPage.openPimMenu();

    cy.url().should('include', '/pim/viewEmployeeList');
    PimPage.getPimHeader().should('be.visible');
    PimPage.getEmployeeInformationTitle().should('be.visible');
    PimPage.getAddButton().should('be.visible');
  });

  it('Should perform employee search from PIM page', () => {
    PimPage.openPimMenu();
    PimPage.searchEmployees();

    cy.url().should('include', '/pim/viewEmployeeList');
    PimPage.getEmployeeInformationTitle().should('be.visible');
  });
});
