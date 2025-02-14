import { Builder, Browser, By } from 'selenium-webdriver';

export async function Login() {
    let driver = await new Builder().forBrowser(Browser.CHROME).build();

    try {
        await driver.manage().window().setRect({ width: 1280, height: 768 });
        await driver.manage().window().setRect({ x: 0, y: 0 });

        await driver.get('https://teste.otica.app/login');

        let acceptCookies = await driver.findElement(By.xpath("//span[contains(.,'ACEITAR TODOS')]")).click();

        let cnpjLogin = await driver.findElement(By.xpath("//div[@id='__next']/div/div[2]/div/form/div/div[2]/input"));
        let userLogin = await driver.findElement(By.xpath("//div[@id='__next']/div/div[2]/div/form/div[2]/div[2]/input"));
        let passwordLogin = await driver.findElement(By.xpath("//div[@id='__next']/div/div[2]/div/form/div[3]/div[2]/input"));
        let enterLogin = await driver.findElement(By.xpath("//span[contains(.,'Entrar')]"));

        await cnpjLogin.sendKeys('60.830.039/0001-68');
        await userLogin.sendKeys('usuario.automatizado');
        await passwordLogin.sendKeys('p0w2i8!');
        await enterLogin.click();

        await driver.sleep(5000);
        let currentUrl = await driver.getCurrentUrl();

        if (currentUrl.includes('/dashboard')) {
            console.log('Login realizado com sucesso.');
            return driver;
        } else {
            console.error('Erro ao realizar login. Página atual:', currentUrl);
            await driver.quit();
            return null;
        }
    } catch (error) {
        console.error('Erro ao realizar login:', error);
        await driver.quit();
        return null;
    }
}
