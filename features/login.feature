
Feature: Perform sanity scenarios for the website

    As a user
    I want to login into application, extract the details for first item, add it to the cart and logout 

    Scenario: Peform login, add to cart and logout
      Given User go to the URL
      When User enter "standard_user" into "usernameField" in "LOGIN_PAGE"
      When User enter "secret_sauce" into "passwordField" in "LOGIN_PAGE"
      When User click "loginButton" in "LOGIN_PAGE"
      Then User should see "swagLabs_title" in "INVENTORY_PAGE"
      When User extract "firstItemName" value within "InventoryItemValue" in "INVENTORY_PAGE"
      When User extract "firstItemPrice" value within "InventoryPriceValue" in "INVENTORY_PAGE"
      When User click "firstItemAddToCar" in "INVENTORY_PAGE" 
      When User click "addToCart" in "INVENTORY_PAGE"
      When User extract "firstItemName" value within "CartItemValue" in "CART_PAGE"
      When User extract "firstItemPrice" value within "CartPriceValue" in "CART_PAGE"
      Then value comparison between "InventoryItemValue" and "CartItemValue" should be equal
      Then value comparison between "InventoryPriceValue" and "CartPriceValue" should be equal
      When User click "menu_btn" in "INVENTORY_PAGE"
      #When User should see "menu_bar" in "InventoryPage" as "Visible"
      When User click "logout" in "INVENTORY_PAGE"
      Then User should see "standard_user" in "LOGIN_PAGE" 



