const { By, until } = require('selenium-webdriver');
const { getDriver } = require("../utils/driver.js");
const { faker } = require('@faker-js/faker');

describe('Cadastrar vendedores', () => {
    const seller = faker.person.firstName();
    let driver;

    beforeAll(async () => {
        driver = await getDriver();
        await driver.get("https://teste.otica.app/cadastros/administracao/vendedores");
    });

    test('Acessar a tela de vendedores', async () => {
        const currentUrl = await driver.getCurrentUrl();
        expect(currentUrl).toBe('https://teste.otica.app/cadastros/administracao/vendedores');
    });

    test('Clicar em novo vendedor', async () => {
        const registerSeller = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/div/div[2]/div[4]/div/div/button/div/span")), 2000);
        await registerSeller.click();
        expect(registerSeller).toBeDefined();
    });

    test('Preencher a descrição do vendedor', async () => {
        const descriptionSeller = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div/div[2]/div/div/div/div[2]/input")), 2000);
        await descriptionSeller.sendKeys(seller);
        const value = await descriptionSeller.getAttribute('value');
        expect(value).toBe(seller);
    });

    test('Selecionar empresa do vendedor', async () => {
        const listCompaniesSeller = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div/div[2]/div/div/div[2]/div/div/div/div")), 2000).click();
        expect(listCompaniesSeller).toBeDefined();
        
        const selectCompanySeller = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div/div[2]/div/div/div[2]/div/div/div[2]/div/div[6]/div/div/div/span")), 2000).click();
        expect(selectCompanySeller).toBeDefined();
    });

    test('Preencher percentual de comissão do vendedor', async () => {
        const comissionSeller = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div/div[2]/div/div[2]/div/div/div[2]/input")), 2000);
        await comissionSeller.sendKeys('3,50');
        const value = await comissionSeller.getAttribute('value');
        expect(value).toBe('3,50');
    });

    test('Salvar vendedor', async () => {
        const saveSeller = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div[2]/div/div/div/button/div/span")), 2000).click();
        expect(saveSeller).toBeDefined();
    });
});