import { test, expect, Page, Locator } from '@playwright/test';

function getTaskCheckbox(page: Page, taskName: string) {
  return page
    .locator("li", { hasText: taskName })
    .locator("input[type='checkbox']");
}

function getTask(page: Page, taskName: string) {
  return page.locator("li", {hasText: taskName});
}

async function pressEnter(page: Page, locator: Locator) {
    locator.press("Enter");
}

test('ToDoMVC Demo: Manage To Do List', async ({ page }) => {

  await page.goto("https://demo.playwright.dev/todomvc/#/");
  
  const toDoField = page.locator("input.new-todo");
  await toDoField.fill("Task A");
  await pressEnter(page, toDoField);

  await toDoField.fill("Task B");
  await pressEnter(page, toDoField);

  await toDoField.fill("Task C");
  await pressEnter(page, toDoField);


  //await page.locator("label[data-testid]").filter({hasText: "Task B"});
  //await page.locator("//label[text()='Task B']/preceding-sibling::input").check();
  await getTaskCheckbox(page, "Task B").check();
  //await page.waitForTimeout(3000);

  const toDoList = page.locator("ul.todo-list li");
  await expect(toDoList.first()).toHaveText("Task A");

  await getTask(page, "Task C").hover();
  await getTask(page, "Task C").locator("button.destroy").click();
  //await page.waitForTimeout(3000);

});