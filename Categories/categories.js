import { By, until } from 'selenium-webdriver';
import { Login } from '../Login/login.js';
import { faker } from '@faker-js/faker';

(async function Categorys() {
    let driver = await Login();

    try {
        await driver.manage().setTimeouts({ implicit: 5000 });
        await driver.get('https://teste.otica.app/cadastros/produtoseclassificacoes/categorias');

        const category = faker.person.jobArea();

        let registerCategory = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/div/div[2]/div[4]/div/div/button/div/span")), 2000).click();

        let descriptionCategory = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div/div[2]/div/div/div/div[2]/input")), 2000).sendKeys(category);

        let typeCategory = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div/div[2]/div/div/div[2]/div/div/div/div")), 2000).click();

        let optionType = await driver.wait(until.elementLocated(By.xpath("//span[contains(.,'ACESSÓRIO/SERVIÇO/OUTROS')]")), 2000).click();

        let markupCategory = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div/div[2]/div/div/div[3]/div[2]/input")), 2000).sendKeys("2,50");

        let selectMainCategory = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div/div[2]/div/div[2]/div/div/div/div")), 2000).click();

        let mainCategory = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div/div[2]/div/div[2]/div/div[2]/div/div/div/div/div")), 2000).click();

        let optionCategory = await driver.wait(until.elementLocated(By.xpath("//span[contains(.,'ACESSORIOS')]")), 2000).click();

        let saveCategory = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div[2]/div/div/div/button/div/span")), 2000).click();

        console.log("Categoria cadastrada com sucesso.");

    } catch (error) {
        console.error('Erro: ', error);
    } finally {
        await driver.sleep(7000);
        await driver.quit();
    }
})();