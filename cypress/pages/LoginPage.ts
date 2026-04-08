class LoginPage {
  // --- Selectors ---
  // Best practice: Bungkus selector dalam method agar mudah diperbarui jika UI berubah
  getUsernameInput() {
    return cy.get('[name="username"]');
  }
  getPasswordInput() {
    return cy.get('[name="password"]');
  }
  getLoginButton() {
    return cy.get('[type="submit"]');
  }
  getErrorMessage() {
    return cy.get('.oxd-alert-content-text');
  }
  getUserDropdown() {
    return cy.get('.oxd-userdropdown-tab');
  }
  getLogoutMenuItem() {
    return cy.contains('.oxd-userdropdown-link', 'Logout');
  }

  // --- Actions ---
  visit() {
    cy.visit('/web/index.php/auth/login');
  }

  login(username: string, password: string) {
    this.getUsernameInput().type(username);
    this.getPasswordInput().type(password);
    this.getLoginButton().click();
  }

  logout() {
    this.getUserDropdown().click();
    this.getLogoutMenuItem().click();
  }
}

// Export instance agar bisa langsung dipakai
export default new LoginPage();
