# Fruit Market

The Fruit Market app shows a simple use of apps as well as component tests.

- Unit Tests
  - `tests` folder
  - `calculatorFunctions.test`
- Component Tests
  - `App.test` - "Smoke test"
  - `Layout.test` - Test that the title of the application shows up
  - `ProductList.test` - Shows that Fruits show up in the product list
  - `Cart.test` 
    - Show that `Cart` renders and the text element is an `h2`
    - Show that `Cart is empty` shows up if there are no products in the cart
  - `CartListing.test` - Test the display of cart items
  - `QuantityNumberInput.test` - Shows how to mock functions and check that they have been called