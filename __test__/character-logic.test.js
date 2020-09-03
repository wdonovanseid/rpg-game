import Character from '../src/js/character-logic.js';

describe('Character', () => {
  let char;
  
  beforeEach(() => {
    char = new Character("Rocky")
  });

  test('should create a level one character', () => {
    expect(char.name).toEqual("Rocky");
  });
  test('should lvl up a character when exp >= 100', () => {
    char.exp = 130;
    char.levelUp();
    expect(char.lvl).toEqual(2);
  });
  test('should lvl up a character when exp =< 100', () => {
    char.exp = 80;
    char.levelUp();
    expect(char.lvl).toEqual(1);
  });
  test('should add an item to the inventory', () => {
    char.addToInventory("potion")
    expect(char.stuff).toEqual(["potion"]);
  });
});