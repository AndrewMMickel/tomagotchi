export class Tomagotchi {
    constructor(name) {
        this.name = name;
        this.foodLevel = 10;
        this.sleepLevel = 10;
        this.moodLevel = 0;
    }

    // Decrementing Methods for Stats //

    setHunger() {
        setInterval(() => {
            if (this.foodLevel > 0) {
                this.foodLevel--;
                this.isAngry();
            }
        }, 1000);
    }
    
    gettingTired() {
        setInterval(() => {
          if (this.sleepLevel > 0) {
              this.sleepLevel--;
              this.isAngry();
          }
        }, 10000);
    }

    isAngry() {
    if (this.sleepLevel <= 0 || this.foodLevel <= 0) {
        this.moodLevel++;
        if (this.moodLevel >= 20) {
            return "you die";
          }
        }
    }

    feed() {
        return (this.foodLevel += 10);
    }

    sleep() {
        return (this.sleepLevel += 10);
    }

    mood() {
        return (this.moodLevel -= 10);
    }

    isAngry() {
        if (this.sleepLevel <= 0 || this.foodLevel <= 0) {
            this.moodLevel++;
            if (this.moodLevel >= 20) {
                return "you die";
            }
        }
    }
}