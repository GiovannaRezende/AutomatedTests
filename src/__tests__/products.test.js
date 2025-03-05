const { By, until } = require('selenium-webdriver');
const { getDriver, closeDriver } = require('../utils/driver.js');
const { faker } = require('@faker-js/faker');

describe('Cadastrar produtos', () => {

    const product = faker.person.fullName();

    let driver;

    beforeAll(async () => {
        driver = await getDriver();
        await driver.get("https://teste.otica.app/cadastros/produtoseclassificacoes/produtos");
    });

    test('Acessar a tela de produtos', async () => {
        const currentUrl = await driver.getCurrentUrl();
        expect(currentUrl).toBe('https://teste.otica.app/cadastros/produtoseclassificacoes/produtos');
    });

    test('Clicar em novo produto', async () => {
        const registerProduct = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/div/div[2]/div[5]/div/div/button/div/span")), 2000).click();
        expect(registerProduct).toBeDefined();
    });

    test('Preencher a descrição do produto', async () => {
        const descriptionProduct = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/div/section[2]/div/div/div/div/div[2]/div/div/div/div[2]/input")), 2000);
        await descriptionProduct.sendKeys(product);
        const value = await descriptionProduct.getAttribute('value');
        expect(value).toBe(product);
    });

    test('Preencher o código de barras do produto', async () => {
        const barcodeProduct = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/div/section[2]/div/div/div/div/div[2]/div/div[2]/div[2]/div[2]/input")), 2000);
        await barcodeProduct.clear();
        await barcodeProduct.sendKeys("SEM GTIN");
        const value = await barcodeProduct.getAttribute('value');
        expect(value).toBe("SEM GTIN");
    });

    test('Preencher o código no fabricante do produto', async () => {
        const producerCodeProduct = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/div/section[2]/div/div/div/div/div[2]/div/div[2]/div[3]/div[2]/input")), 2000);
        await producerCodeProduct.sendKeys("12345");
        const value = await producerCodeProduct.getAttribute('value');
        expect(value).toBe("12345");
    });

    test('Preencher o desconto máximo do produto', async () => {
        const maximumDiscountProduct = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/div/section[2]/div/div/div/div/div[2]/div/div[2]/div[4]/div[2]/input")), 2000);
        await maximumDiscountProduct.sendKeys("10,00");
        const value = await maximumDiscountProduct.getAttribute('value');
        expect(value).toBe("10,00");
    });

    test('Listar categorias do produto', async () => {

    });

    test('Selecionar categoria do produto', async () => {

    });

    test('Listar marcas do produto', async () => {

    });

    test('Selecionar marca do produto', async () => {

    });

    test('Listar genêros do produto', async () => {

    });

    test('Selecionar gênero do produto', async () => {

    });

    test('Listar materiais do produto', async () => {

    });

    test('Selecionar material do produto', async () => {

    });

    test('Listar estilos do produto', async () => {

    });

    test('Selecionar estilo do produto', async () => {

    });

    test('Listar cores do produto', async () => {

    });

    test('Selecionar cor do produto', async () => {

    });

    test('Listar coleções do produto', async () => {

    });

    test('Selecionar coleção do produto', async () => {

    });

    test('Preencher códgio de integração do labaratório do produto', async () => {

    });

    test('Preencher código de tratamento interno do produto', async () => {

    });

    test('Listar origens de mercadoria do produto', async () => {

    });

    test('Selecionar origem de categoria do produto', async () => {

    });

    test('Listar NCMs do produto', async () => {

    });

    test('Permitir vendas sem estoque do produto', async () => {

    });

    test('Preencher último custo do produto', async () => {

    });

    test('Preencher quantidade inicial de estoque do produto', async () => {

    });

    test('Habilitar serviço de montagem do produto', async () => {

    });

    test('Habilitar produção própria do produto', async () => {

    });

    test('Adicionar tabela de preço do produto', async () => {

    });

    test('Preencher tabela 1 do produtos', async () => {

    });

    test('Preencher tabela 2 do produto', async () => {

    });

    test('Salvar produto e continuar', async () => {
        const saveProduct = await driver.wait(until.elementLocated(By.xpath("")), 2000).click();
        expect(saveProduct).toBeDefined();
    });

});
