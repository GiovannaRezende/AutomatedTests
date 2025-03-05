const { By, until, Key } = require('selenium-webdriver');
const { getDriver, closeDriver } = require('../utils/driver.js');
const { faker } = require('@faker-js/faker');

describe('Cadastrar clientes', () => {

    const customer = faker.person.fullName();

    let driver;

    beforeAll(async () => {
        driver = await getDriver();
        await driver.get("https://teste.otica.app/cadastros/clienteseparceiros/clientes");
    });

    afterAll(async () => {
        driver = await closeDriver();
    });

    test('Acessar a tela de clientes', async () => {
        const currentUrl = await driver.getCurrentUrl();
        expect(currentUrl).toBe("https://teste.otica.app/cadastros/clienteseparceiros/clientes");
    });


    test('Clicar em novo cliente', async () => {
        const registerCustomer = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/div/div[2]/div[6]/div/div/button/div/span")), 2000).click();
        expect(registerCustomer).toBeDefined();
    });

    test('Listar tipos de pessoas do cliente', async () => {
        const listTypeCustomer = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div/div[2]/div/div/div/div/div/div/div")), 2000).click();
        expect(listTypeCustomer).toBeDefined();
    });

    test('Selecionar tipo de pessoa do cliente', async () => {
        const selectTypeCustomer = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div/div[2]/div/div/div/div/div/div[2]/div/div/div/div/div")), 2000).click();
        expect(selectTypeCustomer).toBeDefined();
    });

    test('Preencher o CPF do cliente', async () => {
        const cpfCustomer = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div/div[2]/div/div/div[2]/div[2]/input")), 2000);
        await cpfCustomer.sendKeys("484.257.088-18");
        const value = await cpfCustomer.getAttribute('value');
        expect(value).toBe("484.257.088-18");
    });

    test('Preencher o RG do cliente', async () => {
        const rgCustomer = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div/div[2]/div/div/div[3]/div[2]/input")), 2000);
        await rgCustomer.sendKeys('58.649.915-5');
        const value = await rgCustomer.getAttribute('value');
        expect(value).toBe('58.649.915-5');
    });

    test('Preencher o nome do cliente', async () => {
        const nameCustomer = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div/div[2]/div/div[3]/div/div[2]/input")), 2000);
        await nameCustomer.sendKeys(customer);
        const value = await nameCustomer.getAttribute('value');
        expect(value).toBe(customer);
    });

    test('Preencher a data de nascimendo do cliente', async () => {
        const dateOfBirthCustomer = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div/div[2]/div/div[4]/div/div[2]/input")), 2000);
        await dateOfBirthCustomer.sendKeys(Key.BACK_SPACE.repeat(10));
        await dateOfBirthCustomer.sendKeys("28/07/2004");
        const value = await dateOfBirthCustomer.getAttribute('value');
        expect(value).toBe("28/07/2004");
    });

    test('Listar sexos dos clientes', async () => {
        const listGenderCustomer = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div/div[2]/div/div[4]/div[2]/div/div/div/div")), 2000).click();
        expect(listGenderCustomer).toBeDefined();
    });

    test('Selecionar sexo do cliente', async () => {
        const selectGenderCustomer = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div/div[2]/div/div[4]/div[2]/div/div/div[2]/div/div[2]/div/div/div/span")), 2000).click();
        expect(selectGenderCustomer).toBeDefined();
    });

    test('Preencher o e-mail do cliente', async () => {
        const emailcustomer = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div/div[2]/div/div[5]/div[2]/input")), 2000);
        await emailcustomer.sendKeys('cliente@gmail.com');
        const value = await emailcustomer.getAttribute('value');
        expect(value).toBe('cliente@gmail.com');
    });

    test('Preencher o telefone do cliente', async () => {
        const phoneCustomer = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div/div[2]/div/div[6]/div/div[2]/input")), 2000);
        await phoneCustomer.sendKeys('(11) 9999-9999');
        const value = await phoneCustomer.getAttribute('value');
        expect(value).toBe('(11) 9999-9999');
    });

    test('Listar estados civis dos clientes', async () => {
        const listCivilStatusCustomer = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div/div[2]/div/div[6]/div[3]/div/div/div/div")), 2000).click();
        expect(listCivilStatusCustomer).toBeDefined();
    });

    test('Selecionar estado civil do cliente', async () => {
        const selectCivilStatusCustomer = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div/div[2]/div/div[6]/div[3]/div/div/div[2]/div/div[2]/div/div/div/span")), 2000).click();
        expect(selectCivilStatusCustomer).toBeDefined();
    });

    test('Preencher profissão do cliente', async () => {
        const occupationCustomer = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div/div[2]/div/div[7]/div/div[2]/input")), 2000);
        await occupationCustomer.sendKeys("Analista de dados");
        const value = await occupationCustomer.getAttribute('value');
        expect(value).toBe("Analista de dados");
    });

    test('Listar como nos conheceu dos clientes', async () => {
        const listHowFindUsCustomer = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div/div[2]/div/div[7]/div[2]/div/div/div/div")), 2000).click();
        expect(listHowFindUsCustomer).toBeDefined();
    });

    test('Selecionar como nos conheceu do cliente', async () => {
        const selectHowFindUsCustomer = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div/div[2]/div/div[7]/div[2]/div/div/div[2]/div/div/div/div/div/span")), 2000).click();
        expect(selectHowFindUsCustomer).toBeDefined();
    });

    test('Preencher CEP do cliente', async () => {
        const cepCustomer = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div[2]/div[2]/div/div/div/div/div[2]/input")), 2000);
        await cepCustomer.sendKeys("05424-020");                                          
        const value = await cepCustomer.getAttribute('value');
        expect(value).toBe("05424-020");
    });

    test('Buscar o CEP do cliente', async () => {
        const searchCepCustomer = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div[2]/div[2]/div/div/div[2]/div/div/button")), 2000).click();
        expect(searchCepCustomer).toBeDefined();
        await driver.sleep(2000);
    });

    test('Preencher o número do cliente', async () => {
        const numberCustomer = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div[2]/div[2]/div/div[2]/div[2]/div/div[2]/input")), 2000);
        await numberCustomer.sendKeys('59');
        const value = await numberCustomer.getAttribute('value');
        expect(value).toBe('59');
    });

    test('Salvar cliente', async () => {
        const saveCustomer = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div[2]/div/div/div/button/div/span")), 2000).click();
        expect(saveCustomer).toBeDefined();
    });

});
