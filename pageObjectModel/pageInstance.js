const InventoryPage = require("./InventoryPage");
const CartPage = require("./cartPage");
const LoginPage = require("./loginPage");

const PageEnum = {
  LOGIN_PAGE: 'LOGIN_PAGE',
  CART_PAGE: 'CART_PAGE',
  INVENTROY_PAGE: 'INVENTORY_PAGE',
};

class PageInstanceFactory {

  static getPageInstance(pageEnum) {
    let result = null;
    switch (pageEnum) {
      case PageEnum.LOGIN_PAGE:
        result = new LoginPage();
        break;
      case PageEnum.INVENTROY_PAGE:
        result = new InventoryPage();
        break;
      case PageEnum.CART_PAGE:
        result = new CartPage();
        break;
      default:
        throw new Error('Unknown page type');
    }
    return result;
  }

}

module.exports = PageInstanceFactory;