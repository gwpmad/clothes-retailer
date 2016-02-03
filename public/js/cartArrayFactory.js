(function() {

  function cartArray() {
    var arrayOfItems = [];

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

    return {
      getArray: getArray,
      addItemToArray: addItemToArray,
      removeItemFromArray: removeItemFromArray
    };
  }

  angular.module('ClothesRetailer')
    .factory('CartArray', cartArray);
})();
