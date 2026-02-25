import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    headless: true
  }});

module.exports = {
use: {
  screenshot: 'only-on-failure', 
  //video: 'retain-on-failure',   
  trace: 'on-first-retry',     
},}



