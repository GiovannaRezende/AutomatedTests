const { By, until } = require('selenium-webdriver');
const { getDriver, closeDriver } = require('../utils/driver.js');
const { faker } = require('@faker-js/faker');

describe('Cadastrar laboratórios', () => {

    const laboratory = faker.company.name();

    let driver;

    beforeAll(async () => {
        driver = await getDriver();
    });

    afterAll(async () => {
        await closeDriver();
    });

    test('Acessar a tela de laboratórios', async () => {

    });

    test('Clicar em novo laboratório', async () => {
        const registerLaboratory = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/div/div[2]/div[4]/div/div/button/div/span")), 2000).click();
        expect(registerLaboratory).toBeDefined();
    });

    test('Prencher a descrição do laboratório', async () => {
        const descriptionFitter = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div[2]/div/div/div/div[2]/input")), 2000).sendKeys(laboratory);
        const value = await descriptionFitter.getAttribute('value');
        expect(value).toBe(laboratory);
    });

    test('Selecionar integração de laboratório', async () => {
        const listIntegrationLaboratory = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div[2]/div/div/div[2]/div/div/div/div")), 2000).click();
        expect(listIntegrationLaboratory).toBeDefined();

        const selectIntegrationLaboratory = await driver.wait(until.elementLocated(By.xpath("//span[contains(.,'SAO WEB')]")), 2000).click();
        expect(selectIntegrationLaboratory).toBeDefined();
    });

    test('Salvar montador', async () => {
        const saveCategory = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div[2]/div/div/button")), 2000).click();
        expect(saveCategory).toBeDefined();
    });

});
