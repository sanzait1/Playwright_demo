
const BasePage = require('./BasePage');

class LoginPage extends BasePage{

    constructor() {
        super();
        this.usernameField = '[data-test="username"]'; // Replace with the actual CSS selector or XPath
        this.passwordField = '[data-test="password"]'; // Replace with the actual CSS selector or XPath
        this.loginButton = '#login-button'; // Replace with the actual CSS selector or XPath
    }
       

}

module.exports = LoginPage;