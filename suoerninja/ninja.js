class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed = 10;
        this.strength = 10;
    }

    drinkSake() {
        this.health += 10;
    }
}

class Sensei extends Ninja {
    constructor(name, health, speed, strength, wisdom) {
        super(name, health, speed, strength);
        this.wisdom = 10;
    }
    speaklWisdom() {
        console.log("What.......")
        this.drinkSake()
    }
}

const ninja3 = new Sensei("Mendy", 200);

console.log(ninja3.name)
ninja3.speaklWisdom()
console.log(ninja3.health)