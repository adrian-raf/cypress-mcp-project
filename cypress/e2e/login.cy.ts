import LoginPage from '../pages/LoginPage';

Cypress.on('uncaught:exception', (error) => {
  if (error.message.includes("Cannot read properties of undefined (reading 'response')")) {
    return false;
  }

  return true;
});

describe('Login Feature Test Scenarios', () => {
  // Best practice: Gunakan beforeEach untuk kondisi awal yang berulang
  beforeEach(() => {
    LoginPage.visit();
  });

  it('@positive Should log in successfully with valid credentials', () => {
    // Action
    LoginPage.login('Admin', 'admin123');

    // Assertion
    cy.url().should('include', '/dashboard/index');
  });

  it('@negative Should show an error message with invalid credentials', () => {
    // Action
    LoginPage.login('UserSalah', 'PasswordSalah');

    // Assertion
    LoginPage.getErrorMessage().should('contain', 'Invalid credentials');
  });

  it('@positive Should log out successfully after login', () => {
    LoginPage.login('Admin', 'admin123');
    cy.url().should('include', '/dashboard/index');

    LoginPage.logout();

    cy.url().should('include', '/auth/login');
    LoginPage.getUsernameInput().should('be.visible');
    LoginPage.getPasswordInput().should('be.visible');
  });
});
