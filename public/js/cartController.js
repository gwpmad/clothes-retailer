(function(){

  function cartController(CartArray,Clothes){
    self = this;

    self.getCartArrayFromFactory = function() {
      return CartArray.getArray();
    };

    self.addItemToCartArray = function(item){
      CartArray.addItemToArray(item);
      Clothes.reduceQuantityOfItem(item);
    };

    self.removeItemFromCartArray = function(item){
      CartArray.removeItemFromArray(item);
      Clothes.increaseQuantityOfItem(item);
    };
  }

  angular.module('ClothesRetailer')
    .controller('CartController',['CartArray','Clothes',cartController]);
})();
