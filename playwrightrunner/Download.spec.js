const { test, expect } = require('@playwright/test');

test.use({acceptDownloads : true}) ;
test('dowload file', async ({ page }) => {
  await page.goto('https://unsplash.com/photos/tZHuY6ryaSE');
  
  const [ download ] = await Promise.all([
    page.waitForEvent('download'), // wait for download to start
    page.click("._2Aga-"),
  ]);
  
  const imgUrl = await download.url();
  expect(imgUrl).toMatch("g-tZHuY6ryaSE-unsplash.jpg") ;
});