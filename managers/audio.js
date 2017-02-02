/*********************************
 LR Shoot - magagers/audio.js
 Copyright © 2016 Marcis Berzins (berzins.marcis@gmail.com)
 This program is licensed under the terms of the GNU General Public License: http://www.gnu.org/licenses/gpl-3.0.txt
 *********************************/

function AudioManager() {
  this.SOUNDS = {
    SHOT: 'data/audio/shot.ogg',
    TAKE_DAMAGE: 'data/audio/take_damage.ogg',
    DIE: 'data/audio/die.ogg',
    JUMP: 'data/audio/jump.ogg'
  };
  this.loadState = { count: Object.keys(this.SOUNDS).length, loaded: 0, ready: false };
  this.soundPool = {};
  this.init();
}

AudioManager.prototype.init = function() {
  if (!this.testAudio()) { this.loadState.ready = true; return; }
  
  for (var p in this.SOUNDS) {
    var a = new Audio(this.SOUNDS[p]);
    var that = this;
    
    (function(p) { // http://stackoverflow.com/a/14177822
    
      a.addEventListener('canplaythrough', function loaded() {
        this.removeEventListener('canplaythrough', loaded);
        
        that.soundPool[p] = [];
        for (var i = 0; i < 5; i++) {
          that.soundPool[p].push(this.cloneNode(true));
        }
        
        that.loadState.loaded++;
        if (that.loadState.loaded >= that.loadState.count) { that.loadState.ready = true; }
        
      }, false);
    
    }(p));
    
  }
};

AudioManager.prototype.testAudio = function() {
  var test = document.createElement('audio');
  var canPlayOgg = (typeof test.canPlayType === 'function' && test.canPlayType('audio/ogg') !== '');
  return canPlayOgg;
}

AudioManager.prototype.playSound = function(s) {
  if (!this.soundPool[s]) return;
  var vacant = 0;
  for (var i = 0; i < this.soundPool[s].length; i++) {
    if (this.soundPool[s][i].paused) {
      vacant = i;
      break;
    }
  }
  this.soundPool[s][vacant].currentTime = 0;
  this.soundPool[s][vacant].play();
};