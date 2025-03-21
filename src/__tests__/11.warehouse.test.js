const { By, until } = require('selenium-webdriver');
const { getDriver } = require("../utils/driver.js");
const { faker } = require('@faker-js/faker');

describe('Cadastrar estoques', () => {
    const warehouse = faker.company.name();
    let driver;

    beforeAll(async () => {
        driver = await getDriver();
        await driver.get('https://teste.otica.app/cadastros/administracao/estoques');
    });

    test('Acessar a tela de estoques', async () => {
        const currentUrl = await driver.getCurrentUrl();
        expect(currentUrl).toBe('https://teste.otica.app/cadastros/administracao/estoques');
    });

    test('Clicar em novo estoque', async () => {
        const registerWarehouse = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/div/div[2]/div[4]/div/div/button/div/span")), 2000);
        await registerWarehouse.click();
        expect(registerWarehouse).toBeDefined();
    });

    test('Preencher a descrição do estoque', async () => {
        const descriptionWarehouse = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div[2]/div/div/div[2]/input")), 2000);
        await descriptionWarehouse.sendKeys(warehouse);
        const value = await descriptionWarehouse.getAttribute('value');
        expect(value).toBe(warehouse);
    });

    test('Selecionar empresa do estoque', async () => {
        const listCompaniesWarehouse = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div[2]/div/div[2]/div/div/div/div/div")), 2000).click();
        expect(listCompaniesWarehouse).toBeDefined();
        
        const selectCompanyWarehouse = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div[2]/div/div[2]/div/div/div/div[2]/div/div[6]/div/div/div/span")), 2000).click();
        expect(selectCompanyWarehouse).toBeDefined();
    });

    test('Salvar estoque', async () => {
        const saveWarehouse = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div[2]/div/div/div/button/div/span")), 2000);
        await saveWarehouse.click();
        expect(saveWarehouse).toBeDefined();
    });
});