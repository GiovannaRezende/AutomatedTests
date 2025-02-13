import { Builder, Browser, By } from 'selenium-webdriver';

export async function Login() {
    let driver = await new Builder().forBrowser(Browser.CHROME).build();

    try {
        await driver.manage().window().setRect({ width: 1280, height: 768 });
        await driver.get('https://teste.otica.app');

        let cnpj = await driver.findElement(By.name('shopDocument'));
        let user = await driver.findElement(By.name('user'));
        let password = await driver.findElement(By.name('authPassword'));
        let enter = await driver.findElement(By.className('styles_button__TxdOK'));

        await cnpj.sendKeys('60.830.039/0001-68');
        await user.sendKeys('giovanna.rezende');
        await password.sendKeys('rezende@p0w2i8!');
        await enter.click();

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
