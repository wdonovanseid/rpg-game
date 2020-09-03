export class Battle {
  constructor(protag, monster) {
    this.protag = protag;
    this.monster = monster;
    this.endBattle = false;
  }

  attacking() {
    this.monster.hp -= this.protag.attack;
    this.protag.hp -= this.monster.attack;
  }

  runAway() {
    //let chance =  Math.ceil(math.random * 10);//this is the actual code.
    //let chance = 7; //use this to test logic
    let chance = 3; //use this to test logic
    if (chance >= 5) {
      this.endBattle = true;
    } else {
      
      this.protag.hp -= this.monster.attack;
    }
  }

  getLoot() {
    this.protag.stuff.push(this.monster.stuff[0]);
    this.protag.exp += this.monster.exp;
  }
}