/*********************************
 LR Shoot - screens/play.js
 Copyright © 2014 Marcis Berzins (berzins.marcis@gmail.com)
 This program is licensed under the terms of the GNU General Public License: http://www.gnu.org/licenses/gpl-3.0.txt
 *********************************/

// global: levels

function Play(game) {
  Screen.call(this, game);
  this.info = {};
  this.returnScreen = this.game.SCREENS.PLAY;
  
  this.stats = new Stats(this);
  this.playing = false;
  
  this.lNum = 0;
  this.level = new Level(this);
  this.player = new Player(this.level);
  this.level.player = this.player;
  this.level.load(levels[this.lNum]);
  
  var that = this;
  this.onInit = function() { that.start(); };
}

Play.prototype = Object.create(Screen.prototype);
Play.prototype.constructor = Play;

Play.prototype.start = function() {
  this.queue.clear();
  this.stats.reset();
  this.stats.load();
  this.queue.add(new ImageMessage(this, this.level.titleImage, 0, 0, 2));
  this.playing = true;
};

Play.prototype.handleEvents = function() {
  if (!this.playing) { return; }
  var iManager = this.game.inputManager;
  var event;
  while (event = iManager.getEvent()) {
    switch (event.type) {
      case 'keyUp':
        switch (event.key) {
          case iManager.KEYS.ESC:
            this.exit();
            break;
          case iManager.KEYS.A:
          case iManager.KEYS.LEFT:
            if (iManager.keysDown[iManager.KEYS.RIGHT] || iManager.keysDown[iManager.KEYS.D]) {
              this.player.startWalk('r');
            } else if (this.player.walking) {
              this.player.stopWalk(-this.player.speed);
            }
            break;
          case iManager.KEYS.D:
          case iManager.KEYS.RIGHT:
            if (iManager.keysDown[iManager.KEYS.LEFT] || iManager.keysDown[iManager.KEYS.A]) {
              this.player.startWalk('l');
            } else if (this.player.walking) {
              this.player.stopWalk(this.player.speed);
            }
            break;
        }
        break;
      case 'keyDown':
        switch (event.key) {
          case iManager.KEYS.W:
          case iManager.KEYS.UP:
            this.player.jump();
            break;
          case iManager.KEYS.A:
          case iManager.KEYS.LEFT:
            if (!this.player.walking) this.player.startWalk('l');
            break;
          case iManager.KEYS.D:
          case iManager.KEYS.RIGHT:
            if (!this.player.walking)  this.player.startWalk('r');
            break;
          case iManager.KEYS.K:
          case iManager.KEYS.Z:
          case iManager.KEYS.SPACE:
          case iManager.KEYS.CONTROL:
            this.player.gun.shoot();
            break;
        }
        break;
    }
  }
};

Play.prototype.update = function() {
  Screen.prototype.update.call(this);
  this.level.update(this.game.frameTime);
  if (!this.playing) { return; }
  if (!this.player.alive) {
    this.playing = false;
    var that = this;
    this.queue.add(new ImageMessage(this, this.game.imageManager.GAME_OVER, 0, 0, 2, function() { that.exit(function() { that.reloadScreen(); }); }));
  } else if (this.player.x >= this.level.w) {
    this.playing = false;
    var that = this;
    if (this.lNum < levels.length - 1) {
      this.queue.add(new ImageMessage(this, this.game.imageManager.LVL_CONGRATS, 0, 0, 2, function() { that.exit(function() { that.reloadScreen(true); }); }));
    } else {
      this.queue.add(new ImageMessage(this, this.game.imageManager.GAME_CONGRATS, 0, 0, 3, function() { that.exit(); }));
    }
  }
};

Play.prototype.draw = function() {
  var ctx = this.game.ctx;
  this.level.draw(ctx);
  Screen.prototype.draw.call(this);
  this.stats.draw(ctx);
  drawInfo(ctx, this.info);
};

Play.prototype.enemyDown = function() {
  this.stats.count++;
};

Play.prototype.reloadScreen = function(loadNext) {
  if (loadNext) this.lNum++;
  this.level.load(levels[this.lNum]);
  this.queue.clear();
  var that = this;
  this.fadeIn(function() { that.start(); });
};

Play.prototype.exit = function(callback) {
  this.stats.ready = false;
  var that = this;
  callback = callback || function() { that.returnScreen = that.game.SCREENS.MENU; };
  this.fadeOut(callback);
};