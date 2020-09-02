export class Weapon {
  constructor(name,attackAtt){
    this.name = name;
    this.attackAtt = attackAtt;
  }
}

const sword = new Weapon("Sword", 5);
const dagger = new Weapon("Dagger", 2);
const excalibur = new Weapon("Excalibur", 20);
export const allWeapons = [sword, dagger, excalibur]