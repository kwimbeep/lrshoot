/*********************************
 LR Shoot - screens/menu.js
 Copyright © 2014 Marcis Berzins (berzins.marcis@gmail.com)
 This program is licensed under the terms of the GNU General Public License: http://www.gnu.org/licenses/gpl-3.0.txt
 *********************************/

function Menu(game) {
  Screen.call(this, game);
  this.returnScreen = this.game.SCREENS.MENU;
  this.info = {};
}

Menu.prototype = Object.create(Screen.prototype);
Menu.prototype.constructor = Menu;

Menu.prototype.handleEvents = function() {
  var event;
  while (event = this.game.inputManager.getEvent()) {
    switch (event.type) {
      case 'keyUp':
        this.info['EventKey'] = event.key;
        switch (event.key) {
          case this.game.inputManager.KEYS.ENTER:
          case this.game.inputManager.KEYS.SPACE:
            var that = this;
            this.fadeOut(function() { that.returnScreen = that.game.SCREENS.PLAY; });
            break;
        }
        break;
    }
  }
};

Menu.prototype.update = function() {
  Screen.prototype.update.call(this);
  this.info['Pointer'] = this.game.inputManager.pointer.x + ':' + this.game.inputManager.pointer.y;
};

Menu.prototype.draw = function() {
  var ctx = this.game.ctx;
  //ctx.clearRect(0, 0, this.game.W, this.game.H);
  this.drawBG(ctx);
  //drawInfo(ctx, this.info);
  Screen.prototype.draw.call(this);
};

Menu.prototype.drawBG = function(ctx) {
  ctx.drawImage(this.game.imageManager['TITLE'], 0, 0);
};