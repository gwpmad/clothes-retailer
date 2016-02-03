describe('CartController', function() {
  var clothingItem = {
    "productName": "Suede Shoes, Blue",
    "category": "Women's Footwear",
    "price": 42.00,
    "quantityInStock": 4
  };

  beforeEach(module('ClothesRetailer'));

  beforeEach(function() {
    cartArrayMock = jasmine.createSpyObj('cartArrayMock', ["addItemToArray",
    "removeItemFromArray","getArray"]);
    
    module({
      CartArray: cartArrayMock
    });
  });

  beforeEach(inject(function($controller) {
    ctrl = $controller('CartController',['CartArray']);
  }));

  it('should return the array of clothes from the CartArray factory', function() {
    ctrl.getCartArrayFromFactory();
    expect(cartArrayMock.getArray).toHaveBeenCalled();
  });

  it('should add an item to the array in the CartArray factory', function() {
    ctrl.addItemToCartArray(clothingItem);
    expect(cartArrayMock.addItemToArray).toHaveBeenCalledWith(clothingItem);
  });

  it('should remove an item from the array in the CartArray factory', function() {
    ctrl.removeItemFromCartArray(clothingItem);
    expect(cartArrayMock.removeItemFromArray).toHaveBeenCalledWith(clothingItem);
  });
});
