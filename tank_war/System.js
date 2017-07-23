var _systemId = 0;

function System(name, type) {
  this._id = _systemId ++;
  this._name = name;
  this._type = type;
  this._ecs = null;
}

System.prototype.type = function() {
  return this._type;
}

System.prototype.run = function(entities) {
  throw new NotImplementedError(this._type + " " + this._id + ": " + this._name + " run method not implemented");
}

System.prototype.requiredComponents = function() {
  throw new NotImplementedError(this._type + " " + this._id + ": " + this._name + " requiredComponents method not implemented");
}

System.prototype.setECS = function(ecs) {
  this._ecs = ecs;
}
