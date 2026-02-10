import { test, expect } from '@playwright/test';
import path from 'path';

test('The Internet - Deynamic Loading', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');
  
  await page.locator('//button[text()="Start"]').click();

  const textVerify = page.locator('div#finish h4');
  await textVerify.waitFor({state: "visible"});

  await expect(textVerify).toHaveText("Hello World!");

});