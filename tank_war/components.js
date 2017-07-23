function Position() {
  Component.call(this, 'position', 'Position');
  this.x = 0;
  this.y = 0;
  this.z = 0;
}

Position.prototype = Object.create(Component.prototype);
Position.prototype.constructor = Position;

function Sprite(name, imgDom) {
  Component.call(this, name, 'Sprite');
  this.sprite = imgDom;
}

Sprite.prototype = Object.create(Component.prototype);
Sprite.prototype.constructor = Sprite;

function BoxCollider(name) {
  Component.call(this, name, 'BoxCollider');
  this.width = 1;
  this.height = 1;
}

BoxCollider.prototype = Object.create(Component.prototype);
BoxCollider.prototype.constructor = BoxCollider;
