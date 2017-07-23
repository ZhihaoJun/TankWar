var _componentId = 0;

function Component(name, type) {
  this._id = _componentId ++;
  this._name = name;
  this._type = type;
}

Component.prototype.name = function() {
  return this._name;
}

Component.prototype.type = function() {
  return this._type;
}
