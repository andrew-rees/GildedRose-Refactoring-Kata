class Item {
    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
    increaseQuality() {
        if (this.name == pass && this.sellIn < 11) {
            if (this.sellIn < 6) {
                this.quality += 3
            } else if (this.sellIn > 6 && this.sellIn < 11) {
                this.quality += 2
            }
        } else {
            this.quality++;
        }
    }
    decreaseQuality() {
        if (this.name.startsWith(conjured)){
            this.quality -=2
        }
        else if (this.name != sulfuras) {
            this.quality --
        }
    }
}