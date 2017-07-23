var _entityId = 0;

function Entity() {
  this._id = _entityId ++;
  this._components = {};
  this._ecs = null;
}

Entity.prototype.id = function() {
  return this._id;
}

Entity.prototype.components = function() {
  return this._components;
}

Entity.prototype.getComponent = function(type) {
  return this._components[type];
}

Entity.prototype.addComponent = function(c) {
  this._components[c.type()] = c;
}

Entity.prototype.removeComponent = function(c) {
  delete this._components[c.type()];
}

Entity.prototype.setECS = function(ecs) {
  this._ecs = ecs;
}
