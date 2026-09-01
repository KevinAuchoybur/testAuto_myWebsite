const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: "https://kevinauchoybur.me",
    setupNodeEvents(on, config) {
       require("cypress-mochawesome-reporter/plugin")(on);
    },
  },

  reporter: "cypress-mochawesome-reporter",

  reporterOptions: {
    reportPageTitle: "Rapport de tests E2E – kevinauchoybur.me",
    reportTitle: "Tests E2E – kevinauchoybur.me",
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    saveJson: true,
  },

});
