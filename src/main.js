


checkDead(){
  if(this.hp = 0) {
    console.log("Ouch, you are now dead!");
    $("#game").hide();
    $("#gameover").show();
  }