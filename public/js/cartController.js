(function(){

  function cartController(CartArray){
    self = this;

    self.getCartArrayFromFactory = function(){
      return CartArray.getArray();
    };

    self.addItemToCartArray = function(item){
      CartArray.addItemToArray(item);
    };

    self.removeItemFromCartArray = function(item){
      CartArray.removeItemFromArray(item);
    };
  }

  angular.module('ClothesRetailer')
    .controller('CartController',['CartArray',cartController]);
})();
