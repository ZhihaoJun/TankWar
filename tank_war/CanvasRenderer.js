function CanvasRenderer(canvas) {
  this._canvas = canvas;
  this._ctx = canvas.getContext('2d');
}

CanvasRenderer.prototype.drawSprite = function(pos, dom) {
  this._ctx.drawImage(dom, pos[0], pos[1]);
}

CanvasRenderer.prototype.drawCall = function() {

}
