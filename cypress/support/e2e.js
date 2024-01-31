// Import comma.js using ES2015 syntax:
import './commands'
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

const origLog1 = Cypress.log
Cypress.log = function (opts, ...other) {
    if (
        opts.displayName === 'fetch' &&
        opts.url.startsWith("https://www.google.com/")
    ) {
        return
    }
    return origLog1(opts, ...other)
}

const origLog2 = Cypress.log
Cypress.log = function (opts, ...other) {
    if (
        opts.displayName === 'fetch' &&
        opts.url.startsWith("https://salesiq.zohopublic.com/visitor/v2/channels/website?widgetcode=siqfc0d7c47e5a9c66e96a5c2c4042f3553d027cc766bd16fa34fd9478b1acafbde&internal_channel_req=true&language_api=true&browser_language=en&current_domain=https%3A%2F%2Fapp.dev.shadowchef.co&pagetitle=Login%20to%20klikit%20cloud&include_fields=avuid")
    ) {
        return
    }
    return origLog2(opts, ...other)
}

const origLog3 = Cypress.log
Cypress.log = function (opts, ...other) {
    if (
        opts.displayName === 'fetch' &&
        opts.url.startsWith("https://sentry.klikit.io/api/2/envelope/?sentry_key=6774b9b9502e4d648e4489e316b8fea0&sentry_version=7&sentry_client=sentry.javascript.react%2F7.56.0")
    ) {
        return
    }
    return origLog3(opts, ...other)
}