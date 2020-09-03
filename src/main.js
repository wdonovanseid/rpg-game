import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {allMonsters} from './src/monster-logic.js';
import Character from './js/character-logic';
import { Battle } from './js/battle-logic';

function attachListeners() {
  let monster;
  let battle;
  $("button#explore").on("click", function() {
    $("#explore").prop("disabled", true);
    $("#attack").show();
    $("#runaway").show();
    let random = Math.floor(Math.random() * 3);
    monster = allMonsters[random];
    battle = new Battle (protag, monster);
  });
  $("button#attack").on("click", function() {
    battle.attacking();
    if (protag.hp <= 0) {
      $("#game").hide();
      $("#gameover").show();
    } else if (monster.hp <= 0) {
      battle.getLoot();
      protag.lvlup();
      $("#attack").hide();
      $("#runaway").hide();
      $("#explore").prop("disabled", false);
    }
  });
  $("button#runaway").on("click", function() {
    battle.runAway();
    if (battle.endBattle === true){
      $("#attack").hide();
      $("#runaway").hide();
      $("#explore").prop("disabled", false);
    }
  });
  $("button#weapon").on("click", function() {
    weapon.select();
    this.inventory.push(this.weapon[0]);
    inventory.displayAll()
    if(this.weapon[0] == sword)
      this.displaySword();
    else(this.weapon[1] == dagger) {
      this.displayDagger();
     
    }
  });
}


let protag;

$(document).ready(function() {
  attachListeners();
  $("form#").submit(function(event) {
    event.preventDefault()
    const name = $("input#").val();
    protag = new Character(name);
  });
});
