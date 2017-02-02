/*********************************
 LR Shoot - classes/screen.js
 Copyright © 2014 Marcis Berzins (berzins.marcis@gmail.com)
 This program is licensed under the terms of the GNU General Public License: http://www.gnu.org/licenses/gpl-3.0.txt
 *********************************/

//---------------- Screen -----------------//

function Screen(game) {
  this.game = game;
  this.queue = new Queue();
  
  var that = this;
  this.fadeIn(function() { if (that.onInit) that.onInit(); });
}

Screen.prototype.loop = function() {
  this.handleEvents();
  this.update();
  this.draw();
  return this.returnScreen;
};

Screen.prototype.handleEvents = function() {};

Screen.prototype.update = function() {
  this.queue.process('update', [this.game.frameTime]);
};

Screen.prototype.draw = function() {
  this.queue.process('draw', [this.game.ctx]);
};

Screen.prototype.fadeIn = function(callback) {
  this.queue.add(new Fader(this, 'in', callback));
};

Screen.prototype.fadeOut = function(callback) {
  this.queue.add(new Fader(this, 'out', callback));
};

//----------------- Fader -----------------//

function Fader(parent, type, callback) {
  this.parent = parent;
  this.type = type;
  this.callback = callback;
  this.alpha = (type === 'in') ? 1 : 0;
  this.increment = (type === 'in') ? -0.05 : 0.05;
}

Fader.prototype.update = function(fTime) {
  this.alpha += this.increment;
  if ((this.alpha < 0) || (this.alpha > 1)) {
    if (this.type === 'in') this.parent.queue.removeById(this.id);
    if (this.callback) this.callback();
  }
};

Fader.prototype.draw = function(ctx) {
  ctx.save();
  ctx.globalAlpha = this.alpha;
  ctx.fillStyle = 'hsla(0, 0%, 0%, 1)';
  ctx.fillRect(0, 0, this.parent.game.W, this.parent.game.H);
  ctx.restore();
};