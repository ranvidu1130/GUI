const { getDriver } = require('./utils.js');

const DefaultTimeout = 6000;

describe("Auth Flow", () => {

    let driver;

    loadPage = async () => {
        await driver.get("http://localhost:5173/");
    }

    beforeAll(async () => {
        driver = await getDriver();
    })

    afterAll(async () => {
        await driver.quit();
    })

    test("login test", async () => {
        await loadPage();

        const signInXPath = '//*[@id="auth-buttons"]/a[1]';

        const signInButton = await driver.findElement({ xpath: signInXPath });
        await signInButton.click();

        await new Promise(resolve => setTimeout(resolve, 2000));

        const usernameInput = await driver.findElement({ id: "username" });
        usernameInput.sendKeys("asdf");
        const passwordInput = await driver.findElement({ id: "password" });
        passwordInput.sendKeys("123456");

        const loginButton = await driver.findElement({ xpath: '//*[@id="root"]/div[2]/div/form/button' });
        await loginButton.click();

        await new Promise(resolve => setTimeout(resolve, 2000));

        const currentUrl = await driver.getCurrentUrl();

        expect(currentUrl).toContain("studentdashboard");
    }, DefaultTimeout);

})
