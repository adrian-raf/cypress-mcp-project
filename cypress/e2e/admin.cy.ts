import LoginPage from '../pages/LoginPage';
import AdminPage from '../pages/AdminPage';

describe('Admin Menu Test Scenarios', () => {
  beforeEach(() => {
    LoginPage.visit();
    LoginPage.login('Admin', 'admin123');
  });

  it('@positive Should open Admin menu and show core page elements', () => {
    AdminPage.openFromDashboard();

    cy.url().should('include', '/admin/viewSystemUsers');
    AdminPage.getAdminHeader().should('be.visible');
    AdminPage.getAddButton().should('be.visible');
    AdminPage.getSearchButton().should('be.visible');
    AdminPage.getResetButton().should('be.visible');
  });

  it('@positive Should search for a user on the Admin page', () => {
    AdminPage.openFromDashboard();
    AdminPage.searchByUsername('Admin');

    cy.url().should('include', '/admin/viewSystemUsers');
    AdminPage.getAdminHeader().should('be.visible');
  });
});
