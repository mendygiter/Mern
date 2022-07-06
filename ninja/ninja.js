// // example output
// const superSensei = new Sensei("Master Splinter");
// superSensei.speakWisdom();
// // -> "What one programmer can do in one month, two programmers can do in two months."
// superSensei.showStats();
// // -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"

class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    drinkSake() {
    this.health += 10;
    }
}

const ninja1 = new Ninja("Mendy", 10);
console.log(ninja1.name)
console.log(ninja1.health)


const ninja2 = new Ninja("Rochel", 5);
console.log(ninja2.name)
console.log(ninja2.health);
console.log(ninja2.speed);
console.log(ninja2.strength);

const ninjaBonus = new Ninja("Lana", 5);
ninjaBonus.drinkSake();
console.log(ninjaBonus.name);
console.log(ninjaBonus.health);








// class Sensei {
//     constructor(health, speed, strength) {
//         this.health = 200;
//         this.speed = 10;
//         this.stregth = 10;
//     }
// }