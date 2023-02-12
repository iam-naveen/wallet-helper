const webdriver = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const chromedriver = require("chromedriver");

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());
const options = new chrome.Options();
options.addArguments("--headless");

const Key = webdriver.Key;
const By = webdriver.By;
const until = webdriver.until;

export default function handler(req, res) {
  const driver = new Builder()
    .forBrowser("chrome")
    .setChromeOptions(options)
    .build();

  res.status(200).json({ message: "Yes!!" });
}
