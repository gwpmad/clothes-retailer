describe('factory: Clothes', function(){
  var clothes,clothesCatalogue,item;

  beforeEach(module('ClothesRetailer'));

  beforeEach(inject(function(Clothes){
    clothes = Clothes;
  }));

  beforeEach(function(){
    clothesCatalogue = [{
      "productName": "Almond Toe Court Shoes, Patent Black",
      "category": "Women's Footwear",
      "price": 99.00,
      "quantityInStock": 5,
      "isFootwear": true
    }, {
      "productName": "Suede Shoes, Blue",
      "category": "Women's Footwear",
      "price": 42.00,
      "quantityInStock": 4,
      "isFootwear": true
    }, {
      "productName": "Leather Driver Saddle Loafers, Tan",
      "category": "Men’s Footwear",
      "price": 34.00,
      "quantityInStock": 12,
      "isFootwear": true
    }, {
      "productName": "Flip Flops, Red",
      "category": "Men’s Footwear",
      "price": 19.00,
      "quantityInStock": 6,
      "isFootwear": true
    }, {
      "productName": "Flip Flops, Blue",
      "category": "Men’s Footwear",
      "price": 19.00,
      "quantityInStock": 0,
      "isFootwear": true
    }, {
      "productName": "Gold Button Cardigan, Black",
      "category": "Women’s Casualwear",
      "price": 167.00,
      "quantityInStock": 6,
      "isFootwear": false
    }, {
      "productName": "Cotton Shorts, Medium Red",
      "category": "Women’s Casualwear",
      "price": 30.00,
      "quantityInStock": 5,
      "isFootwear": false
    }, {
      "productName": "Fine Stripe Short Sleeve Shirt, Grey",
      "category": "Men’s Casualwear",
      "price": 49.99,
      "quantityInStock": 9,
      "isFootwear": false
    }, {
      "productName": "Fine Stripe Short Sleeve Shirt, Green",
      "category": "Men’s Casualwear",
      "price": 39.99,
      "quantityInStock": 3,
      "isFootwear": false
    }, {
      "productName": "Sharkskin Waistcoat, Charcoal",
      "category": "Men’s Formalwear",
      "price": 75.00,
      "quantityInStock": 2,
      "isFootwear": false
    }, {
      "productName": "Lightweight Patch Pocket Blazer, Deer",
      "category": "Men’s Formalwear",
      "price": 175.50,
      "quantityInStock": 1,
      "isFootwear": false
    }, {
      "productName": "Bird Print Dress, Black",
      "category": "Women’s Formalwear",
      "price": 270.00,
      "quantityInStock": 10,
      "isFootwear": false
    }, {
      "productName": "Mid Twist Cut-Out Dress, Pink",
      "category": "Women’s Formalwear",
      "price": 540.00,
      "quantityInStock": 5,
      "isFootwear": false
    } ];
  });

  beforeEach(function(){
    item = {
      "productName": "Almond Toe Court Shoes, Patent Black",
      "category": "Women's Footwear",
      "price": 99.00,
      "quantityInStock": 5
    };
  });

  it('returns the catalogue of clothes', function(){
    expect(clothes.getClothesCatalogue()).toEqual(clothesCatalogue);
  });

  it('can reduce the quantity in stock of a particular item', function() {
    clothes.reduceQuantityOfItem(item);
    expect(clothes.getClothesCatalogue()[0].quantityInStock).toEqual(4);
  });

  it('can increase the quantity in stock of a particular item', function() {
    clothes.increaseQuantityOfItem(item);
    expect(clothes.getClothesCatalogue()[0].quantityInStock).toEqual(6);
  });


});
