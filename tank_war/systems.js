function SpriteRenderer() {
  System.call(this, 'SpriteRenderer', 'SpriteRenderer');
}

SpriteRenderer.prototype = Object.create(System.prototype);
SpriteRenderer.prototype.constructor = SpriteRenderer;

SpriteRenderer.REQUIRED_COMPONENTS = ['Position', 'Sprite'];

SpriteRenderer.prototype.run = function(entities) {
  console.log('[SpriteRenderer.run]');
  for (var entityId in entities) {
    var entity = entities[entityId];
    var sprite = entity.getComponent('Sprite');
    var position = entity.getComponent('Position');
    var sprite = sprite.sprite();
    var renderer = this._ecs.renderer();
    renderer.drawSprite(position.position(), sprite);
  }
}

SpriteRenderer.prototype.requiredComponents = function() {
  return SpriteRenderer.REQUIRED_COMPONENTS;
}

function BoxCollision() {
  System.call(this, 'Collision', 'Collision');
}

BoxCollision.prototype = Object.create(Collision.prototype);
BoxCollision.prototype.constructor = Collision;

Collision.REQUIRED_COMPONENTS = ['Posision', 'BoxCollider'];
