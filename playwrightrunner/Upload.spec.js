
const { test, expect } = require('@playwright/test');

test('Upload file test', async ({ page }) => {
    await page.goto('https://convertio.co/png-jpg/')
    const [fileChooser] = await Promise.all([
        page.waitForEvent('filechooser'),
        page.click('text = Choose Files')
      ]);
    await fileChooser.setFiles('playwrightrunner/img1.PNG')
    await page.click('.btn.btn-xl.btn-primary')
    
    await page.waitForSelector('text = Download your converted file')
    let text = await page.innerText('h1')
    
    expect(text).toBe("Conversion completed!") ;
});