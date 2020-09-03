import pigPic from './../assets/images/pig.jpg';
import wolfPic from './../assets/images/wolf.gif';
import dragPic from './../assets/images/dragon.gif';

export class Monster {
  constructor(name,hp,attack,lvl,exp,stuff,img) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.lvl = lvl;
    this.exp = exp;
    this.stuff = stuff;
    this.img = img;
  }
  
}

const piggy = new Monster("Piggy",5,1,1,10,["meat"],"<img src="+pigPic+">");
const wolf = new Monster("Wolf",20,3,1,20,["wolf tooth", "wolf hide"],"<img src="+wolfPic+">");
const dragon = new Monster("Dragon",200,45,1,100,["excalibur"],"<img src="+dragPic+">");
export const allMonsters = [piggy, wolf, dragon];