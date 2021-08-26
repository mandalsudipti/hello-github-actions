// @ts-check

//import { PlaywrightTestConfig } from '@playwright/test';
const config = {

    testDir : "playwrightrunner" ,
    use: {
        headless: true,
        viewport: { width: 1280, height: 720 },
        ignoreHTTPSErrors: true,
        video: 'on-first-retry',
    },
  };
  
  module.exports = config;