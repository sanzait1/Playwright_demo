Background: This is unified framework to cover both UI and api tests. For UI playwright tools been used. For api testing, axios library been used.


===> Initial steps to configure playwright in your local system: https://playwright.dev/docs/intro

====> Technologies used in the repo:

a. For test case writing: Cucumber
   To setup cucumber, Please refer: https://medium.com/@MoodyJester/playwright-ts-cucumber-in-visual-studio-code-86cc3bdb19ca

b. To implement the execution, I am using POM. Where BasePage.js contains all repeated actions performed in the browser like type, click, extract.
   For each page We need to create page class i.e. Login page, Inventory page etc. All the page classes should extend the BasePage class to avoid redundant and maintenable code.


=====>  Targets been set in package.json (alternative)

=====>  Committed the package-lock.json to have track of package version and will help in smooth run across the timelines

=====>  Command to run the UI tests: npx cucumber-js --require ./features/step_definitions/step_definitions.js --require ./features/support/hook.js


=====>  Command to run the api tests: npx cucumber-js-api --require ./features/step_definitions/get_api_steps.js 

