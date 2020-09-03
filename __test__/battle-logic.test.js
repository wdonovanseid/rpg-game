import {Battle} from './../src/js/battle-logic.js';
import Character from '../src/js/character-logic.js';
import {allMonsters} from '../src/js/monster-logic.js';

describe('Battle', () => {
  let protag;
  let wolf;
  let battle;

  beforeEach(() => {
    protag = new Character("Rocky");
    wolf = allMonsters[1];
    battle = new Battle(protag, wolf);
  });

  test('should create a battle object with the character and monster inside',() => {
    expect(battle.monster).toBe(wolf);
    expect(battle.protag).toBe(protag);
  });

  test('should reduce character hp by monsters attack and vice versa', () => {
    battle.attacking();
    expect(protag.hp).toEqual(47);
    expect(wolf.hp).toEqual(15);
  });

  test('should set endBattle to true if chance is >= 5', () => {
    battle.runAway();
    expect(battle.endBattle).toEqual(false);
  }); //using the first test for runaway battle logic is a 7. secondtest using a 3.

  test('should reduce character hp by monsters attack if chance is < 5', () => {
    battle.runAway();
    expect(protag.hp).toEqual(47);
  });
  
  test('should get loot after monster hp reduces to 0', () => {
    battle.getLoot();
    expect(protag.stuff).toEqual(["wolf tooth"]);
  });
});