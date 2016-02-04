describe('factory: CartArray', function() {
  var cartArray, item, itemTwo, discount;

  beforeEach(module('ClothesRetailer'));

  beforeEach(inject(function(CartArray) {
    cartArray = CartArray;
  }));

  beforeEach(function() {
    item = {
      "productName": "Almond Toe Court Shoes, Patent Black",
      "category": "Women's Footwear",
      "price": 99.00,
      "quantityInStock": 5,
      "isFootwear": true
    };
    itemTwo = {
      "productName": "Fine Stripe Short Sleeve Shirt, Grey",
      "category": "Men’s Casualwear",
      "price": 49.99,
      "quantityInStock": 9,
      "isFootwear": false
    };
    discount = 5;
  });

  it('starts with an empty array of items', function() {
    expect(cartArray.getArray()).toEqual([]);
  });

  describe('adding and removing items', function() {

    beforeEach(function() {
      cartArray.addItemToArray(item);
    });

    it('allows adding of items to the array', function() {
      expect(cartArray.getArray()).toEqual([item]);
    });

    it('allows removal of items from the array', function() {
      cartArray.removeItemFromArray(item);
      expect(cartArray.getArray()).toEqual([]);
    });

    it('it does not remove the wrong item from the array', function() {
      cartArray.addItemToArray(itemTwo);
      cartArray.removeItemFromArray(item);
      expect(cartArray.getArray()).toEqual([itemTwo]);
    });
  });

  describe('totalling', function() {
    beforeEach(function() {
      cartArray.addItemToArray(item);
      cartArray.addItemToArray(itemTwo);
    });

    it('calculates the correct subtotal based upon the items in the cart', function() {
      expect(cartArray.calculateSubtotal()).toEqual(
        item.price + itemTwo.price);
    });

    it('calculates the total including discount', function() {
      cartArray.changeDiscountTotal(discount);
      expect(cartArray.calculateTotal()).toEqual(
        item.price + itemTwo.price - 5
      );
    });
  });

  describe('changing the discount total', function() {
    it('changes the discount total', function() {
      cartArray.changeDiscountTotal(discount);
      expect(cartArray.getDiscountTotal()).toEqual(discount);
    });
  });

  describe('detecting footwear in the array', function() {
    it('footwearInCart returns true if there is at least one item of footwear', function() {
      cartArray.addItemToArray(item);
      expect(cartArray.footwearInCart()).toEqual(true);
    });

    it('footwearInCart returns false if there are no items of footwear', function() {
      cartArray.addItemToArray(itemTwo);
      expect(cartArray.footwearInCart()).toEqual(false);
    });
  });
});
