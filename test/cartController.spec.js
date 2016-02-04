describe('CartController', function() {
  var clothingItem = {
    "productName": "Suede Shoes, Blue",
    "category": "Women's Footwear",
    "price": 42.00,
    "quantityInStock": 4,
    "isFootwear": true
  },clothingItemTwo = {
    "productName": "Flip Flops, Blue",
    "category": "Men’s Footwear",
    "price": 19.00,
    "quantityInStock": 0,
    "isFootwear": true
  },cartArrayMock,clothesMock,lowestAmountForFifteenPoundVoucher = 75.01;

  beforeEach(module('ClothesRetailer'));

  beforeEach(function() {
    cartArrayMock = jasmine.createSpyObj('cartArrayMock', ['addItemToArray',
    'removeItemFromArray','getArray','calculateSubtotal','calculateTotal',
    'changeDiscountTotal','footwearInCart','reduceQuantityOfItem']);

    clothesMock = jasmine.createSpyObj('clothesMock', ['reduceQuantityOfItem',
    'increaseQuantityOfItem','changeDiscountTotal']);

    voucherMock = jasmine.createSpyObj('voucherMock', ['canApplyFivePoundVoucher',
    'canApplyTenPoundVoucher','canApplyFifteenPoundVoucher',
    'applyTenPoundVoucher','applyFifteenPoundVoucher']);

    voucherMock.canApplyFivePoundVoucher.and.callFake(function() {
      return true;
    });

    voucherMock.canApplyTenPoundVoucher.and.callFake(function() {
      return true;
    });

    voucherMock.canApplyFifteenPoundVoucher.and.callFake(function() {
      return true;
    });

    cartArrayMock.calculateSubtotal.and.callFake(function() {
      return lowestAmountForFifteenPoundVoucher;
    });

    module({
      CartArray: cartArrayMock,
      Clothes: clothesMock,
      Voucher: voucherMock
    });
  });

  beforeEach(inject(function($controller) {
    ctrl = $controller('CartController',['Voucher','CartArray','Clothes']);
  }));

  it('should return the array of clothes from the CartArray factory', function() {
    ctrl.getCartArrayFromFactory();
    expect(cartArrayMock.getArray).toHaveBeenCalled();
  });

  it('should add an item to the array in the CartArray factory', function() {
    ctrl.addItemToCartArray(clothingItem);
    expect(cartArrayMock.addItemToArray).toHaveBeenCalledWith(clothingItem);
  });

  it('should not add an item to the CartArray array if it is out of stock', function() {
    ctrl.addItemToCartArray(clothingItemTwo);
    expect(cartArrayMock.addItemToArray).not.toHaveBeenCalled();
    expect(cartArrayMock.reduceQuantityOfItem).not.toHaveBeenCalledWith();

  });

  it('should remove an item from the array in the CartArray factory', function() {
    ctrl.removeItemFromCartArray(clothingItem);
    expect(cartArrayMock.removeItemFromArray).toHaveBeenCalledWith(clothingItem);
  });

  it('should call reduceQuantityOfItem when adding an item to the cart', function() {
    ctrl.addItemToCartArray(clothingItem);
    expect(clothesMock.reduceQuantityOfItem).toHaveBeenCalledWith(clothingItem);
  });

  it('should call increaseQuantityOfItem when removing an item from the cart', function() {
    ctrl.removeItemFromCartArray(clothingItem);
    expect(clothesMock.increaseQuantityOfItem).toHaveBeenCalledWith(clothingItem);
  });

  it('should fetch the subtotal from the cartArray Factory', function(){
    ctrl.getSubtotalFromFactory();
    expect(cartArrayMock.calculateSubtotal).toHaveBeenCalled();
  });

  it('should fetch the total (including discount) from the cartArray Factory', function() {
    ctrl.getTotalFromFactory();
    expect(cartArrayMock.calculateTotal).toHaveBeenCalled();
  });

  describe('Using vouchers', function() {
    it('applies the five pound voucher if it has not yet been applied', function(){
      ctrl.applyFivePoundVoucher();
      expect(voucherMock.canApplyFivePoundVoucher).toHaveBeenCalled();
      expect(cartArrayMock.changeDiscountTotal).toHaveBeenCalledWith(5);
    });

    it('applies the ten pound voucher if it has not yet been applied and the total is over £50', function() {
      ctrl.applyTenPoundVoucher();
      expect(voucherMock.canApplyTenPoundVoucher).toHaveBeenCalled();
      expect(voucherMock.applyTenPoundVoucher).toHaveBeenCalled();
      expect(cartArrayMock.changeDiscountTotal).toHaveBeenCalledWith(10);
    });

    it('does not apply the ten pound voucher if the total is not over £50', function() {
      cartArrayMock.calculateSubtotal.and.callFake(function() {
        return 50.00;
      });
      expect(cartArrayMock.changeDiscountTotal).not.toHaveBeenCalled();
    });

    it('still applies the ten pound voucher when the other two have been called', function() {
      ctrl.applyFivePoundVoucher();
      ctrl.applyFifteenPoundVoucher();
      ctrl.applyTenPoundVoucher();
      expect(cartArrayMock.changeDiscountTotal).toHaveBeenCalledWith(10);
    });

    it('applies the fifteen pound voucher if it has not yet been applied and conditions are met', function(){
      cartArrayMock.footwearInCart.and.callFake(function() {
        return true;
      });
      ctrl.applyFifteenPoundVoucher();
      expect(voucherMock.canApplyFifteenPoundVoucher).toHaveBeenCalled();
      expect(voucherMock.applyFifteenPoundVoucher).toHaveBeenCalled();
      expect(cartArrayMock.changeDiscountTotal).toHaveBeenCalledWith(15);
    });

    it('still applies the fifteen pound voucher when the other two have been called', function() {
      cartArrayMock.footwearInCart.and.callFake(function() {
        return true;
      });
      ctrl.applyFivePoundVoucher();
      ctrl.applyTenPoundVoucher();
      ctrl.applyFifteenPoundVoucher();
      expect(cartArrayMock.changeDiscountTotal).toHaveBeenCalledWith(15);
    });

    it('does not apply the fifteen pound voucher if no footwear item has been added', function() {
      ctrl.applyFifteenPoundVoucher();
      expect(cartArrayMock.changeDiscountTotal).not.toHaveBeenCalled();
    });

    it('does not apply the fifteen pound voucher if the total is not over £75', function() {
      cartArrayMock.footwearInCart.and.callFake(function() {
        return true;
      });
      cartArrayMock.calculateSubtotal.and.callFake(function() {
        return 75;
      });
      expect(cartArrayMock.changeDiscountTotal).not.toHaveBeenCalled();
    });

    describe('Trying to use vouchers a second time', function() {
      beforeEach(function(){
        voucherMock.canApplyFivePoundVoucher.and.callFake(function() {
          return false;
        });

        voucherMock.canApplyTenPoundVoucher.and.callFake(function() {
          return false;
        });

        voucherMock.canApplyFifteenPoundVoucher.and.callFake(function() {
          return false;
        });

        cartArrayMock.footwearInCart.and.callFake(function() {
          return true;
        });
      });

      it('does not apply the five pound voucher if it has been applied', function() {
        ctrl.applyFivePoundVoucher();
        expect(cartArrayMock.changeDiscountTotal).not.toHaveBeenCalled();
      });

      it('does not apply the ten pound voucher if it has been applied', function() {
        ctrl.applyTenPoundVoucher();
        expect(cartArrayMock.changeDiscountTotal).not.toHaveBeenCalled();
      });

      it('does not apply the fifteen pound voucher if it has been applied', function() {
        ctrl.applyFifteenPoundVoucher();
        expect(cartArrayMock.changeDiscountTotal).not.toHaveBeenCalled();
      });
    });

  });
});
