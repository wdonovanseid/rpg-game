export function attacking(protag, monster) {
  monster.hp -= protag.attack;
  if (monster.hp <= 0 ) {
    endFight();
  } else {
    protag.hp -= monster.attack;
  }
  endTurn()
}

export function defending(protag, monster) {
  protag.hp -= monster.attack / 2;
}

export function runAway() {
  let chance = Math.ceil(math.random * 10);
  if (chance >= 5) {
    endFight();
  } else {
    endTurn();
  }
}