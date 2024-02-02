const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "",
  chromeWebSecurity: false,
  watchForFileChanges: true,
  experimentalWebKitSupport: false,
  video: true,
  screenshotOnRunFailure: true,
  trashAssetsBeforeRuns: true,
  reporter: 'cypress-mochawesome-reporter',
  //experimentalStudio:true,
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    overwrite: false,
  },
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 50000,
  viewportWidth:1920,
  viewportHeight: 1080,
  retries: {
    runMode: 1,
    openMode: 0,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
