const { By, until } = require('selenium-webdriver');
const { getDriver, closeDriver } = require('../utils/driver.js');
const { faker } = require('@faker-js/faker');

describe('Cadastrar categorias', () => {

    const category = faker.word.words();

    let driver;

    beforeAll(async () => {
        driver = await getDriver();
    });

    afterAll(async () => {
        await closeDriver();
    });

    test('Acessar a tela de categorias', async () => {

    });

    test('Clicar em nova categoria', async () => {
        const registerCategory = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/div/div[2]/div[4]/div/div/button/div/span")), 2000).click();
        expect(registerCategory).toBeDefined();
    });

    test('Preencher a descrição da categoria', async () => {
        let descriptionCategory = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div/div[2]/div/div/div/div[2]/input")), 2000).sendKeys(category);
        const value = await descriptionCategory.getAttribute('value');
        expect(value).toBe(category);
    });

    test('Listar tipos de categorias', async () => {
        const listTypeCategory = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div/div[2]/div/div/div[2]/div/div/div/div")), 2000).click();
        expect(listTypeCategory).toBeDefined();
    });

    test('Selecionar tipo de categoria', async () => {
        const selectTypeCategory = await driver.wait(until.elementLocated(By.xpath("//span[contains(.,'ACESSÓRIO/SERVIÇO/OUTROS')]")), 2000).click();
        expect(selectTypeCategory).toBeDefined();
    });

    test('Preencher índice markup', async () => {
        const markupCategory = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div/div[2]/div/div/div[3]/div[2]/input")), 2000).sendKeys("2,50");
        const value = await markupCategory.getAttribute('value');
        expect(value).toBe("2,50");
    });

    test('Habilitar categoria pai', async () => {
        let activtivateMainCategory = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div/div[2]/div/div[2]/div/div/div/div")), 2000).click();
        expect(activtivateMainCategory).toBeDefined();
    });

    test('Listar categorias pais', async () => {
        const listMainCategory = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div/div[2]/div/div[2]/div/div[2]/div/div/div/div/div")), 2000).click();
        expect(listMainCategory).toBeDefined();
    });

    test('Selecionar categoria pai', async () => {
        const selectMainCategory = await driver.wait(until.elementLocated(By.xpath("//span[contains(.,'ACESSORIOS')]")), 2000).click();
        expect(selectMainCategory).toBeDefined();
    });

    test('Salvar categoria', async () => {
        const saveCategory = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div[2]/div/div/div/button/div/span")), 2000).click();
        expect(saveCategory).toBeDefined();
    });

});
