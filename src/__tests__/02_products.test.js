const { By, until } = require('selenium-webdriver');
const { getDriver, closeDriver } = require('../utils/driver.js');
const { faker } = require('@faker-js/faker');

describe("Cadastrar produtos", () => {

    const product = faker.person.fullName();

    let driver;

    beforeAll(async () => {
        driver = await getDriver();
        await driver.get("https://teste.otica.app/cadastros/produtoseclassificacoes/produtos");
    });

    test("Acessar a tela de produtos", async () => {
        const currentUrl = await driver.getCurrentUrl();
        expect(currentUrl).toBe("https://teste.otica.app/cadastros/produtoseclassificacoes/produtos");
    });

    test("Clicar em novo produto", async () => {
        const registerProduct = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/div/div[2]/div[5]/div/div/button/div/span")), 2000).click();
        expect(registerProduct).toBeDefined();
    });

    test("Preencher a descrição do produto", async () => {
        const descriptionProduct = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/div/section[2]/div/div/div/div/div[2]/div/div/div/div[2]/input")), 2000);
        await descriptionProduct.sendKeys(product);
        const value = await descriptionProduct.getAttribute("value");
        expect(value).toBe(product);
    });

    test("Preencher o código de barras do produto", async () => {
        const barcodeProduct = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/div/section[2]/div/div/div/div/div[2]/div/div[2]/div[2]/div[2]/input")), 2000);
        await barcodeProduct.clear();
        await barcodeProduct.sendKeys("SEM GTIN");
        const value = await barcodeProduct.getAttribute("value");
        expect(value).toBe("SEM GTIN");
    });

    test("Preencher o código no fabricante do produto", async () => {
        const producerCodeProduct = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/div/section[2]/div/div/div/div/div[2]/div/div[2]/div[3]/div[2]/input")), 2000);
        await producerCodeProduct.sendKeys("12345");
        const value = await producerCodeProduct.getAttribute("value");
        expect(value).toBe("12345");
    });

    test("Preencher o desconto máximo do produto", async () => {
        const maximumDiscountProduct = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/div/section[2]/div/div/div/div/div[2]/div/div[2]/div[4]/div[2]/input")), 2000);
        await maximumDiscountProduct.sendKeys("10,00");
        const value = await maximumDiscountProduct.getAttribute("value");
        expect(value).toBe("10,00");
    });

    test('Selecionar categoria do produto', async () => {
        const listCategoryProduct = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/div/section[2]/div/div/div/div/div[2]/div/div[3]/div/div/div/div/div")), 2000).click();
        expect(listCategoryProduct).toBeDefined();

        const selectCategoryProduct = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/div/section[2]/div/div/div/div/div[2]/div/div[3]/div/div/div/div[2]/div/div/div/div/div/span")), 2000).click();
        expect(selectCategoryProduct).toBeDefined();
    });

    test("Aceitar alteração de índice markup", async () => {
        const acceptMarkupProduct = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div[2]/div/div/div/div[2]/button")), 2000).click();
        expect(acceptMarkupProduct).toBeDefined();
    });

    test("Selecionar marca do produto", async () => {
        const listBrandProduct = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/div/section[2]/div/div/div/div/div[2]/div/div[3]/div[2]/div/div/div/div")), 2000).click();
        expect(listBrandProduct).toBeDefined();

        const selectBrandProduct = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/div/section[2]/div/div/div/div/div[2]/div/div[3]/div[2]/div/div/div[2]/div/div/div/div/div/span")), 2000).click();
        expect(selectBrandProduct).toBeDefined();
    });

    test("Selecionar gênero do produto", async () => {
        const listGenderProduct = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/div/section[2]/div/div/div/div/div[2]/div/div[3]/div[3]/div/div/div/div")), 2000).click();
        expect(listGenderProduct).toBeDefined();

        const selectGenderProduct = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/div/section[2]/div/div/div/div/div[2]/div/div[3]/div[3]/div/div/div[2]/div/div/div/div/div/span")), 2000).click();
        expect(selectGenderProduct).toBeDefined();
    });

    test("Selecionar material do produto", async () => {
        const listMaterialProduct = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/div/section[2]/div/div/div/div/div[2]/div/div[3]/div[4]/div/div/div/div")), 2000).click();
        expect(listMaterialProduct).toBeDefined();

        const selectMaterialProduct = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/div/section[2]/div/div/div/div/div[2]/div/div[3]/div[4]/div/div/div[2]/div/div/div/div/div/span")), 2000).click();
        expect(selectMaterialProduct).toBeDefined();
    });

    test("Selecionar estilo do produto", async () => {
        const listStyleProduct = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/div/section[2]/div/div/div/div/div[2]/div/div[4]/div/div/div/div/div")), 2000).click();
        expect(listStyleProduct).toBeDefined();

        const selectStyleProduct = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/div/section[2]/div/div/div/div/div[2]/div/div[4]/div/div/div/div[2]/div/div/div/div/div/span")), 2000).click();
        expect(selectStyleProduct).toBeDefined();
    });

    test("Selecionar cor do produto", async () => {
        const listColorProduct = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/div/section[2]/div/div/div/div/div[2]/div/div[4]/div[2]/div/div/div/div")), 2000).click();
        expect(listColorProduct).toBeDefined();

        const selectColorProduct = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/div/section[2]/div/div/div/div/div[2]/div/div[4]/div[2]/div/div/div[2]/div/div/div/div/div/span")), 2000).click();
        expect(selectColorProduct).toBeDefined();
    });

    test("Selecionar coleção do produto", async () => {
        const listCollectionProduct = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/div/section[2]/div/div/div/div/div[2]/div/div[4]/div[3]/div/div/div/div")), 2000).click();
        expect(listCollectionProduct).toBeDefined();

        const selectCollectionProduct = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/div/section[2]/div/div/div/div/div[2]/div/div[4]/div[3]/div/div/div[2]/div/div/div/div/div/span")), 2000).click();
        expect(selectCollectionProduct).toBeDefined();
    });

    test("Preencher código de integração do labaratório do produto", async () => {
        const integrationCodeProduct = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/div/section[2]/div/div/div[2]/div/div[2]/div/div/div[2]/input")), 2000);
        await integrationCodeProduct.sendKeys(product);
        const value = await integrationCodeProduct.getAttribute("value");
        expect(value).toBe(product);
    });

    test("Preencher código de tratamento interno do produto", async () => {
        const treatmentCodeProduct = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/div/section[2]/div/div/div[2]/div/div[2]/div/div[2]/div[2]/input")), 2000);
        await treatmentCodeProduct.sendKeys(product);
        const value = await treatmentCodeProduct.getAttribute("value");
        expect(value).toBe(product);
    });

    test("Selecionar origem de mercadoria do produto", async () => {
        const listOriginProduct = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/div/section[2]/div/div/div[2]/div[2]/div[2]/div/div/div/div/div/div/div")), 2000).click();
        expect(listOriginProduct).toBeDefined();

        const selectOriginProduct = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/div/section[2]/div/div/div[2]/div[2]/div[2]/div/div/div/div/div/div[2]/div/div/div/div/div/span")), 2000).click();
        expect(selectOriginProduct).toBeDefined();
    });

    test("Selecionar NCMs do produto", async () => {
        const listNcmProduct = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/div/section[2]/div/div/div[2]/div[2]/div[2]/div/div/div[2]/div/div/div/div")), 2000).click();
        expect(listNcmProduct).toBeDefined();

        const selectNcmProduct = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/div/section[2]/div/div/div[2]/div[2]/div[2]/div/div/div[2]/div/div/div[2]/div/div/div/div/div/span")), 2000).click();
        expect(selectNcmProduct).toBeDefined();
    });

    test("Permitir vendas sem estoque do produto", async () => {
        const allowSaleProduct = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/div/section[2]/div/div/div[2]/div[3]/div[2]/div/div[2]/div/div")), 2000).click();
        expect(allowSaleProduct).toBeDefined();

    });

    test("Preencher último custo do produto", async () => {
        const lastCostProduct = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/div/section[2]/div/div/div[2]/div[3]/div[2]/div/div[3]/div[2]/input")), 2000);
        await lastCostProduct.sendKeys("200,00");
        const value = await lastCostProduct.getAttribute("value");
        expect(value).toBe("200,00");
    });

    test("Preencher quantidade inicial de estoque do produto", async () => {
        const amountWarehouseProduct = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/div/section[2]/div/div/div[2]/div[3]/div[2]/div/div[4]/div[2]/input")), 2000);
        await amountWarehouseProduct.sendKeys("15");
        const value = await amountWarehouseProduct.getAttribute("value");
        expect(value).toBe("15");
    });

    test("Habilitar serviço de montagem do produto", async () => {
        const fitterServiceProduct = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/div/section[2]/div/div/div[2]/div[4]/div/div[2]/div/div/div/div")), 2000).click();
        expect(fitterServiceProduct).toBeDefined();
    });

    test("Habilitar produção própria do produto", async () => {
        const ownProductionProduct = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/div/section[2]/div/div/div[2]/div[4]/div/div[2]/div/div[2]/div/div")), 2000).click();
        expect(ownProductionProduct).toBeDefined();
    });

    test("Adicionar tabela de preço do produto", async () => {
        const addPriceProduct = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/div/section[2]/div/div/div[3]/div/div[2]/div/h1")), 2000).click();
        expect(addPriceProduct).toBeDefined();
    });

    test("Preencher tabela 1 do produto", async () => {
        const priceOneProduct = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/div/section[2]/div/div/div[3]/div[2]/div/div[2]/div/div[2]/div[2]/div[2]/div/input")), 2000);
        await priceOneProduct.sendKeys("250,00");
        const value = await priceOneProduct.getAttribute("value");
        expect(value).toBe("250,00");
    });

    test("Preencher tabela 2 do produto", async () => {
        const priceTwoProduct = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/div/section[2]/div/div/div[3]/div[2]/div/div[2]/div[2]/div[2]/div[2]/div[2]/div/input")), 2000);
        await priceTwoProduct.sendKeys("300,00");
        const value = await priceTwoProduct.getAttribute("value");
        expect(value).toBe("300,00");
    });

    test("Salvar produto e continuar", async () => {
        const saveProduct = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/div/section[2]/div/div/div[4]/div/div/button/div/span")), 2000).click();
        expect(saveProduct).toBeDefined();
    });

    test("Exibir produto na vitrine virtual", async () => {
        await driver.sleep(3000);
        const displayShowcaseProduct = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/div/section[2]/div/div/div/div/div/div/div")), 2000).click();
        expect(displayShowcaseProduct).toBeDefined();
    });

    test("Salvar e sair", async () => {
        const saveAndLeaveProduct = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/div/section[2]/div/div[2]/div/div/button/div/span")), 2000).click();
        expect(saveAndLeaveProduct).toBeDefined();
    });

});
