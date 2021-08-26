const { test, expect } = require('@playwright/test');

test('Test on dialog box', async ({ page }) => {
    let msg ;
    page.on('dialog' , async (dialog) =>{
        msg = dialog.message() ;
        //console.log(dialog.type());
        await dialog.accept() ;
    })

    await page.goto('https://letcode.in/alert')
    let ele = await page.waitForSelector('#accept');
    await ele.click()
    expect(msg).toBe("Hey! Welcome to LetCode") ;
});