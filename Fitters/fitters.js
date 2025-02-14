import { By, until } from 'selenium-webdriver';
import { Login } from '../Login/login.js';
import { faker } from '@faker-js/faker';

(async function Fitters() {
    let driver = await Login();

    try {
        await driver.get('https://teste.otica.app/cadastros/clienteseparceiros/montadores');

        const nameFitter = faker.person.jobTitle();

        let registerFitter = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/div[2]/div/div[2]/div[4]/div/div/button/div/span")), 2000).click();

        let descriptionFitter = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div[2]/div/div/div/div[2]/input")), 2000).sendKeys(nameFitter);

        let saveFitter = await driver.wait(until.elementLocated(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div[2]/div/div/div/button/div/span")), 2000).click();

    } catch (error) {
        console.error('Erro: ', error);
    } finally {
        await driver.sleep(7000);
        await driver.quit();
    }
})();