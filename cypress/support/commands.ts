/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

Cypress.Commands.add(
  'assertSuccessToast',
  (acceptedMessages = ['successfully updated', 'successfully saved', 'success']) => {
    cy.get('.oxd-toast-content--success')
      .should('be.visible')
      .invoke('text')
      .then((text) => {
        const normalizedText = text.replace(/\s+/g, ' ').trim().toLowerCase();
        const hasAcceptedMessage = acceptedMessages.some((message) =>
          normalizedText.includes(message.toLowerCase()),
        );

        expect(hasAcceptedMessage, `Unexpected success toast message: ${normalizedText}`).to.eq(
          true,
        );
      });
  },
);

declare global {
  namespace Cypress {
    interface Chainable {
      assertSuccessToast(acceptedMessages?: string[]): Chainable<void>;
    }
  }
}

export {};
