
class BasePage {
    
    async enterText(locator, text){
        try{
            console.log("Pausing for 5 seconds...");
            const field = await global.page.locator(locator)
            console.log("created field")
            //await field.waitFor({ state: 'visible' });
            console.log("element is visible")
            await field.click()
            await field.fill(text)
            //await global.page.locator(locator).fill(text);
            console.log("entered the text")
        }catch (error) {
            // Log the error and throw it, or return a default value
            console.error(`Failed to enter text against locator: ${locator}`, error)
            throw new Error(`Error entering text for locator: ${locator}`);
        }
    }

    async getText(locator) {
        try {
            // Attempt to get the text using innerText()
            const field = await global.page.locator(locator).nth(0);
            const text = await field.innerText();
            return text; // Return the retrieved text
        } catch (error) {
            // Log the error and throw it, or return a default value
            console.error(`Failed to get text for locator: ${locator}`, error);
            throw new Error(`Error retrieving text for locator: ${locator}`);
        }
    }

    async click(locator) {
        try {
            // Attempt to get the text using innerText()
            const field = await global.page.locator(locator)
            await field.click()
        } catch (error) {
            // Log the error and throw it, or return a default value
            console.error(`Failed to click for locator: ${locator}`, error)
            throw new Error(`Error clicking against locator: ${locator}`)
        }
    }

    async getLocatorCount(locator){
        try {
            // Attempt to get the text using innerText()
            const field = await global.page.locator(locator)
            return await field.count()
        } catch (error) {
            // Log the error and throw it, or return a default value
            console.error(`Failed to get count for locator: ${locator}`, error)
            throw new Error(`Error clicking against locator: ${locator}`)
        }
    }

    async waitForElement(locator) {
        // Assertion for an web element present on the Homepage (User comes at HomePage after successful login)
        await page.locator.waitFor({ state: 'attached'})
      }
   
}


module.exports = BasePage;