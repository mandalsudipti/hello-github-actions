const { test, expect } = require('@playwright/test');

test('Type on keyboard', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.click('input[placeholder="Search"]');
  await Promise.all([
    page.keyboard.type('page',{delay:100}) ,
  ]);
  await page.keyboard.press('Enter',{delay:100});
  let url = page.url() ;
  expect(url).toBe("https://playwright.dev/docs/api/class-page") ;
});