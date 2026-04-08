class AdminPage {
  getAdminMenu() {
    return cy.contains('.oxd-main-menu-item', 'Admin');
  }

  getAdminHeader() {
    return cy.contains('h6', 'Admin');
  }

  getAddButton() {
    return cy.contains('button', 'Add');
  }

  getSearchButton() {
    return cy.contains('button', 'Search');
  }

  getResetButton() {
    return cy.contains('button', 'Reset');
  }

  getUsernameInput() {
    return cy.get('.oxd-form .oxd-input').first();
  }

  visitDashboard() {
    cy.visit('/web/index.php/dashboard/index');
  }

  openFromDashboard() {
    this.visitDashboard();
    this.getAdminMenu().click();
  }

  searchByUsername(username: string) {
    this.getUsernameInput().clear().type(username);
    this.getSearchButton().click();
  }
}

export default new AdminPage();
