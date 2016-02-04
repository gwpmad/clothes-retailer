(function() {
  function voucher() {
    var fivePoundVoucherApplied = false,
        tenPoundVoucherApplied = false,
        fifteenPoundVoucherApplied = false;


    canApplyFivePoundVoucher = function() {
      if (!fivePoundVoucherApplied) {
        fivePoundVoucherApplied = true;
        return true;
      } else {
        return false;
      }
    };

    canApplyTenPoundVoucher = function() {
      if (!tenPoundVoucherApplied) {
        return true;
      } else {
        return false;
      }
    };


    canApplyFifteenPoundVoucher = function() {
      if (!fifteenPoundVoucherApplied) {
        return true;
      } else {
        return false;
      }
    };

    applyTenPoundVoucher = function() {
      tenPoundVoucherApplied = true;
    };

    applyFifteenPoundVoucher = function() {
      fifteenPoundVoucherApplied = true;
    };

    return {
      canApplyFivePoundVoucher: canApplyFivePoundVoucher,
      canApplyTenPoundVoucher: canApplyTenPoundVoucher,
      canApplyFifteenPoundVoucher: canApplyFifteenPoundVoucher,
      applyTenPoundVoucher: applyTenPoundVoucher,
      applyFifteenPoundVoucher: applyFifteenPoundVoucher
    };
  }


  angular.module('ClothesRetailer')
    .factory('Voucher', voucher);
})();
