// scrapeProfile.js
import { selectors } from './config.js';

async function scrapeProfile(page) {
  const profile = {};

  profile.name = await page.textContent(selectors.profileName);
  profile.headline = await page.textContent(selectors.profileHeadline);

  
  
  await page.waitForSelector('xpath=//button[contains(.,\'Compose message\')]');
  await page.click('xpath=//button[contains(.,\'Compose message\')]');

  // wait till the list elements are visible
  await page.waitForSelector('.msg-connections-typeahead__result-list-container li');

    // Extract the data from each list item
    const listItems = await page.$$eval('.msg-connections-typeahead__result-list-container li', items => {
      return items.map(item => {
        const name = item.querySelector('dt')?.textContent.trim();
        const position = item.querySelector('dd')?.textContent.trim();
        const image = item.querySelector('img')?.src;
        const status = item.querySelector('.presence-indicator span')?.textContent.trim();
        
        return { name, position, image, status };
      });
    });

  profile.connections = listItems;
  // Add more profile fields scraping as needed

  return profile;
}

export default scrapeProfile;
