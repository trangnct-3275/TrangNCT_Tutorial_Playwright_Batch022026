import { test, expect, Page } from '@playwright/test';

function getTaskCheckbox(page: Page, taskName: string) {
  return page
    .locator("li", { hasText: taskName })
    .locator("input[type='checkbox']");
}

test('test', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/#/');

  const toDoField = page.getByRole('textbox', { name: 'What needs to be done?' });
  await toDoField.fill('Task A');
  await toDoField.press('Enter');

  await toDoField.fill('Task B');
  await toDoField.press('Enter');

  await toDoField.fill('Task C');
  await toDoField.press('Enter');

  const toDoList = page.locator('.todo-list li');
  await expect(toDoList).toHaveCount(3);

  const taskA = getTaskCheckbox(page, "Task A");
  await taskA.check();
  await expect(taskA).toBeChecked();

  await page.getByRole('button', { name: 'Delete' }).click();
  await expect(toDoList).toHaveCount(2);

});