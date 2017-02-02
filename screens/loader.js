/*********************************
 LR Shoot - screens/loader.js
 Copyright © 2014 Marcis Berzins (berzins.marcis@gmail.com)
 This program is licensed under the terms of the GNU General Public License: http://www.gnu.org/licenses/gpl-3.0.txt
 *********************************/

function Loader(game) {
  Screen.call(this, game);
  this.returnScreen = this.game.SCREENS.LOADER;
  this.itemsToLoad = this.game.audioManager.loadState.count + this.game.imageManager.loadState.count;
  this.step = Math.round(100 / this.itemsToLoad);
  this.loadedItems = 0;
  this.dimensions = { x: this.game.W / 2 - 15, y: this.game.H / 2 - 3, w: 30, h: 6 };
}

Loader.prototype = new Screen();
Loader.prototype.constructor = Loader;

Loader.prototype.update = function() {
  Screen.prototype.update.call(this);
  this.loadedItems = this.game.audioManager.loadState.loaded + this.game.imageManager.loadState.loaded;
  if (this.game.audioManager.loadState.ready && this.game.imageManager.loadState.ready) {
    var that = this;
    this.fadeOut(function() { that.returnScreen = that.game.SCREENS.MENU; });
  }
};

Loader.prototype.draw = function() {
  var ctx = this.game.ctx;
  this.drawBG(ctx);
  ctx.fillStyle = 'hsla(0, 0%, 50%, 1)';
  ctx.fillRect(this.dimensions.x, this.dimensions.y, Math.round(this.dimensions.w / this.itemsToLoad * this.loadedItems), this.dimensions.h);
  Screen.prototype.draw.call(this);
};

Loader.prototype.drawBG = function(ctx) {
  ctx.fillStyle = 'hsla(0, 0%, 10%, 1)';
  ctx.fillRect(0, 0, this.game.W, this.game.H);
};