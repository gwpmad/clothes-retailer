(function() {

  function cartArray() {
    var arrayOfItems = [],
    discountTotal = 0;

    function getArray () {
      return arrayOfItems;
    }

    function addItemToArray(item) {
      arrayOfItems.push(item);
    }

    function removeItemFromArray(item) {
      var index = arrayOfItems.indexOf(item);

      if (index > -1) {
        arrayOfItems.splice(index, 1);
      }
    }

    function calculateSubtotal() {
      var sum = 0;
      for(i = 0; i < arrayOfItems.length; i++) {
        sum += arrayOfItems[i].price;
      }
      return sum;
    }

    function getDiscountTotal() {
      return discountTotal;
    }

    function changeDiscountTotal(amount) {
      discountTotal += amount;
    }

    function calculateTotal() {
      return calculateSubtotal() - discountTotal;
    }

    function footwearInCart() {
      for(i = 0; i < arrayOfItems.length; i++) {
        if(arrayOfItems[i].isFootwear) {
          return true;
        }
      }
      return false;
    }

    return {
      getArray: getArray,
      addItemToArray: addItemToArray,
      removeItemFromArray: removeItemFromArray,
      calculateSubtotal: calculateSubtotal,
      getDiscountTotal: getDiscountTotal,
      changeDiscountTotal: changeDiscountTotal,
      calculateTotal: calculateTotal,
      footwearInCart: footwearInCart
    };
  }

  angular.module('ClothesRetailer')
    .factory('CartArray', cartArray);
})();
