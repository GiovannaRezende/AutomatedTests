import { By, until } from 'selenium-webdriver';
import { Login } from '../Login/login.js';

(async function Laboratorys() {
    let driver = await Login();

    try {
        await driver.get('https://teste.otica.app/cadastros/clienteseparceiros/laboratorios');

        let registerLaboratory = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/div/div[2]/div[4]/div/div/button/div/span")), 2000).click();

        let descriptionLaboratory = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div[2]/div/div/div/div[2]/input")), 2000).sendKeys("Novo laboratório");

        let integrationLaboratory = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div[2]/div/div/div[2]/div/div/div/div")), 2000).click();

        let optionIntegration = await driver.wait(until.elementLocated(By.xpath("//span[contains(.,'SAO WEB')]")), 2000).click();

        let saveLaboratory = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div[2]/div/div/button")), 2000).click();

    } catch (error) {
        console.error('Erro: ', error);
    } finally {
        await driver.sleep(7000);z
        await driver.quit();z
    }
})();