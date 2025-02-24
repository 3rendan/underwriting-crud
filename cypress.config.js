const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        // Setting a custom user-agent for Cypress tests
        if (browser.family === 'chromium' && browser.name !== 'electron') {
          launchOptions.args.push('--user-agent=Cypress-276436081');
        } else if (browser.family === 'firefox') {
          launchOptions.args.push('-user-agent=Cypress-276436081');
        } else if (browser.name === 'electron') {
          launchOptions.preferences.userAgent = 'Cypress-276436081';
        }
        return launchOptions;
      });
  },
  baseUrl: "http://localhost:3013"
}
})
