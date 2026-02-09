import { test, expect, Page } from '@playwright/test';
export class DashboardPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async verifySuccess() {
        await expect(this.page.locator('h1')).toHaveText('Dashboard');
    }
}