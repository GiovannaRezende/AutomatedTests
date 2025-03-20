const { By, until } = require('selenium-webdriver');
const { getDriver, closeDriver } = require('../utils/driver.js');
const { faker } = require('@faker-js/faker');


describe('Cadastrar médicos', () => {

    //Verificar se aqui é o melhor lugar para ficar
    const doctor = faker.person.fullName();
    const crm = faker.number.int();
    const email = faker.internet.email();

    let driver;

    beforeAll(async () => {
        driver = await getDriver();
    });

    test('Acessar a tela de médicos', async () => {
        await driver.get('https://teste.otica.app/cadastros/clienteseparceiros/medicos');
        await driver.wait(until.urlContains('cadastros/clienteseparceiros/medicos'), 10000);
        const currentUrl = await driver.getCurrentUrl();
        expect(currentUrl).toBe('https://teste.otica.app/cadastros/clienteseparceiros/medicos');
    });


    test('Clicar em novo médico', async () => {
        const registerDoctor = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/div/div[2]/div[5]/div/div/button/div/span")), 2000).click();
        expect(registerDoctor).toBeDefined();
    });

    test('Preencher a descrição do médico', async () => {
        const nameDoctor = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div/div[2]/div/div/div/div[2]/input")), 2000);
        await nameDoctor.sendKeys(doctor);
        const value = await nameDoctor.getAttribute("value");
        expect(value).toBe(doctor);
    });

    test('Preencher o CRM do médico', async () => {
        const crmDoctor = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div/div[2]/div/div/div[3]/div[2]/input")), 2000);
        await crmDoctor.sendKeys(crm);
        const value = await crmDoctor.getAttribute("value");
        expect(Number(value)).toBe(crm);
    });

    test('Selecionar a UF do CRM do médico', async () => {
        const ufCrmDoctor = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div/div[2]/div/div/div[4]/div/div/div/div")), 2000).click();
        expect(ufCrmDoctor).toBeDefined();

        optionUfCrm = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div/div[2]/div/div/div[4]/div/div/div[2]/div/div/div/div/div/span")), 2000).click();
        expect(ufCrmDoctor).toBeDefined();
    });

    test('Preencher o e-mail do médico', async () => {
        const emailDoctor = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div/div[2]/div/div[2]/div/div[2]/input")), 2000);
        await emailDoctor.sendKeys(email);
        const value = await emailDoctor.getAttribute("value");
        expect(value).toBe(email);
    });

    test('Preencher o telefone do médico', async () => {
        const phoneDoctor = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div/div[2]/div/div[2]/div[2]/div[2]/input")), 2000);
        await phoneDoctor.sendKeys("(11) 99999-9999");
        const value = await phoneDoctor.getAttribute("value");
        expect(value).toBe("(11) 99999-9999");

    });

    test('Preencher CEP do médico', async () => {
        const cepDoctor = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div[2]/div[2]/div/div/div/div/div[2]/input")), 2000);
        await cepDoctor.sendKeys("05424-020");
        const value = await cepDoctor.getAttribute("value");
        expect(value).toBe("05424-020");

    });

    test('Buscar o CEP do médico', async () => {
        const searchCepDoctor = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div[2]/div[2]/div/div/div[2]/div/div/button/div/span")), 2000).click();
        expect(searchCepDoctor).toBeDefined();
    });

    test('Preencher o número do médico', async () => {
        await driver.sleep(2000);
        const numberDoctor = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div[2]/div[2]/div/div[2]/div[2]/div/div[2]/input")), 2000);
        await numberDoctor.sendKeys("59");
        const value = await numberDoctor.getAttribute("value");
        expect(value).toBe("59");
    });

    test('Salvar médico', async () => {
        saveDoctor = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div[2]/div/div/div/button")), 2000).click();
        expect(saveDoctor).toBeDefined();
    });

});
