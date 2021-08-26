const { test, expect } = require('@playwright/test');

test('wait for selector', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  
  let ele = await page.waitForSelector('#__docusaurus > div.main-wrapper > main > section.logosSection_kozE > div > div > div > ul > li:nth-child(1) > a > img');
  let logo = await ele.getAttribute('src') ;
  
  expect(logo).not.toBeNull();
});