const { test, expect } = require('@playwright/test');

test('On Load page', async ({ page }) => {
    let before , after ;
    page.once('load', () =>{ 
        after = new Date().getTime() ;
        console.log('Page loaded!');
    });
    before = new Date().getTime() ;
    await page.goto('https://playwright.dev/');
    //console.log(before , after) ;
    expect(after - before).toBeGreaterThan(0) ;
});