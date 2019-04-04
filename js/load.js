var loadState = {
  preload: function () {
    var loadingLabel = game.add.text(80, 150, "loading...", {font: "30px Courier", fill: "#fff"});
    game.load.spritesheet("sky", "assets/img/spaceall.png", 800, 600);
    game.load.image("ground", "assets/img/platform.png");
    game.load.image("star", "assets/img/star.png");
		game.load.image("barrier", "assets/img/barrier.png");
		game.load.spritesheet("red", "assets/img/barrier0.png", 25, 120);
		game.load.spritesheet("orange", "assets/img/barrier1.png", 25, 120);
		game.load.spritesheet("yellow", "assets/img/barrier2.png", 25, 120);
		game.load.spritesheet("green", "assets/img/barrier3.png", 25, 120);
		game.load.spritesheet("blue", "assets/img/barrier4.png", 25, 120);
		game.load.spritesheet("purple", "assets/img/barrier5.png", 25, 120);
    game.load.spritesheet("dude", "assets/img/playerspritesall.png", 59, 29);
  },

  create: function () {
    game.state.start("menu");
  }
}