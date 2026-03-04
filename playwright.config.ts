import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  use: {
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
  },

  projects: [
    //Project setup auth state
    {
      name: 'setup',
      testMatch: /.*\.setup\.ts$/,
      use: {
        ...devices['Desktop Chrome'],
      },
    },

    //Project chính chạy test
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/user.json',
      },
      dependencies: ['setup'],
    },
  ],
});