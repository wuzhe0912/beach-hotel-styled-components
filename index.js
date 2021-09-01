require('dotenv').config();
const webdriver = require('selenium-webdriver');

async function openCrawlerWeb() {
  let driver;

  try {
    // build browser type
    driver = await new webdriver.Builder().forBrowser('chrome').build();
  } catch (err) {
    console.log('錯誤:', err);
    return;
  }

  const gamer = 'https://www.gamer.com.tw/';
  driver.get(gamer);
}

openCrawlerWeb();
