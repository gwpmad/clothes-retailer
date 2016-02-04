Clothes Retailer
===============

This is an online store that sells an array of different clothes. Users can select items of clothing, add them to their cart, and make use of vouchers to lower the total price.

Here are the user stories that the application follows:

```
As a User I can add a product to my shopping cart.

As a User I can remove a product from my shopping cart.

As a User I can view the total price for the products in my shopping cart.

As a User I can apply a voucher to my shopping cart.

As a User I can view the total price for the products in my shopping cart
with discounts applied.

As a User I am alerted when I apply an invalid voucher to my shopping
cart.

As a User I am unable to add Out of Stock products to the shopping cart
```

Approach
--------
I built the application using Angular JavaScript in tandem with HTML. My main objective was to ensure that the code behind the application was loosely-coupled, extensible and thoroughly tested. Here are some points:

* All of the user stories are covered in the application's logic.
* The development of the application was entirely test-driven. As a result it includes around 40 unit tests (all of which pass) written using Karma-Jasmine, along with front end Protractor feature tests.
* I endeavoured to follow best practices in my Angular code. Each declaration (modules, controllers, factories) is wrapped in an Immediately Invoked Function Expression, the injection of $scope is avoided and controllers are referred to within the HTML using a shortening (via the 'as' syntax).
* Concerns are separated within the code; to that end, I used the following:
  * Two controllers, one to communicate with the clothing catalogue and one to manage the user's cart.
  * Three factories, one to hold data about the clothes available, one to store the array of items that have been added to the cart and one to handle voucher logic.
* CSS is not heavily used as I spent the majority of my time working to ensure that the back-end logic was secure and tested. However, I used Bootstrap to add responsiveness and a clear user interface.
* The application can be locally hosted using an Express server.

How to run
----------
Please follow these steps to use the application:

1. Fork this repository and then clone it using `git clone <url>`
2. cd into the project
3. Run `npm install` and `bower install`
4. Run `npm start` to serve the application locally, using NodeJS
5. Visit `http://localhost:8080/` to use the application

To run the unit tests, please use the command `npm test`.

To run the Protractor feature tests please run `webdriver-manager update`, `webdriver-manager start`, and then (in a new command line tab) `protractor test/e2e/conf.js`.
