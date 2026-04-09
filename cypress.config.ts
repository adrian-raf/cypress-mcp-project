import { defineConfig } from 'cypress';

const { plugin: cypressGrepPlugin } = require('@cypress/grep/plugin');
const { allureCypress } = require('allure-cypress/reporter');

export default defineConfig({
  env: {
    allure: true,
  },

  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com',
    scrollBehavior: 'center',
    supportFile: 'cypress/support/e2e.ts',
    specPattern: 'cypress/e2e/**/*.cy.ts',
    viewportWidth: 1280,
    viewportHeight: 720,
    setupNodeEvents(on, config) {
      cypressGrepPlugin(config);
      allureCypress(on, config, {
        videoOnFailOnly: true,
      });

      return config;
    },
  },
});
