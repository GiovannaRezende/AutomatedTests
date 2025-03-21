const { By, until } = require('selenium-webdriver');
const { getDriver, closeDriver } = require('../utils/driver.js');
const { faker } = require('@faker-js/faker');

describe('Cadastrar usuários', () => {

    const user = faker.person.fullName();

    let driver;

    beforeAll(async () => {
        driver = await getDriver();
        await driver.get("https://teste.otica.app/cadastros/administracao/usuarios");
    });

    test('Acessar a tela de usuários', async () => {
        const currentUrl = await driver.getCurrentUrl();
        expect(currentUrl).toBe("https://teste.otica.app/cadastros/administracao/usuarios");
    });

    test('Clicar em novo usuário', async () => {
        const registerUser = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/div/div[2]/div[4]/div/div/button/div/span")), 2000).click();
        expect(registerUser).toBeDefined();
    });

    test('Preencher login do usuário', async () => {
        const loginUser = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div/div[2]/div/div/div/div[2]/input")), 2000);
        await loginUser.sendKeys(user);
        const value = await loginUser.getAttribute('value');
        expect(value).toBe(user);
    });

    test('Preencher o nome completo do usuário', async () => {
        const fullNameUser = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div/div[2]/div/div/div[2]/div[2]/input")), 2000);
        await fullNameUser.sendKeys(user);
        const value = await fullNameUser.getAttribute('value');
        expect(value).toBe(user);
    });

    test('Permitir acesso a todas as empresas', async () => {
        const allowCompanies = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div/div[2]/div/div[2]/div/div/div")), 2000).click();
        expect(allowCompanies).toBeDefined();
    });

    test('Selecionar empresa padrão', async () => {
        const listStandardCompany = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div/div[2]/div/div[2]/div[3]/div/div/div/div")), 2000).click();
        expect(listStandardCompany).toBeDefined();

        const selectStandardCompany = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div/div[2]/div/div[2]/div[3]/div/div/div[2]/div/div[6]/div/div/div/span")), 2000).click();
        expect(selectStandardCompany).toBeDefined();
    });

    test('Selecionar vendedor do usuário', async () => {
        const listSellers = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div/div[2]/div/div[2]/div[4]/div/div/div/div")), 2000).click();
        expect(listSellers).toBeDefined();

        const selectSeller = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div/div[2]/div/div[2]/div[4]/div/div/div[2]/div/div[3]/div/div/div/span")), 2000).click();
        expect(selectSeller).toBeDefined();
    });

    //Não está reconhecendo o campo
    test('Selecionar grupo do usuário', async () => {
        const listUserGroup = await driver.wait(until.elementLocated(By.xpath("")), 2000).click();
        expect(listUserGroup).toBeDefined();

        const selectUserGroup = await driver.wait(until.elementLocated(By.xpath("")), 2000).click();
        expect(selectUserGroup).toBeDefined();
    });

    test('Preencher e-mail do usuário', async () => {
        const emailUser = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div/div[2]/div/div[3]/div/div[2]/input")), 2000);
        await emailUser.sendKeys("user@gmail.com");
        const value = await emailUser.getAttribute('value');
        expect(value).toBe("user@gmail.com");
    });

    test('Preencher senha do usuário', async () => {
        const passwordUser = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div/div[2]/div/div[3]/div[2]/div/div[2]/input")), 2000);
        await passwordUser.sendKeys("p0w2i8!");
        const value = await passwordUser.getAttribute('value');
        expect(value).toBe("p0w2i8!");
    });

    test('Confirmar senha do usuário', async () => {
        const confirmPasswordUser = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div/div[2]/div/div[3]/div[2]/div[2]/div[2]/input")), 2000);
        await confirmPasswordUser.sendKeys("p0w2i8!");
        const value = await confirmPasswordUser.getAttribute('value');
        expect(value).toBe("p0w2i8!");
    });

    test('Salvar usuário', async () => {
        const saveUser = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div[2]/div/div/div/button/div/span")), 2000).click();
        expect(saveUser).toBeDefined();
    });

});
