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