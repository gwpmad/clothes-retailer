(function() {

  function cartController(CartArray, Clothes, Voucher) {
    self = this;

    self.getCartArrayFromFactory = function() {
      return CartArray.getArray();
    };

    self.addItemToCartArray = function(item) {
      if(item.quantityInStock > 0){
        CartArray.addItemToArray(item);
        Clothes.reduceQuantityOfItem(item);
      } else {
        alert('This item is out of stock');
      }
    };

    self.removeItemFromCartArray = function(item) {
      CartArray.removeItemFromArray(item);
      Clothes.increaseQuantityOfItem(item);
    };

    self.getSubtotalFromFactory = function() {
      return CartArray.calculateSubtotal();
    };

    self.getTotalFromFactory = function() {
      return CartArray.calculateTotal();
    };

    self.applyFivePoundVoucher = function() {
      if (Voucher.canApplyFivePoundVoucher()) {
        CartArray.changeDiscountTotal(5);
      } else {
        alert('You have already used this voucher');
      }
    };

    self.applyTenPoundVoucher = function() {
      if (Voucher.canApplyTenPoundVoucher() &&
        self.getSubtotalFromFactory() > 50) {
        CartArray.changeDiscountTotal(10);
        Voucher.applyTenPoundVoucher();
      } else {
        if (self.getSubtotalFromFactory() <= 50) {
          alert('You must spend over £50 to use this voucher');
        } else {
          alert('You have already used this voucher');
        }
      }
    };

    self.applyFifteenPoundVoucher = function() {
      if (Voucher.canApplyFifteenPoundVoucher() &&
        self.getSubtotalFromFactory() > 75 &&
        CartArray.footwearInCart()) {
        CartArray.changeDiscountTotal(15);
        Voucher.applyFifteenPoundVoucher();
      }
      else if (!Voucher.canApplyFifteenPoundVoucher()) {
        alert('You have already used this voucher');
      }
      else if(self.getSubtotalFromFactory() <= 75) {
        alert('You must spend over £75 to use this voucher');
      }
      else {
        alert('You must have footwear in your cart to use this voucher');
      }
    };
  }

  angular.module('ClothesRetailer')
    .controller('CartController', ['CartArray', 'Clothes', 'Voucher', cartController]);
})();
