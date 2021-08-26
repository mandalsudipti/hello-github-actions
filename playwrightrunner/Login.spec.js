const { test , expect} = require('@playwright/test') ;

test('log in test', async ({ page }) => {
    
    let email = 'random' ;
    let password = 'random' ;

    await page.goto('https://www.stealmylogin.com/demo.html')

    await page.fill('input[type="text"]',email)
    await page.fill('input[name="password"]' , password)
    await page.click('input[type="submit"]')
    
    await page.waitForLoadState('load')

    let text = await page.innerText('h1')
    expect(text).toBe('Example Domain');
  });