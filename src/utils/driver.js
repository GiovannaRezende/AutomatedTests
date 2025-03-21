const { Builder } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

let driver;

async function getDriver() {
    if (!driver) {
        const chromeOptions = new chrome.Options();
        //chromeOptions.addArguments("--headless");
        chromeOptions.addArguments("--disable-gpu");
        chromeOptions.addArguments("--window-size=1280,768");

        driver = await new Builder()
            .forBrowser("chrome")
            .setChromeOptions(chromeOptions)
            .build();

        await driver.manage().setTimeouts({ implicit: 10000 });
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
