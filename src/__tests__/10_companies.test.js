const { By, until } = require('selenium-webdriver');
const { getDriver, closeDriver } = require('../utils/driver.js');
const { faker } = require('@faker-js/faker');

describe('Cadastrar empresas', () => {

    const company = faker.company.name();

    let driver;

    beforeAll(async () => {
        driver = await getDriver();
        await driver.get("https://teste.otica.app/cadastros/administracao/empresas");
    });

    test('Acessar a tela de empresas', async () => {
        const currentUrl = await driver.getCurrentUrl();
        expect(currentUrl).toBe('https://teste.otica.app/cadastros/administracao/empresas');
    });

    test('Clicar em nova empresa', async () => {
        const registerCompany = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/div/div[2]/div[4]/div/div/button/div/span")), 2000).click();
        expect(registerCompany).toBeDefined();
    });

    test('Preencher o CNPJ da empresa', async () => {
        const cnpjCompany = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/section[2]/div/form/div/div/div/div[2]/div/div/div/div[2]/input")), 2000);
        await cnpjCompany.sendKeys("56.440.808/0001-44");
        const value = await cnpjCompany.getAttribute('value');
        expect(value).toBe("56.440.808/0001-44");
    });

    test('Preencher o nome fantasia da empresa', async () => {
        const fantasyNameCompany = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/section[2]/div/form/div/div/div/div[2]/div/div/div[2]/div[2]/input")), 2000);
        await fantasyNameCompany.sendKeys(company);
        const value = await fantasyNameCompany.getAttribute('value');
        expect(value).toBe(company);
    });

    test('Preencher a razão social da empresa', async () => {
        const descriptionCompany = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/section[2]/div/form/div/div/div/div[2]/div/div/div[3]/div[2]/input")), 2000);
        await descriptionCompany.sendKeys(company);
        const value = await descriptionCompany.getAttribute('value');
        expect(value).toBe(company);
    });

    test('Preencher a inscrição estadual da empresa', async () => {
        const stateRegistrationCompany = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/section[2]/div/form/div/div/div/div[2]/div/div[2]/div[2]/div[2]/input")), 2000);
        await stateRegistrationCompany.sendKeys("12345678");
        const value = await stateRegistrationCompany.getAttribute('value');
        expect(value).toBe("12345678");
    });

    test('Preencher a inscrição municipal da empresa', async () => {
        const municipalRegistrationCompany = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/section[2]/div/form/div/div/div/div[2]/div/div[2]/div[3]/div[2]/input")), 2000);
        await municipalRegistrationCompany.sendKeys("12345678");
        const value = await municipalRegistrationCompany.getAttribute('value');
        expect(value).toBe("12345678");
    });

    test('Preencher o CNAE da empresa', async () => {
        const cnaeCompany = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/section[2]/div/form/div/div/div/div[2]/div/div[3]/div/div[2]/input")), 2000);
        await cnaeCompany.sendKeys("12345678");
        const value = await cnaeCompany.getAttribute('value');
        expect(value).toBe("12345678");
    });

    test('Selecionar o regime tributário da empresa', async () => {
        const listTaxRegimeCompany = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/section[2]/div/form/div/div/div/div[2]/div/div[3]/div[2]/div/div/div/div")), 2000).click();
        expect(listTaxRegimeCompany).toBeDefined();

        const selectTaxRegimeCompany = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/section[2]/div/form/div/div/div/div[2]/div/div[3]/div[2]/div/div/div[2]/div/div[4]/div/div/div/span")), 2000).click();
        expect(selectTaxRegimeCompany).toBeDefined();
    });

    test('Preencher o e-mail da empresa', async () => {
        const emailCompany = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/section[2]/div/form/div/div/div/div[2]/div/div[4]/div/div[2]/input")), 2000);
        await emailCompany.sendKeys("empresa@gmail.com");
        const value = await emailCompany.getAttribute('value');
        expect(value).toBe("empresa@gmail.com");
    });

    test('Preencher o telefone da empresa', async () => {
        const phoneCompany = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/section[2]/div/form/div/div/div/div[2]/div/div[4]/div[2]/div[2]/input")), 2000)
        await phoneCompany.sendKeys("(11) 9999-9999");
        const value = await phoneCompany.getAttribute('value');
        expect(value).toBe("(11) 9999-9999");
    });

    test('Preencher CEP da empresa', async () => {
        const cepCompany = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/section[2]/div/form/div/div[2]/div/div[2]/div/div/div/div/div[2]/input")), 2000)
        await cepCompany.sendKeys("05424-020");
        const value = await cepCompany.getAttribute('value');
        expect(value).toBe("05424-020");
    });

    test('Buscar o CEP da empresa', async () => {
        const searchCepCompany = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/section[2]/div/form/div/div[2]/div/div[2]/div/div/div[2]/div/div/button")), 2000).click();
        expect(searchCepCompany).toBeDefined();
        await driver.sleep(2000);
    });

    test('Preencher o número da empresa', async () => {
        const numberCompany = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/section[2]/div/form/div/div[2]/div/div[2]/div/div[2]/div[2]/div/div[2]/input")), 2000)
        await numberCompany.sendKeys("59");
        const value = await numberCompany.getAttribute('value');
        expect(value).toBe("59");
    });

    test('Salvar e continuar', async () => {
        const saveAndContinueCompany = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/section[2]/div/form/div/div[3]/div/div/div/button/div/span")), 2000).click();
        expect(saveAndContinueCompany).toBeDefined();
    });

    test('Clicar na aba de Configurações', async () => {
        const clickSettingsCompany = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/section/div/div[3]/h1")), 2000).click();
        expect(clickSettingsCompany).toBeDefined();
    });

    test('Selecionar forma de pagamento brinde da empresa', async () => {
        const listGiftPaymentCompany = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/section[2]/div/form/div/div/div[2]/div/div[2]/div/div/div/div/div")), 2000).click();
        expect(listGiftPaymentCompany).toBeDefined();

        const selectGiftPaymentCompany = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/section[2]/div/form/div/div/div[2]/div/div[2]/div/div/div/div[2]/div/div[10]/div/div/div/span")), 2000).click();
        expect(selectGiftPaymentCompany).toBeDefined();
    });

    test('Selecionar conta financeiro do ponto de venda da empresa', async () => {
        const listFinancilAccountCompany = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/section[2]/div/form/div/div/div/div[2]/div[2]/div/div/div/div/div/div")), 2000).click();
        expect(listFinancilAccountCompany).toBeDefined();

        const selectFinancilAccountCompany = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/section[2]/div/form/div/div/div/div[2]/div[2]/div/div/div/div/div[2]/div/div/div")), 2000).click();
        expect(selectFinancilAccountCompany).toBeDefined();
    });

    test('Selecionar segmento da venda direta da empresa', async () => {
        const listSaleSegmentCompany = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/section[2]/div/form/div/div/div/div[2]/div[2]/div/div[2]/div/div/div/div")), 2000).click();
        expect(listSaleSegmentCompany).toBeDefined();

        const selectSaleSegmentCompany = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/section[2]/div/form/div/div/div/div[2]/div[2]/div/div[2]/div/div/div[2]/div/div[9]/div/div/div/span")), 2000).click();
        expect(selectSaleSegmentCompany).toBeDefined();
    });

    test('Selecionar segmento da ordem de serviço da empresa', async () => {
        const listOsSegmentCompany = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/section[2]/div/form/div/div/div/div[2]/div[2]/div/div[3]/div/div/div/div")), 2000).click();
        expect(listOsSegmentCompany).toBeDefined();

        const selectOsSegmentCompany = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/section[2]/div/form/div/div/div/div[2]/div[2]/div/div[3]/div/div/div[2]/div/div[10]/div/div/div/span")), 2000).click();
        expect(selectOsSegmentCompany).toBeDefined();
    });

    test('Selecionar segmento das movimentações financeiras da empresa', async () => {
        const listMovementSegmentCompany = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/section[2]/div/form/div/div/div/div[2]/div[2]/div/div[4]/div/div/div/div")), 2000).click();
        expect(listMovementSegmentCompany).toBeDefined();

        const selectMovementSegmentCompany = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/section[2]/div/form/div/div/div/div[2]/div[2]/div/div[4]/div/div/div[2]/div/div[40]/div/div/div/span")), 2000).click();
        expect(selectMovementSegmentCompany).toBeDefined();
    });

    test('Selecionar segmento para previsionamento dos recebimentos em cartão da empresa', async () => {
        const listCardSegmentCompany = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/section[2]/div/form/div/div/div/div[2]/div[2]/div/div[4]/div/div/div/div")), 2000).click();
        expect(listCardSegmentCompany).toBeDefined();

        const selectCardSegmentCompany = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/section[2]/div/form/div/div/div/div[2]/div[2]/div/div[4]/div/div/div[2]/div/div[40]/div/div/div/span")), 2000).click();
        expect(selectCardSegmentCompany).toBeDefined();
    });

    test('Salvar e continuar', async () => {
        const saveAndContinueCompany = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/section[2]/div/form/div/div[2]/div/div/div/button/div/span")), 2000).click();
        expect(saveAndContinueCompany).toBeDefined();
    });

    test('Clicar na aba Nota fiscal', async () => {
        const clickNFCompany = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/section/div/div[5]/h1")), 2000).click();
        expect(clickNFCompany).toBeDefined();
    });

    test('Salvar e sair', async () => {
        const saveAndLeaveCompany = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/section[2]/div/div[2]/div/div/div/button/div/span")), 2000).click();
        expect(saveAndLeaveCompany).toBeDefined();
    });

});
