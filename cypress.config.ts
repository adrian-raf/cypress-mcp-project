import { defineConfig } from 'cypress';

export default defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com',
    supportFile: 'cypress/support/e2e.ts',
    specPattern: 'cypress/e2e/**/*.cy.ts',
    viewportWidth: 1280,
    viewportHeight: 720,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
