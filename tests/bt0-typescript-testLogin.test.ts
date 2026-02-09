import { test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { DashboardPage } from '../pages/dashboardPage';

test('Verify Login success', async({page}) =>{
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  await loginPage.goToLoginPage();
  await loginPage.login('admin', '123456');
  await dashboardPage.verifySuccess();
});
