import { By } from 'selenium-webdriver';
import { Login } from '../Login/login.js';

(async function Category() {
    let driver = await Login();

    try {
        await driver.manage().setTimeouts({ implicit: 5000 });
        await driver.get('https://teste.otica.app/cadastros/produtoseclassificacoes/categorias');

        let registerCategory = await driver.findElement(By.xpath("//div[@id='__next']/div/div[2]/div/div[2]/div[4]/div/div/button/div/span"));
        registerCategory.click();

        await driver.sleep(2000);

        let descriptionCategory = await driver.findElement(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div/div[2]/div/div/div/div[2]/input"));
        await descriptionCategory.sendKeys('Nova categoria');

        let typeCategory = await driver.findElement(By.xpath("//div[@id='__next']/div/form/div/section[2]/div/div/div/div/div[2]/div/div/div[2]/div/div/div/div"));
        typeCategory.click();

        await driver.sleep(2000);

        let optionType = await driver.findElement(By.xpath("//span[contains(.,'ACESSÓRIO/SERVIÇO/OUTROS')]"));
        optionType.click();

        await driver.sleep(5000);

        let saveCategory = await driver.findElement(By.xpath("//button[contains(.,'Salvar')]"));
        await driver.sleep(5000);
        saveCategory.click();

        console.log("Categoria cadastrada com sucesso.")

    } catch (error) {
        console.error('Erro: ', error);
    } finally {
        await driver.sleep(7000);
        await driver.quit();
    }
})();