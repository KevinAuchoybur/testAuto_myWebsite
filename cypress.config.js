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

});
