require('events');
const { test, expect } = require('@playwright/test');

test.use({acceptDownloads : true}) ;
test('check page load time', async ({ page }) => {
    
    await page.goto('https://file-examples.com/index.php/sample-video-files/sample-avi-files-download/') ;
    let before_load = new Date().getTime() ;
    let after_load ;

    await Promise.all([

        page.waitForEvent('load'),
        after_load = new Date().getTime(),
        console.log('Page loaded!')
    
      ]);
    let timeRequired = (after_load - before_load) ;
    //console.log(timeRequired);
    expect(timeRequired).toBeLessThanOrEqual(200) ;
});