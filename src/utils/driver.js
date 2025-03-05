const { Builder } = require("selenium-webdriver");

let driver;

async function getDriver() {
    if (!driver) {
        driver = await new Builder().forBrowser("chrome").build();
        await driver.manage().setTimeouts({ implicit: 10000 });
        await driver.manage().window().setRect({ width: 1280, height: 768 });
    }
    return driver;
}

async function closeDriver() {
    if (driver) {
        await driver.quit();
        driver = null;
    }
}

module.exports = { getDriver, closeDriver };

