(function(){
  function catalogueController(Clothes){
    var self = this;

    self.getClothesCatalogue = function(){
      return Clothes.getClothesCatalogue();
    };
  }

  angular.module('ClothesRetailer')
    .controller('CatalogueController',['Clothes',catalogueController]);
})();
