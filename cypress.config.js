const cucumber = require("cypress-cucumber-preprocessor").default;
const { defineConfig } = require("cypress");
module.exports = {
  e2e: {
    baseUrl: "https://reqres.in",
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      reportDir: "cypress/reports",
      charts: true,
      reportPageTitle: "Test Report",
      embeddedScreenshots: true, 
      inlineAssets: true,
      code: true,
    },
    video: false,
    specPattern: ["cypress/e2e/*.feature", "cypress/default/*.cy.js"], 
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },
};
