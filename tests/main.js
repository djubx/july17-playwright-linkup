// main.js
import { chromium } from 'playwright';
import login from './login.js';
import scrapeProfile from './scrapeProfile.js';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  const email = 'dheeraj.jha.ub@gmail.com'; // Replace with actual email
  const password = 'ShikhaDheeraj2017!'; // Replace with actual password

  await login(page, email, password);
  
  const profile = await scrapeProfile(page);
  console.log(profile);

  await browser.close();
})();
