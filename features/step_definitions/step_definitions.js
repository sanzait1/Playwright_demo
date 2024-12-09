const config = require('../../playwright.config');
const { Given, When, Then } = require('@cucumber/cucumber');
const PageInstanceFactory = require('../../pageObjectModel/pageInstance');

const { expect } = require('@playwright/test');
const BasePage = require('../../pageObjectModel/BasePage');

const value_map = new Map();

Given('User go to the URL', async ()=> {
    await global.page.goto('https://www.saucedemo.com/');
});

Then('I wait for 3 seconds', async ()=> {
  let basepage = new BasePage();
  await basepage.pause()
})

When('User enter {string} into {string} in {string}', async function (value, locatorName, pageName){
    try{
        const basePage = PageInstanceFactory.getPageInstance(pageName);
        const locator = Reflect.get(basePage, locatorName);
        await basePage.enterText(locator, value);
        console.log("entered now")
    } catch(error){
      console.error(`Step failed due to:`, error)
      throw new Error(`Doing Exit`);
    }

  });

When('User click {string} in {string}', async function (locatorName, pageName){
  try {
      const basePage = PageInstanceFactory.getPageInstance(pageName);
      const locator = Reflect.get(basePage, locatorName);
     await basePage.click(locator);
      console.log("clicked now")
  } 
  catch (error){
      console.error(`Step failed due to:`, error)
      throw new Error(`Doing Exit`);
    }
});

Then('User should see {string} in {string}', async function (locatorName, pageName){
  try {
      const basePage = PageInstanceFactory.getPageInstance(pageName);
      const locator = Reflect.get(basePage, locatorName);
      const elementCount = await basePage.getLocatorCount(locator);
      expect(elementCount).toHaveCount(1);
  } 
  catch (error){
      console.error(`Step failed due to:`, error)
      throw new Error(`Doing Exit`);
    }
});

Then('User extract {string} value within {string} in {string}', async function (locatorName, mapKey, pageName){
  try {
      const basePage = PageInstanceFactory.getPageInstance(pageName);
      const textLocator = Reflect.get(basePage, locatorName);
      const text = await basePage.getText(textLocator)
      //const text = await locator.innerText();
      value_map.set(mapKey, text)
  } 
  catch (error){
      console.error(`Step failed due to:`, error)
      throw new Error(`Doing Exit`);
    }
});


Then('value comparison between {string} and {string} should be equal', async function (keyOne, keyTwo){
  try {
    expect(value_map.get(keyOne)).to.be.equal(value_map.get(keyTwo), "values should be equal");
  } 
  catch (error){
      console.error(`Step failed due to:`, error)
    }
});

