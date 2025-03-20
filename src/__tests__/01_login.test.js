const { By, until } = require('selenium-webdriver');
const { getDriver, closeDriver } = require("../utils/driver.js");

describe('Acessar o site', () => {

    let driver;

    beforeAll(async () => {
        driver = await getDriver();
        await driver.get("https://teste.otica.app/login");
    });

    test("Acessar URL do site", async () => {
        const currentUrl = await driver.getCurrentUrl();
        expect(currentUrl).toBe("https://teste.otica.app/login");
        const acceptCookies = await driver.findElement(By.xpath("//span[contains(.,'ACEITAR TODOS')]")).click();
    });

    test("Prencher o campo de CNPJ", async () => {
        const cnpjLogin = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/div/form/div/div[2]/input")), 2000);
        await cnpjLogin.sendKeys("60.830.039/0001-68");
        const value = await cnpjLogin.getAttribute("value");
        expect(value).toBe("60.830.039/0001-68");
    });

    test("Prencher o campo de usuário", async () => {
        const userLogin = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/div/form/div[2]/div[2]/input")), 2000);
        await userLogin.sendKeys("usuario.automatizado");
        const value = await userLogin.getAttribute("value");
        expect(value).toBe("usuario.automatizado");
    });

    test("Prencher campo de senha", async () => {
        const passwordLogin = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/div/form/div[3]/div[2]/input")), 2000);
        await passwordLogin.sendKeys("p0w2i8!");
        const value = await passwordLogin.getAttribute("value");
        expect(value).toBe("p0w2i8!");
    });

    test("Entrar no site", async () => {
        const enterLogin = await driver.wait(until.elementLocated(By.xpath("//span[contains(.,'Entrar')]")), 5000);
        await enterLogin.click();

        await driver.wait(until.urlContains("/dashboard"), 10000);
        const currentUrl = await driver.getCurrentUrl();
        expect(currentUrl.includes("/dashboard")).toBe(true);
    });
});