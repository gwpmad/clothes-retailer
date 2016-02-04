(function() {

  function clothes() {
    var clothesCatalogue = [{
      "productName": "Almond Toe Court Shoes, Patent Black",
      "category": "Women's Footwear",
      "price": 99.00,
      "quantityInStock": 5
    }, {
      "productName": "Suede Shoes, Blue",
      "category": "Women's Footwear",
      "price": 42.00,
      "quantityInStock": 4
    }, {
      "productName": "Leather Driver Saddle Loafers, Tan",
      "category": "Men’s Footwear",
      "price": 34.00,
      "quantityInStock": 12
    }, {
      "productName": "Flip Flops, Red",
      "category": "Men’s Footwear",
      "price": 19.00,
      "quantityInStock": 6
    }, {
      "productName": "Flip Flops, Blue",
      "category": "Men’s Footwear",
      "price": 19.00,
      "quantityInStock": 0
    }, {
      "productName": "Gold Button Cardigan, Black",
      "category": "Women’s Casualwear",
      "price": 167.00,
      "quantityInStock": 6
    }, {
      "productName": "Cotton Shorts, Medium Red",
      "category": "Women’s Casualwear",
      "price": 30.00,
      "quantityInStock": 5
    }, {
      "productName": "Fine Stripe Short Sleeve Shirt, Grey",
      "category": "Men’s Casualwear",
      "price": 49.99,
      "quantityInStock": 9
    }, {
      "productName": "Fine Stripe Short Sleeve Shirt, Green",
      "category": "Men’s Casualwear",
      "price": 39.99,
      "quantityInStock": 3
    }, {
      "productName": "Sharkskin Waistcoat, Charcoal",
      "category": "Men’s Formalwear",
      "price": 75.00,
      "quantityInStock": 2
    }, {
      "productName": "Lightweight Patch Pocket Blazer, Deer",
      "category": "Men’s Formalwear",
      "price": 175.50,
      "quantityInStock": 1
    }, {
      "productName": "Bird Print Dress, Black",
      "category": "Women’s Formalwear",
      "price": 270.00,
      "quantityInStock": 10
    }, {
      "productName": "Mid Twist Cut-Out Dress, Pink",
      "category": "Women’s Formalwear",
      "price": 540.00,
      "quantityInStock": 5
    } ];

    function getClothesCatalogue() {
      return clothesCatalogue;
    }

    function reduceQuantityOfItem(item) {
      var index = _findIndexInClothesCatalogue(item.productName);
      clothesCatalogue[index].quantityInStock -= 1;
    }

    function increaseQuantityOfItem(item) {
      var index = _findIndexInClothesCatalogue(item.productName);
      clothesCatalogue[index].quantityInStock +=1;
    }

    function _findIndexInClothesCatalogue(productName) {
      for(i = 0; i < clothesCatalogue.length; i++) {
        if(clothesCatalogue[i].productName === productName) {
          return i;
        }
      }
    }

    return {
      getClothesCatalogue: getClothesCatalogue,
      reduceQuantityOfItem: reduceQuantityOfItem,
      increaseQuantityOfItem: increaseQuantityOfItem
    };
  }

  angular.module('ClothesRetailer')
    .factory('Clothes', [clothes]);
})();
