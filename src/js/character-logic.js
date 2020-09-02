export default class Character {
  constructor(name){
    this.name = name;
    this.hp = 50;
    this.attack = 5;
    this.lvl = 1;
    this.exp = 0;
    this.stuff = [];
  }
  levelUp(){
    if (this.exp >= 100) {
      this.exp -= 100;
      this.lvl += 1;
      this.attack += 2;
    }
  }

  addToInventory(item){
    this.stuff.push(item);
  }
}