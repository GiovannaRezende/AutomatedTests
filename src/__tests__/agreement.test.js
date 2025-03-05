const { By, until } = require('selenium-webdriver');
const { getDriver, closeDriver } = require('../utils/driver.js');
const { faker } = require('@faker-js/faker');

describe('Cadastrar convênios', () => {

    const agreement = faker.person.fullName();

    let driver;

    beforeAll(async () => {
        driver = await getDriver();
        await driver.get("https://teste.otica.app/cadastros/clienteseparceiros/convenios");
    });

    test('Acessar a tela de vendedores', async () => {
        const currentUrl = await driver.getCurrentUrl();
        expect(currentUrl).toBe('https://teste.otica.app/cadastros/clienteseparceiros/convenios');
    });


    test('Clicar em novo convênio', async () => {
        const registerAgreement = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/div/div[2]/div[4]/div/div/button/div/span")), 2000).click();
        expect(registerAgreement).toBeDefined();
    });

    test('Preencher a razão social do convênio', async () => {
        const descriptionAgreement = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div/div/div/div[2]/div/div/div/div[2]/input")), 2000);
        await descriptionAgreement.sendKeys(agreement);
        const value = await descriptionAgreement.getAttribute('value');
        expect(value).toBe(agreement);
    });

    test('Preencher o nome fantasia do convênio', async () => {
        const fantasyNameAgreement = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div/div/div/div[2]/div/div/div[2]/div[2]/input")), 2000);
        await fantasyNameAgreement.sendKeys(agreement);
        const value = await fantasyNameAgreement.getAttribute('value');
        expect(value).toBe(agreement);
    });

    test('Preencher o CNPJ do convênio', async () => {
        const cnpjAgreement = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div/div/div/div[2]/div/div[2]/div/div[2]/input")), 2000);
        await cnpjAgreement.sendKeys('43.013.876/0001-85');
        const value = await cnpjAgreement.getAttribute('value');
        expect(value).toBe('43.013.876/0001-85');
    });

    test('Preencher o telefone do convênio', async () => {
        const phoneAgreement = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div/div/div/div[2]/div/div[2]/div[2]/div[2]/input")), 2000);
        await phoneAgreement.sendKeys('(11) 9999-9999');
        const value = await phoneAgreement.getAttribute('value');
        expect(value).toBe('(11) 9999-9999');

    });

    test('Preencher CEP do convênio', async () => {
        const cepDoctor = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div/div/div[2]/div[2]/div/div/div/div/div[2]/input")), 2000);
        await cepDoctor.sendKeys("05424-020");                                          
        const value = await cepDoctor.getAttribute('value');
        expect(value).toBe("05424-020");
    });

    test('Buscar o CEP do convênio', async () => {
        const searchCepAgreement = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div/div/button/div/span")), 2000).click();
        expect(searchCepAgreement).toBeDefined();
        await driver.sleep(2000);
    });

    test('Preencher o número do convênio', async () => {
        const numberAgreement = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div/div/div[2]/div[2]/div/div[2]/div[2]/div/div[2]/input")), 2000);
        await numberAgreement.sendKeys('59');
        const value = await numberAgreement.getAttribute('value');
        expect(value).toBe('59');
    });

    test('Salvar convênio', async () => {
        const saveAgreement = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div[2]/div/div/div/button/div/span")), 2000).click();
        expect(saveAgreement).toBeDefined();
    });

});
