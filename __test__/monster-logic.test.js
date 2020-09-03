import {Monster} from './../src/js/monster-logic.js';

describe('Monster', () => {
  test('should create a level one monster', () => {
    let monster=new Monster("Piggy",5,1,1,2,["meat"]);
    expect(monster).toMatchObject(monster);
  });
});