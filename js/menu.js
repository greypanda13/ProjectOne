var menuState = {
  create: function () {
    var nameLabel = game.add.text(80, 80, "GAME TITLE", {font: "50px Courier", fill: "#fff"});
    var startLabel = game.add.text(80, game.world.height-80,
    "press the 'W' key to start ('W' is for 'win')", {font: "25px Courier", fill: "#fff"});
    var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);
    wkey.onDown.addOnce(this.start, this);
  },

  start: function () {
    game.state.start("play");
  }
};
