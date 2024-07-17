// login.js
import { selectors, linkedInUrl } from './config.js';

async function login(page, email, password) {
  try {
    await page.goto(linkedInUrl);
    await page.fill(selectors.emailInput, email);
    await page.fill(selectors.passwordInput, password);
    await page.click(selectors.signInButton);
    await page.waitForNavigation();
  } catch (error) {
    if (error.name === 'TimeoutError') {
      console.log('Navigation timed out. Taking a screenshot...');
      await page.screenshot({ path: 'timeout_screenshot.png' });
    } else {
      console.error('An error occurred:', error);
    }
  }
}

export default login;
