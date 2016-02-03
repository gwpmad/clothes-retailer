describe('CatalogueController', function() {

  beforeEach(module('ClothesRetailer'));

  beforeEach(inject(function($controller){
    ctrl = $controller('CatalogueController');
  }));

  it('gets the clothes catalogue from the Clothes factory',function(){
    expect(typeof ctrl.getClothesCatalogue()).toEqual('object');
  });
});
