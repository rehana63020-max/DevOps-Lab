const { Builder, By } = require('selenium-webdriver');
const assert = require('assert');
const path = require('path');

describe('JavaScript Addition Test', function () {
    this.timeout(20000);

    let driver;

    before(async function () {
        driver = await new Builder().forBrowser('chrome').build();

        const filePath = path.resolve(__dirname, 'index.html');
        await driver.get('file://' + filePath);
    });

    it('should add two numbers', async function () {
        await driver.findElement(By.id('num1')).sendKeys('10');
        await driver.findElement(By.id('num2')).sendKeys('20');

        await driver.findElement(By.id('addBtn')).click();

        const result = await driver.findElement(By.id('result')).getText();

        assert.strictEqual(result, 'Result: 30');
    });

    after(async function () {
        if (driver) {
            await driver.quit();
        }
    });
});