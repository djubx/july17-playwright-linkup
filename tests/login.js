// login.js
import { selectors, linkedInUrl } from './config.js';

async function login(page, email, password) {
  await page.goto(linkedInUrl);
  await page.fill(selectors.emailInput, email);
  await page.fill(selectors.passwordInput, password);
  await page.click(selectors.signInButton);
  await page.waitForNavigation();
}

export default login;
