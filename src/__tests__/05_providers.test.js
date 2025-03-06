const { By, until } = require('selenium-webdriver');
const { getDriver, closeDriver } = require('../utils/driver.js');
const { faker } = require('@faker-js/faker');

describe('Cadastrar fornecedores', () => {

    const provider = faker.person.fullName();

    let driver;

    beforeAll(async () => {
        driver = await getDriver();
        await driver.get('https://teste.otica.app/cadastros/clienteseparceiros/fornecedores');
    });

    test('Acessar a tela de fornecedores', async () => {
        const currentUrl = await driver.getCurrentUrl();
        expect(currentUrl).toBe('https://teste.otica.app/cadastros/clienteseparceiros/fornecedores');
    });


    test('Clicar em novo fornecedor', async () => {
        const registerProvider = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/div/div[2]/div[5]/div/div/button/div/span")), 2000).click();
        expect(registerProvider).toBeDefined();
    });

    test('Preencher a razão social do fornecedor', async () => {
        const descriptionProvider = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div/div/div[2]/div/div/div/div[2]/input")), 2000);
        await descriptionProvider.sendKeys(provider);
        const value = await descriptionProvider.getAttribute('value');
        expect(value).toBe(provider);
    });

    test('Preencher o nome fantasia do fornecedor', async () => {
        const fantasyNameProvider = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div/div/div[2]/div/div/div[2]/div[2]/input")), 2000);
        await fantasyNameProvider.sendKeys(provider);
        const value = await fantasyNameProvider.getAttribute('value');
        expect(value).toBe(provider);
    });

    test('Selecionar tipo de pessoa do fornecedor', async () => {
        const listTypeProvider = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div/div/div[2]/div/div[2]/div/div/div/div/div")), 2000).click();
        expect(listTypeProvider).toBeDefined();
        
        const selectTypeProvider = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div/div/div[2]/div/div[2]/div/div/div/div[2]/div/div[2]/div/div/div/span")), 2000).click();
        expect(selectTypeProvider).toBeDefined();
    });

    test('Preencher o CNPJ do fornecedor', async () => {
        const cnpjProvider = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div/div/div[2]/div/div[2]/div[2]/div[2]/input")), 2000);
        await cnpjProvider.sendKeys('43.013.876/0001-85');
        const value = await cnpjProvider.getAttribute('value');
        expect(value).toBe('43.013.876/0001-85');
    });

    test('Preencher o telefone do fornecedor', async () => {
        const phoneProvider = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div/div/div[2]/div/div[4]/div/div[2]/input")), 2000);
        await phoneProvider.sendKeys('(11) 9999-9999');
        const value = await phoneProvider.getAttribute('value');
        expect(value).toBe('(11) 9999-9999');
    });

    test('Preencher o e-mail do fornecedor', async () => {
        const emailProvider = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div/div/div[2]/div/div[4]/div[2]/div[2]/input")), 2000);
        await emailProvider.sendKeys('fornecedor@gmail.com');
        const value = await emailProvider.getAttribute('value');
        expect(value).toBe('fornecedor@gmail.com');
    });

    test('Preencher CEP do fornecedor', async () => {
        const cepProvider = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div[2]/div[2]/div/div/div/div/div[2]/input")), 2000);
        await cepProvider.sendKeys("05424-020");                                          
        const value = await cepProvider.getAttribute('value');
        expect(value).toBe("05424-020");
    });

    test('Buscar o CEP do fornecedor', async () => {
        const searchCepProvider = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div[2]/div[2]/div/div/div[2]/div/div/button")), 2000).click();
        expect(searchCepProvider).toBeDefined();
        await driver.sleep(2000);
    });

    test('Preencher o número do fornecedor', async () => {
        const numberProvider = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div[2]/div[2]/div/div[2]/div[2]/div/div[2]/input")), 2000);
        await numberProvider.sendKeys('59');
        const value = await numberProvider.getAttribute('value');
        expect(value).toBe('59');
    });

    test('Preencher o site do fornecedor', async () => {
        const websiteProvider = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div/div[2]/div[2]/div/div/div/div[2]/input")), 2000);
        await websiteProvider.sendKeys("pwi.com.br");                                          
        const value = await websiteProvider.getAttribute('value');
        expect(value).toBe("pwi.com.br");
    });

    test('Preencher o Instagram do fornecedor', async () => {
        const instagramProvider = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[2]/input")), 2000);
        await instagramProvider.sendKeys("pwisistemas");                                          
        const value = await instagramProvider.getAttribute('value');
        expect(value).toBe("pwisistemas");
    });

    test('Preencher o Facebook do fornecedor', async () => {
        const facebookProvider = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div/div[2]/div[2]/div/div[2]/div/div[2]/input")), 2000);
        await facebookProvider.sendKeys("pwisistemas");                                          
        const value = await facebookProvider.getAttribute('value');
        expect(value).toBe("pwisistemas");
    });

    test('Preencher o LinkedIn do fornecedor', async () => {
        const linkedinProvider = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div/div[2]/div[2]/div/div[2]/div[2]/div[2]/input")), 2000);
        await linkedinProvider.sendKeys("company/pwi-sistemas");                                          
        const value = await linkedinProvider.getAttribute('value');
        expect(value).toBe("company/pwi-sistemas");
    });

    test('Salvar fornecedor', async () => {
        const saveProvider = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div[2]/div/div/div/button/div/span")), 2000).click();
        expect(saveProvider).toBeDefined();
    });

});
