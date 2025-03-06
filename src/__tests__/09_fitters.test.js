const { By, until } = require('selenium-webdriver');
const { getDriver } = require("../utils/driver.js");
const { faker } = require('@faker-js/faker');

describe('Cadastrar montadores', () => {
    const fitter = faker.company.name();
    let driver;

    beforeAll(async () => {
        driver = await getDriver();
        await driver.get("https://teste.otica.app/cadastros/clienteseparceiros/montadores");
    });

    test('Acessar a tela de montadores', async () => {
        const currentUrl = await driver.getCurrentUrl();
        expect(currentUrl).toBe('https://teste.otica.app/cadastros/clienteseparceiros/montadores');
    });

    test('Clicar em novo montador', async () => {
        const registerFitter = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/div/div[2]/div[4]/div/div/button/div/span")), 2000);
        await registerFitter.click();
        expect(registerFitter).toBeDefined();
    });

    test('Preencher a descrição do montador', async () => {
        const descriptionFitter = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div[2]/div/div/div/div[2]/input")), 2000);
        await descriptionFitter.sendKeys(fitter);
        const value = await descriptionFitter.getAttribute('value');
        expect(value).toBe(fitter);
    });

    test('Salvar montador', async () => {
        const saveFitter = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div[2]/div/div/div/button/div/span")), 2000);
        await saveFitter.click();
        expect(saveFitter).toBeDefined();
    });
});