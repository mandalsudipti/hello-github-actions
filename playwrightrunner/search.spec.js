const { test, expect } = require('@playwright/test');

test('search by typing keywords', async ({ page }) => {
    await page.goto("https://en.wikipedia.org/wiki/Main_Page")
    await page.click("#searchInput")
    await page.type("#searchInput" , "India")
    await page.click("#searchButton")
    
    let text = await page.innerText('#firstHeading') ;

    expect(text).toBe("India") ;
});