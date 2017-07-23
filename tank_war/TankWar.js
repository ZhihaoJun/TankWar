function Game(canvas) {
  this._ecs = new ECS(canvas);

  var testSpriteImgDom = document.getElementById('test-sprite');

  var testSpriteGO = new Entity();
  var pos = new Position();
  pos.setX(100);
  pos.setY(100);
  testSpriteGO.addComponent(pos);
  testSpriteGO.addComponent(new Sprite('sprite', testSpriteImgDom));
  this._ecs.addEntity(testSpriteGO);

  var spriteRenderer = new SpriteRenderer();
  this._ecs.addSystem(spriteRenderer);
}

Game.prototype.loop = function() {
  this._ecs.tick();
}
