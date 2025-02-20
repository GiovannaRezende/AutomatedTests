const { Builder, Browser, By } = require('selenium-webdriver');

describe('Testes de Login', () => {
    let driver;

    beforeAll(async () => {
        driver = await new Builder().forBrowser(Browser.CHROME).build();
        await driver.manage().window().setRect({ width: 1280, height: 768 });
        //await driver.manage().window().setRect({ x: 0, y: 0 });
        await driver.get('https://teste.otica.app/login');
    });

    afterAll(async () => {
        await driver.quit();
    });

    jest.setTimeout(20000);

    describe('Testes de Login', () => {
        test('Acessando URL do site', async () => {
            const currentUrl = await driver.getCurrentUrl();
            expect(currentUrl).toBe('https://teste.otica.app/login');
        });

        test('Prenchendo o campo de CNPJ', async () => {
            const cnpjLogin = await driver.findElement(By.xpath("//div[@id='__next']/div/div[2]/div/form/div/div[2]/input"));
            await cnpjLogin.sendKeys('60.830.039/0001-68');
            const value = await cnpjLogin.getAttribute('value');
            expect(value).toBe('60.830.039/0001-68');
        });

        test('Prenchendo o campo de usuário', async () => {
            const userLogin = await driver.findElement(By.xpath("//div[@id='__next']/div/div[2]/div/form/div[2]/div[2]/input"));
            await userLogin.sendKeys('usuario.automarizado');
            const value = await userLogin.getAttribute('value');
            expect(value).toBe('usuario.automarizado');
        });

        test('Prenchendo campo de senha', async () => {
            const passwordLogin = await driver.findElement(By.xpath("//div[@id='__next']/div/div[2]/div/form/div[3]/div[2]/input"));
            await passwordLogin.sendKeys('p0w2i8!');
            const value = await passwordLogin.getAttribute('value');
            expect(value).toBe('p0w2i8!');
        });

        test('Clicando em Entrar', async () => {
            const enterLogin = await driver.findElement(By.xpath("//span[contains(.,'Entrar')]")).click();
            expect(enterLogin).toBeDefined();
        });

    });
});
