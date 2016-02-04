describe('Voucher Factory', function(){

  beforeEach(module('ClothesRetailer'));

  beforeEach(inject(function(Voucher) {
    voucher = Voucher;
  }));

  describe('five pound voucher', function() {
    it('returns true if the voucher has yet to be applied', function(){
      expect(voucher.canApplyFivePoundVoucher()).toEqual(true);
    });

    it('returns false if the voucher has already been applied', function(){
      voucher.canApplyFivePoundVoucher();
      expect(voucher.canApplyFivePoundVoucher()).toEqual(false);
    });
  });

  describe('ten pound voucher', function() {
    it('returns true if the voucher has yet to be applied', function(){
      expect(voucher.canApplyTenPoundVoucher()).toEqual(true);
    });

    it('returns false if the voucher has already been applied', function(){
      voucher.applyTenPoundVoucher();
      expect(voucher.canApplyTenPoundVoucher()).toEqual(false);
    });
  });

  describe('fifteen pound voucher', function() {
    it('returns true if the voucher has yet to be applied', function(){
      expect(voucher.canApplyFifteenPoundVoucher()).toEqual(true);
    });

    it('returns false if the voucher has already been applied', function(){
      voucher.applyFifteenPoundVoucher();
      expect(voucher.canApplyFifteenPoundVoucher()).toEqual(false);
    });
  });



});
