/*********************************
 LR Shoot - main.js
 Copyright © 2014 Marcis Berzins (berzins.marcis@gmail.com)
 This program is licensed under the terms of the GNU General Public License: http://www.gnu.org/licenses/gpl-3.0.txt
 *********************************/

function Game() {
  this.W = 32; this.H = 32;
  this.scaleFactor = 10;
  this.SCREENS = { LOADER: 'Loader', MENU: 'Menu', PLAY: 'Play' };
  
  this.screen = this.SCREENS.LOADER;
  this.tScreen = 0; this.screenRunner = 0;
  
  this.canvas = 0; this.ctx = 0;
  this.lastTime = 0; this.frameTime = 0;
  
  this.inputManager = null;
  this.audioManager = new AudioManager();
  this.imageManager = new ImageManager();
}

Game.prototype.getFrameTime = function() {
  var tNow = getTime();
  this.frameTime = (tNow - this.lastTime) / 1000;
  if (this.frameTime > 0.03) this.frameTime = 0.03;
  this.lastTime = tNow;
};

//----------- Init & Main Loop ------------//

Game.prototype.init = function() {
  document.onselectstart = function() { return false; };
  this.canvas = document.getElementById('game');
  this.canvas.width = this.W * this.scaleFactor; this.canvas.height = this.H * this.scaleFactor;
  this.ctx = this.canvas.getContext('2d');
  this.ctx.scale(this.scaleFactor, this.scaleFactor);
  this.ctx.mozImageSmoothingEnabled = false;
  this.ctx.webkitImageSmoothingEnabled = false;
  this.ctx.msImageSmoothingEnabled = false;
  this.ctx.imageSmoothingEnabled = false;
  this.ctx.textAlign = 'left';
  this.ctx.textBaseline = 'top';
  this.ctx.font = '2px monospace';
  this.initGame();
};

Game.prototype.initGame = function() {
  this.inputManager = new InputManager();
  this.loop();
};

Game.prototype.loop = function() {
  this.getFrameTime();
  if (this.tScreen === this.screen) {
    this.screen = this.screenRunner.loop(this.frameTime);
  } else {
    delete this.screenRunner;
    this.tScreen = this.screen;
    this.screenRunner = new window[this.screen](this);
  }
  this.inputManager.resetEvents();
  window.requestAnimationFrame(function() { game.loop(); });
};

//----------------- Lib -------------------//

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getNextIndex(index, array) {
  return (index < array.length - 1) ? index + 1 : 0;
}

function getPrevIndex(index, array) {
  return (index > 0) ? index - 1 : array.length - 1;
}

function copyProperties(target, source) {
  for (var p in source) {
    if (source.hasOwnProperty(p)) {
      target[p] = clone(source[p]);
    }
  }
}

function clone(o) {
  if (o == null || typeof(o) != 'object') return o;
  var t = o.constructor();
  for(var p in o) t[p] = clone(o[p]);
  return t;
}

function drawInfo(ctx, info) {
  ctx.fillStyle = 'hsla(0, 0%, 0%, 1)';
  var i = 0;
  for (var p in info) {
    ctx.fillText(p + ': ' + info[p], 0, ((2 * i)));
    i++;
  }
}

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function drawArrow(ctx, deg, cX, cY, lineLength) {
  var rDeg, dX, dY;
  rDeg = d2r(deg);
  dX = (Math.cos(rDeg) * lineLength) + cX;
  dY = (Math.sin(rDeg) * lineLength) + cY;
  ctx.moveTo(dX, dY);
  ctx.lineTo(cX, cY);
  deg = 360 - deg;
  rDeg = d2r(deg);
  dX = (Math.cos(rDeg) * lineLength) + cX;
  dY = (Math.sin(rDeg) * lineLength) + cY;
  ctx.lineTo(dX, dY);
}

function d2r(d) {
  return d * Math.PI / 180;
}

function get(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function() { callback(xhr); };
  xhr.open("GET", url, true);
  xhr.send();
}

function localData(k, v) {
  if (!window.localStorage) return 0;
  if (v === undefined) {
    if (window.localStorage[k]) {
      try { return JSON.parse(window.localStorage[k]); }
      catch (e) { return window.localStorage[k]; }
    } else {
      return 0;
    }
  } else {
    if (typeof v === 'object') {
      window.localStorage[k] = JSON.stringify(v);
    } else {
      window.localStorage[k] = v;
    }
    return 1;
  }
}

// http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) { window.setTimeout(callback, 1000 / 60); };

function getTime() { if (window.performance && window.performance.now) return window.performance.now(); else return new Date().getTime(); }

//---------------- Init -------------------//

var game = new Game();
game.init();