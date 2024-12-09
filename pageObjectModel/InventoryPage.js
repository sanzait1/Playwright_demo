const BasePage = require('./BasePage');

class InventoryPage extends BasePage{

    constructor() {
        super();
        this.swagLabs_title = '.header_label .app_logo'; 
        this.firstItemName = '.inventory_item_label .inventory_item_name'; 
        this.firstItemPrice = '.pricebar .inventory_item_price'; 
        this.firstItemAddToCar = '[data-test="add-to-cart-sauce-labs-backpack"]:nth-child(2)'
        this.addToCart = '[data-test="shopping-cart-link"]'
        this.menu_btn = '#react-burger-menu-btn'
        this.menu_bar = '[class="bm-menu-wrap"]'
        this.logout = '#logout_sidebar_link'
    }
       

}

module.exports = InventoryPage;