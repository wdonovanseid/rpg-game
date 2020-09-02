import {Weapon} from './../src/js/weapon-logic';

describe('Weapon', () => {
  test('creating a new weapon object', ()=> {
    let weapon = new Weapon("bow and arrow", 7);
    expect(weapon).toMatchObject(weapon);
  });
});