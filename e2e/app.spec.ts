import { test } from "@playwright/test";

test("visit root page", async ({ page }) => {
  await page.goto("http://127.0.0.1:5173/");
  await page.getByRole("heading", { name: "Hello, Svelte!" }).click();
});
