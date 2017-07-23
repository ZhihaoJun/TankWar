function NotImplementedError(msg) {
  this.name = "NotImplementedError";
  this.message = msg || "";
}

NotImplementedError.prototype = Object.create(Error.prototype);
NotImplementedError.prototype.constructor = NotImplementedError;
