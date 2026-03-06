import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,
  retries: 1,

  reporter: [
    ['list'],                                      
    
    ['html', { 
        outputFolder: 'playwright-report',         
        open: 'on-failure'  // Open browser after execution >> never, on-failure, always
    }], 
    
    ['json', { outputFile: 'report.json' }]   //export Json report for CI/CD
  ],


  use: {
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
  },

  projects: [
    // 1. Setup project (login and save auth state)
    {
      name: 'setup',
      testMatch: /.*\.setup\.ts$/,
      use: {
        ...devices['Desktop Chrome'],
      },
    },

    // 2. Chromium
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/user.json',
      },
      dependencies: ['setup'],
    },

    // 3. Firefox
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
        storageState: 'playwright/.auth/user.json',
      },
      dependencies: ['setup'],
    },

    // 4. Webkit (Safari engine)
    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
        storageState: 'playwright/.auth/user.json',
      },
      dependencies: ['setup'],
    },
  ],
});