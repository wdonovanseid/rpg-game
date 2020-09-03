import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {allMonsters} from './js/monster-logic.js';
import Character from './js/character-logic';
import { Battle } from './js/battle-logic';

function displayStats() {
  $("#char-name").text(protag.name);
  $("#char-hp").text(protag.hp);
  $("#char-inventory").text(protag.stuff);
}

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
    $("#monster-img").html(monster.img);
    $("#monster-name").text(monster.name);
    displayStats();
  });
  $("button#attack").on("click", function() {
    battle.attacking();
    if (protag.hp <= 0) {
      $("#game").hide();
      $("#gameover").show();
    } else if (monster.hp <= 0) {
      $("#monster-name").text("VICTORY");
      battle.getLoot();
      protag.levelUp();
      $("#attack").hide();
      $("#runaway").hide();
      $("#explore").prop("disabled", false);
    }
    displayStats();
  });
  $("button#runaway").on("click", function() {
    battle.runAway();
    if (battle.endBattle === true){
      $("#attack").hide();
      $("#runaway").hide();
      $("#explore").prop("disabled", false);
    }
    if (protag.hp <= 0) {
      $("#game").hide();
      $("#gameover").show();
    }
    displayStats();
  });
  // $("button#weapon").on("click", function() {
  //   weapon.select();
  //   this.inventory.push(this.weapon[0]);
  //   inventory.displayAll()
  //   if(this.weapon[0] == sword) {
  //     this.displaySword();
  //   } else if (this.weapon[1] == dagger) {
  //     this.displayDagger();
  //   }
  // });
}

let protag;

$(document).ready(function() {
  attachListeners();
  $("form#character").submit(function(event) {
    event.preventDefault();
    const name = $("input#name").val();
    protag = new Character(name);
    $("form#character").hide();
    $("#hero-img").html(protag.img);
    displayStats();
  });
});
