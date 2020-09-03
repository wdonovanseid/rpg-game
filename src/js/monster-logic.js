export class Monster {
  constructor(name,hp,attack,lvl,exp,stuff) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.lvl = lvl;
    this.exp = exp;
    this.stuff = stuff;
    this.id = 1;
  }
  
}

const piggy = new Monster("Piggy",5,1,1,2,["meat"]);
const wolf = new Monster("Wolf",20,3,1,10,["wolf tooth", "wolf hide"]);
const dragon = new Monster("Dragon",200,45,1,50,["excalibur"]);
export const allMonsters = [piggy, wolf, dragon];