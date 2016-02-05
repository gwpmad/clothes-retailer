describe('To Do List', function() {

  var catalogueLength = 13,almondToeCourtShoesPrice = 99.00,
    addToCartButtonZero,removeFromCartButtonZero,catalogue,cart,previousQuantity,
    fivePoundVoucher,tenPoundVoucher,fifteenPoundVoucher;

  beforeEach(function() {
    browser.get('http://localhost:8080');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Clothes Retailer');
  });

  it('lists the expected number of repositories', function() {
    element.all(by.repeater('item in catalCtrl.getClothesCatalogue()')).then(function(items) {
      expect(items.length).toBe(catalogueLength);
    });
  });

  describe('adding and removing items from the cart', function() {
    beforeEach(function() {
      addToCartButtonZero = element(by.id('add-to-cart'));
      addToCartButtonZero.click();
      removeFromCartButtonZero = element(by.id('remove-from-cart'));
      cart = element.all(by.repeater('item in cartCtrl.getCartArrayFromFactory() track by $index'));
      quantityInStock = element(by.id('quantity-in-stock'));
      quantityInStock.getText().then(function(response) {
        previousQuantity = parseInt(response);
      subtotalPrice = element(by.id('subtotal-price'));
      });
    });

    it('adds an item of clothing to the cart', function() {
      cart.getText().then(function(response) {
          expect(response[0]).toContain('Almond Toe Court Shoes');
        });
    });

    it('removes an item of clothing from the cart', function() {
      removeFromCartButtonZero.click();
      cart.getText().then(function(response) {
        expect(response[0]).not.toContain('Almond Toe Court Shoes');
      });
    });

    it('reduces the quantity in stock when an item is added to the cart', function() {
      addToCartButtonZero.click();
      quantityInStock.getText().then(function(response) {
        expect(parseInt(response)).toEqual(previousQuantity - 1);
      });
    });

    it('increases the quantity in stock when an item is removed from the cart', function() {
      removeFromCartButtonZero.click();
      quantityInStock.getText().then(function(response) {
        expect(parseInt(response)).toEqual(previousQuantity + 1);
      });
    });

    it('displays the subtotal correctly', function() {
      subtotalPrice.getText().then(function(response) {
        expect(parseInt(response.substring(1))).toEqual(almondToeCourtShoesPrice);
      });
    });

    it('alters the subtotal correctly when the cart changes', function() {
      removeFromCartButtonZero.click();
      subtotalPrice.getText().then(function(response) {
        expect(parseInt(response.substring(1))).toEqual(0);
      });
    });
  });
});
