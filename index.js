require('dotenv').config();
const webdriver = require('selenium-webdriver');

async function openCrawlerWeb() {
  let driver = await new webdriver.Builder().forBrowser('chrome').build();

  const web = 'https://medium.com/dean-lin';

  driver.get(web);
}

openCrawlerWeb();
