describe("Gilded Rose", function() {

  it("should foo", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("foo");
  });

  it("when mild cheddar sellin = 8, quality = 3", function () {
    const gildedRose = new Shop([new Item("mild cheddar", 10, 5)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(9);
    expect(items[0].quality).toEqual(4);
  }) 

  it("when medium cheddar sellin < 0, quality !< 0", function () {
    const gildedRose = new Shop([new Item("medium cheddar", 2, 1)]);
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(-1);
    expect(items[0].quality).toEqual(0);
  })

  it("when item is a backstage pass, quality goes to zero when sellin is <= 0", function(){
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 2, 45)]);
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(-1);
    expect(items[0].quality).toEqual(0);
  })

  it("when item is a backstage pass, quality increases by 3 while sellin is between 1 and 5", function(){
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 2, 40)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(1);
    expect(items[0].quality).toEqual(43);
  })

  it("when item is a backstage pass, quality increases by 2 while sellin is between 6 and 10", function(){
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 7, 40)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(6);
    expect(items[0].quality).toEqual(42);
  })

  it("when item is a backstage pass, quality increases by 1 while sellin is over 10", function(){
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 14, 40)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(13);
    expect(items[0].quality).toEqual(41);
  })


  it("when Brie sellIn = 4, quality = 6", function (){
    const gildedRose = new Shop([new Item("Aged Brie", 5 ,5)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(4);
    expect(items[0].quality).toEqual(6);
  })

  it("Sulfuras do not decrease sellIn or quality", function (){
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 2 , 40)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(2);
    expect(items[0].quality).toEqual(40);
  })

  it("any Conjoured item decreases quality by 2 for every 1 decrease in sellIn", function(){
    const gildedRose = new Shop([new Item("Conjoured Tunworth", 10 , 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(9);
    expect(items[0].quality).toEqual(8); //will = 9 currently as new feature has not been implemented.
  } )


});
