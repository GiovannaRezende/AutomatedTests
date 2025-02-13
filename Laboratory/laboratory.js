import { By } from 'selenium-webdriver';
import { Login } from '../Login/login.js';

(async function Laboratory() {
    let driver = await Login();
    await driver.manage().setTimeouts({ implicit: 2000 });

    try {
        await driver.get('https://teste.otica.app/cadastros/clienteseparceiros/laboratorios');

        let registerLaboratory = await driver.findElement(By.xpath("//div[@id='__next']/div/div[2]/div/div[2]/div[4]/div/div/button/div/span"));
        registerLaboratory.click();

        await driver.sleep(2000);

        let descriptionLaboratory = await driver.findElement(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div[2]/div/div/div/div[2]/input"));
        descriptionLaboratory.sendKeys("Novo laboratório");

        let integrationLaboratory = await driver.findElement(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div[2]/div/div/div[2]/div/div/div/div"));
        integrationLaboratory.click();

        await driver.sleep(5000);

        let optionIntegration = await driver.findElement(By.xpath("//span[contains(.,'SAO WEB')]"));
        optionIntegration.click();

        await driver.sleep(5000);

        let saveLaboratory = await driver.findElement(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div[2]/div/div/button"));
        saveLaboratory.click();

    } catch (error) {
        console.error('Erro: ', error);
    } finally {
        await driver.sleep(7000);
        await driver.quit();
    }
})();