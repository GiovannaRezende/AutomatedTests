import { By, until } from 'selenium-webdriver';
import { Login } from '../Login/login.js';

(async function Doctors() {
    let driver = await Login();

    try {
        await driver.get('https://teste.otica.app/cadastros/clienteseparceiros/medicos');

        let registerDoctor = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/div/div[2]/div[5]/div/div/button/div/span")), 2000).click();

        let nameDoctor = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div/div[2]/div/div/div/div[2]/input")), 2000).sendKeys("Novo médico");

        let crmDoctor = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div/div[2]/div/div/div[2]/div[2]/input")), 2000).sendKeys("12345");

        let ufCrmDoctor = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div/div[2]/div/div/div[3]/div/div/div/div")), 2000).click();

        let optionUfCrm = await driver.wait(until.elementLocated(By.xpath("//span[contains(.,'SP')]")), 2000).click();

        let emailDoctor = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div/div[2]/div/div[2]/div/div[2]/input")), 2000).sendKeys("medico@gmail.com");

        let phoneDoctor = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div/div[2]/div/div[2]/div[2]/div[2]/input")), 2000).sendKeys("11999999999");

        let cepDoctor = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div[2]/div[2]/div/div/div/div/div[2]/input")), 2000).sendKeys("05424-020");

        let searchCepDoctor = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div[2]/div[2]/div/div/div[2]/div/div/button/div/span")), 2000).click();

        await driver.sleep(5000);

        let numberDoctor = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div[2]/div[2]/div/div[2]/div[2]/div/div[2]/input")), 2000).sendKeys("59");

        let saveDcotor = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div[2]/div/div/div/button")), 2000).click();

    } catch (error) {
        console.error('Erro: ', error);
    } finally {
        await driver.sleep(7000);
        await driver.quit();
    }
})();