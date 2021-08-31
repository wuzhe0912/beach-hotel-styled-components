require('dotenv').config();
const webdriver = require('selenium-webdriver');

async function openCrawlerWeb() {
  let driver = await new webdriver.Builder().forBrowser('chrome').build();

  const web = 'https://www.gamer.com.tw/';

  driver.get(web);
}

openCrawlerWeb();
