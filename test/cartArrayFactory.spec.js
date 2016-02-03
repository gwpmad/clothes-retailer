describe('factory: CartArray', function(){
  var cartArray,item,itemTwo;

  beforeEach(module('ClothesRetailer'));

  beforeEach(inject(function(CartArray){
    cartArray = CartArray;
  }));

  beforeEach(function(){
    item = {
      "productName": "Almond Toe Court Shoes, Patent Black",
      "category": "Women's Footwear",
      "price": 99.00,
      "quantityInStock": 5
    };
    itemTwo = {
      "productName": "Fine Stripe Short Sleeve Shirt, Grey",
      "category": "Men’s Casualwear",
      "price": 49.99,
      "quantityInStock": 9
    };
  });

  it('starts with an empty array of items', function(){
    expect(cartArray.getArray()).toEqual([]);
  });

  describe('adding and removing items', function(){

    beforeEach(function(){
      cartArray.addItemToArray(item);
    });

    it('allows adding of items to the array', function(){
      expect(cartArray.getArray()).toEqual([item]);
    });

    it('allows removal of items from the array', function(){
      cartArray.removeItemFromArray(item);
      expect(cartArray.getArray()).toEqual([]);
    });

    it('it does not remove the wrong item from the array', function(){
      cartArray.addItemToArray(itemTwo);
      cartArray.removeItemFromArray(item);
      expect(cartArray.getArray()).toEqual([itemTwo]);
    });
  });
});
