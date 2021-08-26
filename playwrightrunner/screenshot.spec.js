const { test , expect} = require('@playwright/test') ;

test('screenshot test', async ({ page }) => {
    
    await page.goto("https://en.wikipedia.org/wiki/Main_Page");
    expect(await page.screenshot()).toMatchSnapshot('screenshot.png') ;
  });