const { test, expect } = require('@playwright/test');

test('element handler', async ({ page }) => {
    await page.goto("https://playwright.dev/");
    const ele = await page.$("#__docusaurus > nav > div.navbar__inner > div:nth-child(1) > div:nth-child(6)")
    await ele.hover();
    const pageUrl = await page.$("#__docusaurus > nav > div.navbar__inner > div:nth-child(1) > div:nth-child(6) > ul > li:nth-child(4) > a");
    await pageUrl.click() ;
    expect( await page.url()).toMatch("https://playwright.dev/dotnet/");
});