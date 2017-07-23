function ECS(canvas) {
  this._entities = {};
  this._entityCache = {};
  this._systems = {};
  this._renderer = new CanvasRenderer(canvas);
}

ECS.prototype.addEntity = function(e) {
  var entityId = e.id();
  this._entities[entityId] = e;
  e.setECS(this);
  var components = e.components();

  for (var componentType in components) {
    var c = components[componentType];
    if (this._entityCache[componentType] == undefined) {
      this._entityCache[componentType] = {};
      this._entityCache[componentType][entityId] = true;
    } else {
      this._entityCache[componentType][entityId] = true;
    }
  }
}

ECS.prototype.removeEntity = function(e) {
  var entityId = e.id();
  e.setECS(null);
  for (var k in this._entityCache) {
    var cache = this._entityCache[k];
    delete cache[entityId];
  }
  delete this._entities[entityId];
}

ECS.prototype.addSystem = function(sys) {
  this._systems[sys.type()] = sys;
  sys.setECS(this);
}

ECS.prototype.removeSystem = function(sys) {
  delete this._systems[sys.type()];
}

ECS.prototype.tick = function() {
  for (var systemType in this._systems) {
    var system = this._systems[systemType];
    var requiredComponents = system.requiredComponents();
    var entities = {};
    
    // get entities that has all components required
    for (var i in requiredComponents) {
      var componentType = requiredComponents[i];
      var entityCache = this._entityCache[componentType];
      for (var entityId in entityCache) {
        entities[entityId] = this._entities[entityId];
      }
    }
    system.run(entities);
  }
}

ECS.prototype.renderer = function() {
  return this._renderer;
}
