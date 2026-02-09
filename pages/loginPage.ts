import { test, expect, Page } from '@playwright/test';
export class LoginPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }


async goToLoginPage(){
    await this.page.goto('https://example.com/login');
}

async login(username: string, password: string) {
    await this.page.locator('input#username').fill(username);
    await this.page.locator('input#password').fill(password);
    await this.page.locator('button#login').click();
}

}