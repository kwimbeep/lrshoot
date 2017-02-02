/*********************************
 LR Shoot - managers/image.js
 Copyright © 2014 Marcis Berzins (berzins.marcis@gmail.com)
 This program is licensed under the terms of the GNU General Public License: http://www.gnu.org/licenses/gpl-3.0.txt
 *********************************/

function ImageManager() {
  this.IMAGES = {
    TITLE: 'data/images/title.png',
    LVL_1_TITLE: 'data/images/lvl_1_title.png',
    LVL_1_BG_1: 'data/images/lvl_1_bg_1.png',
    LVL_1_BG_2: 'data/images/lvl_1_bg_2.png',
    LVL_2_TITLE: 'data/images/lvl_2_title.png',
    LVL_2_BG_1: 'data/images/lvl_2_bg_1.png',
    LVL_3_TITLE: 'data/images/lvl_3_title.png',
    LVL_3_BG_1: 'data/images/lvl_3_bg_1.png',
    LVL_4_TITLE: 'data/images/lvl_4_title.png',
    LVL_4_BG_1: 'data/images/lvl_4_bg_1.png',
    LVL_5_TITLE: 'data/images/lvl_5_title.png',
    LVL_5_BG_1: 'data/images/lvl_5_bg_1.png',
    LVL_CONGRATS: 'data/images/lvl_congrats.png',
    GAME_CONGRATS: 'data/images/game_congrats.png',
    GAME_OVER: 'data/images/game_over.png',
    PLAYER_STAND_L: 'data/images/player_stand_l.png',
    PLAYER_STAND_R: 'data/images/player_stand_r.png',
    PLAYER_WALK_L: 'data/images/player_walk_l.png',
    PLAYER_WALK_R: 'data/images/player_walk_r.png',
    PLAYER_JUMP_L: 'data/images/player_jump_l.png',
    PLAYER_JUMP_R: 'data/images/player_jump_r.png',
    ENEMY_STAND_L: 'data/images/enemy_stand_l.png',
    ENEMY_STAND_R: 'data/images/enemy_stand_r.png',
    ENEMY_WALK_L: 'data/images/enemy_walk_l.png',
    ENEMY_WALK_R: 'data/images/enemy_walk_r.png'
  };
  this.loadState = { count: Object.keys(this.IMAGES).length, loaded: 0, ready: false };
  this.init();
}

ImageManager.prototype.init = function() {
  for (var p in this.IMAGES) {
    var i = new Image();
    var that = this;
    i.addEventListener('load', function() {
      that.loadState.loaded++;
      if (that.loadState.loaded >= that.loadState.count) { that.loadState.ready = true; }
    }, false);
    i.src = this.IMAGES[p];
    this[p] = i;
  }
};