import LoginPage from '../pages/LoginPage';
import MyInfoPage from '../pages/MyInfoPage';

describe('My Info Menu Test Scenarios', () => {
  beforeEach(() => {
    LoginPage.visit();
    LoginPage.login('Admin', 'admin123');
  });

  it('Should open My Info and display personal details', () => {
    MyInfoPage.openMyInfo();

    cy.url().should('include', '/pim/viewPersonalDetails');
    MyInfoPage.getPersonalDetailsHeader().should('be.visible');
    MyInfoPage.getFirstNameInput().should('be.visible');
  });

  it('Should edit personal details successfully', () => {
    const timestamp = Date.now();
    const firstName = `Admin${timestamp}`;
    const middleName = 'QA';
    const lastName = 'Automation';

    MyInfoPage.openMyInfo();
    MyInfoPage.updatePersonalDetails(firstName, middleName, lastName);
    cy.assertSuccessToast();

    MyInfoPage.getFirstNameInput().should('have.value', firstName);
    MyInfoPage.getMiddleNameInput().should('have.value', middleName);
    MyInfoPage.getLastNameInput().should('have.value', lastName);
  });
});
