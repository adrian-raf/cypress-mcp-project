class PimPage {
  getPimMenu() {
    return cy.contains('.oxd-main-menu-item', 'PIM');
  }

  getPimHeader() {
    return cy.contains('h6', 'PIM');
  }

  getEmployeeInformationTitle() {
    return cy.contains('h5', 'Employee Information');
  }

  getSearchButton() {
    return cy.contains('button', 'Search');
  }

  getAddButton() {
    return cy.contains('button', 'Add');
  }

  openPimMenu() {
    this.getPimMenu().click();
  }

  searchEmployees() {
    this.getSearchButton().click();
  }
}

export default new PimPage();
