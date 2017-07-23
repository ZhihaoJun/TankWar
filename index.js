function TankWar(canvas) {
  var game = new Game(canvas);
  requestAnimationFrame(game.loop.bind(game));
}
var canvas = document.getElementById('canvas');
new TankWar(canvas);
