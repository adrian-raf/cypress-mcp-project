class MyInfoPage {
  getMyInfoMenu() {
    return cy.contains('.oxd-main-menu-item', 'My Info');
  }

  getPersonalDetailsHeader() {
    return cy.contains('h6', 'Personal Details');
  }

  getFirstNameInput() {
    return cy.get('[name="firstName"]');
  }

  getMiddleNameInput() {
    return cy.get('[name="middleName"]');
  }

  getLastNameInput() {
    return cy.get('[name="lastName"]');
  }

  getPersonalDetailsSaveButton() {
    return cy.get('form').first().contains('button', 'Save');
  }

  getSuccessToast() {
    return cy.get('.oxd-toast-content--success');
  }

  getUserDropdown() {
    return cy.get('.oxd-userdropdown-tab');
  }

  getLogoutMenuItem() {
    return cy.contains('.oxd-userdropdown-link', 'Logout');
  }

  openMyInfo() {
    this.getMyInfoMenu().click();
  }

  openUserDropdown() {
    this.getUserDropdown().click();
  }

  logout() {
    this.openUserDropdown();
    this.getLogoutMenuItem().click();
  }

  updatePersonalDetails(firstName: string, middleName: string, lastName: string) {
    this.getFirstNameInput().clear().type(firstName);
    this.getMiddleNameInput().clear().type(middleName);
    this.getLastNameInput().clear().type(lastName);
    this.getPersonalDetailsSaveButton().click();
  }
}

export default new MyInfoPage();
