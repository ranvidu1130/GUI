const { getDriver } = require('./utils.js');

const DefaultTimeout = 60000;

describe("Auth Flow", () => {

    let driver;

    loadPage = async () => {
        await driver.get("http://localhost:5173/");
    }

    beforeEach(async () => {
        driver = await getDriver();
    })

    afterEach(async () => {
        await driver.quit();
    })

    test("login test", async () => {
        // Skip e2e tests in CI environment
        if (process.env.CI) {
            console.log('Skipping E2E test in CI environment');
            return;
        }
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

        await new Promise(resolve => setTimeout(resolve, 3000));

        const currentUrl = await driver.getCurrentUrl();

        expect(currentUrl).toContain("studentdashboard");
    }, DefaultTimeout);


    test("signup test", async () => {
        await loadPage();

        const signUpXPath = '//*[@id="auth-buttons"]/a[2]';
        const signUpButton = await driver.findElement({ xpath: signUpXPath });
        await signUpButton.click();

        await new Promise(resolve => setTimeout(resolve, 2000));


        const nameInput = await driver.findElement({ id: "name" });
        const usernameInput = await driver.findElement({ id: "username" });
        const emailInput = await driver.findElement({ id: "email" });
        const passwordInput = await driver.findElement({ id: "password" });
        const confirmPasswordInput = await driver.findElement({ id: "confirmPassword" });

        const name = "Test User";
        const testUsername = `user${Date.now()}`;
        const testEmail = `user${Date.now()}@example.com`;
        const testPassword = "abcdef";

        await nameInput.sendKeys(name);
        await usernameInput.sendKeys(testUsername);
        await emailInput.sendKeys(testEmail);
        await passwordInput.sendKeys(testPassword);
        await confirmPasswordInput.sendKeys(testPassword);

        const registerButton = await driver.findElement({ xpath: '//*[@id="root"]/div[2]/div/form/button' });
        await registerButton.click();

        await new Promise(resolve => setTimeout(resolve, 3000));

        const currentUrl = await driver.getCurrentUrl();
        expect(currentUrl).toContain("studentdashboard");
    }, DefaultTimeout);
})
