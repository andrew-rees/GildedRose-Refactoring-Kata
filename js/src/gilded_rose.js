const sulfuras = 'Sulfuras, Hand of Ragnaros'
const pass = 'Backstage passes to a TAFKAL80ETC concert'
const brie = 'Aged Brie'
const conjured = 'Conjured'

class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].name != brie && this.items[i].name != pass) {
        if (this.items[i].quality > 0) {
          this.items[i].decreaseQuality()
        }
      } else {
        this.items[i].increaseQuality()
      }
      if (this.items[i].name != sulfuras) {
        this.items[i].sellIn--;
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != brie) {
          if (this.items[i].name != pass) {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != sulfuras) {
                this.items[i].quality--;
              }
            }
          } else {
            this.items[i].quality = 0
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality++
          }
        }
      }
    }

    return this.items;
  }

}