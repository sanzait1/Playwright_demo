const BasePage = require('./BasePage');

class CartPage extends BasePage {

    constructor() {
        super();
        this.swagLabs_title = '.header_label .app_logo';
        this.firstItemName = '[class="inventory_item_name"]:nth-of-type(1)'
        this.firstItemPrice = '[class="inventory_item_price"]:nth-of-type(1)'
    }
}

module.exports = CartPage;