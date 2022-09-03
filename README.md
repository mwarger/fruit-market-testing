# Fruit Market

The Fruit Market app shows a simple use of unit tests as well as component tests.

This app comes in a TypeScript version and a JavaScript version.  The main (`master`) branch is written in TypeScript and the `js` branch is the JavaScript version.

## Running the App

To install the dependencies, run `npm install`

To run the app, run `npm run dev`

To run the test, run `npm test`

## Testing

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