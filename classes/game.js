/*********************************
 LR Shoot - classes/game.js
 Copyright © 2014 Marcis Berzins (berzins.marcis@gmail.com)
 This program is licensed under the terms of the GNU General Public License: http://www.gnu.org/licenses/gpl-3.0.txt
 *********************************/

//---------------- Level ------------------//

function Level(parent) {
  this.parent = parent;
  this.audioManager = this.parent.game.audioManager;
  this.imageManager = this.parent.game.imageManager;
  
  this.titleImage = '';
  this.w = 0; this.h = 0;
  this.pX = 0; this.pY = 0;
  this.backgrounds = [{ w: 0, h: 0, offset: { x: 0, y: 0, multiplier: 0 }, image: '' }];
  this.blocks = []; this.enemies = [];
  
  this.drawDimensions = { w: this.parent.game.W, h: this.parent.game.H };
  this.offset = { x: 0, y: 0 };
  this.margin = { x: 10, y: 0 };
  
  this.queue = new Queue();
  this.player = null;
  
  this.loaded = false;
}

Level.prototype.load = function(lvl) {
  this.loaded = false;
  this.offset = { x: 0, y: 0 };
  this.enemiesDown = 0;
  this.queue.clear();
  
  copyProperties(this, lvl);
  
  this.player.reset(this.pX, this.pY);
  this.queue.add(this.player);
  
  this.titleImage = this.imageManager[this.titleImage] || null;
  
  for (var i = 0; i < this.backgrounds.length; i++) {
    this.backgrounds[i].offset.multiplier = (this.backgrounds[i].w - this.drawDimensions.w) / (this.w - this.drawDimensions.w);
    this.backgrounds[i].image = this.imageManager[this.backgrounds[i].image] || null;
  }
  
  for (var i = 0; i < this.enemies.length; i++) {
    this.queue.add(new Enemy(this, this.enemies[i].x, this.enemies[i].y, this.enemies[i].amplitude));
  };
  
  this.loaded = true;
};

Level.prototype.update = function(fTime) {

  //this.queue.process('update', [fTime]);
  
  var objects = this.queue.getObjects();
  for (var i = objects.length - 1; i >= 0; i--) {
  
    //if (this.isVisible(objects[i]) || objects[i].constructor === Bullet) {
      objects[i].update(fTime);
      if (objects[i])
      if ((objects[i].constructor === Player)
       || (objects[i].constructor === Enemy)
       || (objects[i].constructor === Bullet)
       || (objects[i].constructor === Particle && !objects[i].landed)) {
        this.checkBlockCollisions(objects[i]);
      }
      
      if (objects[i] && objects[i].constructor === Bullet) {
        this.checkQueueCollisions(objects[i]);
      }
    //}
    
  }
  
  this.offset.x = this.player.x - this.margin.x;
  if (this.offset.x < 0) this.offset.x = 0;
  if (this.offset.x > this.w - this.drawDimensions.w) this.offset.x = this.w - this.drawDimensions.w;
  for (var i = 0; i < this.backgrounds.length; i++) {
    this.backgrounds[i].offset.x = this.offset.x * this.backgrounds[i].offset.multiplier;
  }
  
};

Level.prototype.draw = function(ctx) {
  if (!this.loaded) { return; }
  ctx.save();
  for (var i = 0; i < this.backgrounds.length; i++) {
    ctx.drawImage(this.backgrounds[i].image, this.backgrounds[i].offset.x, this.backgrounds[i].offset.y, this.drawDimensions.w, this.drawDimensions.h, 0, 0, this.drawDimensions.w, this.drawDimensions.h);
  }
  ctx.translate(+(-this.offset.x).toFixed(1), +(-this.offset.y).toFixed(1));
  for (var i = 0; i < this.blocks.length; i++) {
    var o = this.blocks[i];
    if (this.isVisible(o)) {
      ctx.fillStyle = o.color;
      ctx.fillRect(o.x, o.y, o.w, o.h);
    }
  }
  this.queue.process('draw', [ctx]);
  ctx.restore();
};

Level.prototype.checkBlockCollisions = function(object) {
  for (var i = 0; i < this.blocks.length; i++) {
    var o = this.blocks[i];
    //if (this.isVisible(o)) {
      var collisionData = this.checkCollision(object, o);
      if (collisionData) object.collide(collisionData);
    //}
  }
};

Level.prototype.checkQueueCollisions = function(object) {
  var qObjects = this.queue.getObjects();
  for (var i = 0; i < qObjects.length; i++) {
    if (/*this.isVisible(qObjects[i]) && */!(object === qObjects[i])) {
      var collisionData = this.checkCollision(object, qObjects[i]);
      if (collisionData) object.collide(collisionData);
    }
  }
};

Level.prototype.checkCollision = function(o1, o2) {
  var cX1, cX2, cY1, cY2, vX, vY, hWidths, hHeights;
  cX1 = o1.x + o1.hW; cY1 = o1.y + o1.hH;
  cX2 = o2.x + o2.hW; cY2 = o2.y + o2.hH;
  vX = cX1 - cX2; vY = cY1 - cY2;
  
  hWidths = o1.hW + o2.hW;
  hHeights = o1.hH + o2.hH;
  
  if (Math.abs(vX) < hWidths && Math.abs(vY) < hHeights) {
    var collisionData = { dir: '', oX: 0, oY: 0, o: null };
    var oX = hWidths - Math.abs(vX);
    var oY = hHeights - Math.abs(vY);
    if (oX >= oY) {
      if (vY > 0) { collisionData.dir = 't'; } // top
      else { collisionData.dir = 'b'; } // bottom
    } else {
      if (vX > 0) { collisionData.dir = 'r'; } // right
      else { collisionData.dir = 'l'; } // left
    }
    collisionData.oX = oX;
    collisionData.oY = oY;
    collisionData.o = o2;
    return collisionData;
  } else {
    return false;
  }
  
};

Level.prototype.isVisible = function(o) {
  return ((o.x < this.offset.x + this.drawDimensions.w) && (o.x + o.w > this.offset.x));
};

//--------------- Movable -----------------//

function Movable(parent, x, y) {
  if (x === undefined) x = 0; if (y === undefined) y = 0;
  this.parent = parent; this.id = 0;
  this.x = x; this.y = y; this.w = 3; this.h = 6;
  this.hW = this.w / 2; this.hH = this.h / 2;
  this.alive = true; this.lives = 140; this.maxLives = 140;
  this.color = 'hsla(0, 0%, 0%, 1)'; this.alpha = 1;
  this.image = ''; this.animations = {}; this.sprites = {}; this.sprite = null;
  this.direction = 'r'; this.velocity = { x: 0, y: 0, min: 1 }; this.previous = { x: 0, y: 0 };
  this.speed = 20; this.friction = 0.7; this.jumpSpeed = 50; this.weight = 200;
  this.moving = false; this.walking = false; this.jumping = false;
}

Movable.prototype.reset = function(x, y) {
  if (x === undefined) x = 0; if (y === undefined) y = 0;
  this.x = x; this.y = y;
  this.direction = 'r'; this.velocity = { x: 0, y: 0, min: 1 }; this.previous = { x: 0, y: 0 };
  this.alive = true; this.lives = this.maxLives;
  this.walking = false;
  this.jumping = false;
  if (this.sprite) this.setSprite();
};

Movable.prototype.startWalk = function(direction) {
  this.direction = direction || this.direction;
  this.walking = true;
  if (this.sprite) this.setSprite();
};

Movable.prototype.stopWalk = function(v) {
  if (v === undefined) v = 0;
  this.velocity.x = v;
  this.walking = false;
  if (this.sprite) this.setSprite();
};

Movable.prototype.jump = function() {
  if (!this.jumping) {
    this.parent.audioManager.playSound('JUMP');
    this.velocity.y = -this.jumpSpeed;
    this.jumping = true;
    if (this.sprite) this.setSprite();
  }
};

Movable.prototype.inverseJump = function() {
  this.velocity.y = -this.velocity.y;
};

Movable.prototype.turnAround = function() {
  this.velocity.x = -this.velocity.x;
  this.direction = (this.direction == 'l') ? 'r' : 'l';
  if (this.sprite) this.setSprite();
};

Movable.prototype.land = function(setSprite) {
  this.jumping = false;
  this.velocity.y = 0;
  if (setSprite && this.sprite) this.setSprite();
};

Movable.prototype.takeDamage = function(damage, direction) {
  this.lives -= damage;
  var x = this.x + 1; var y = this.y + 2; var vX, vY;
  var p = (this.lives <= 0) ? getRandomInt(10, 20) : getRandomInt(1, 5);
  for (var i = 0; i < p; i++) {
    vX = (direction == 'l') ? getRandomInt(5, 20) : getRandomInt(-5, -20);
    vY = getRandomInt(-20, -50);
    this.parent.queue.add(new Particle(x, y, vX, vY));
  }
  if (this.lives <= 0) {
    this.parent.audioManager.playSound('DIE');
    this.die();
  } else {
    this.parent.audioManager.playSound('TAKE_DAMAGE');
  }
};

Movable.prototype.die = function() {
  if (this.alive) {
    if (this.walking) this.stopWalk();
    this.alive = false;
  } else {
    this.parent.queue.removeById(this.id);
  }
};

Movable.prototype.update = function(fTime) {
  if (this.alive) {
  
    for (var p in this.animations) { this.animations[p].update(fTime); }
    
    this.previous.x = this.x; this.previous.y = this.y;
    this.x += this.velocity.x * fTime;
    this.y += this.velocity.y * fTime;
    
    if (this.x < 0) this.x = 0;
    
    if (this.walking) {
      this.velocity.x = (this.direction == 'l') ? -this.speed : this.speed;
    } else {
      if (Math.abs(this.velocity.x) > this.velocity.min) {
        this.velocity.x *= this.friction;
      } else if (this.velocity.x != 0) {
        this.stopWalk();
      }
    }
    this.velocity.y += this.weight * fTime;
    
  } else {
    this.alpha -= 0.025;
    if (this.alpha < 0) { this.die(true); }
  }
  
  if (this.sprite) this.sprite.update(fTime);
};

Movable.prototype.collide = function(collisionData) {
  switch (collisionData.dir) {
    case 't': this.y += collisionData.oY; if (this.velocity.y < 0) this.inverseJump(); break;
    case 'b': this.y -= collisionData.oY; if (this.velocity.y > 0) this.land(this.jumping); break;
    case 'r': this.x += collisionData.oX; break;
    case 'l': this.x -= collisionData.oX; break;
  }
};

Movable.prototype.draw = function(ctx) {
  ctx.save();
  ctx.globalAlpha = this.alpha;
  var x = this.x;
  var y = this.y;
  if (this.sprite) {
    this.sprite.draw(ctx, x, y);
  } else if (this.image) {
    ctx.drawImage(this.image, x, y);
  } else {
    ctx.fillStyle = this.color;
    ctx.fillRect(x, y, this.w, this.h);
  }
  ctx.restore();
};

Movable.prototype.setSprite = function() {
  if (this.jumping) {
    this.sprite = (this.direction == 'l') ? this.sprites.jump_l : this.sprites.jump_r;
  } else if (this.walking) {
    this.sprite = (this.direction == 'l') ? this.sprites.walk_l : this.sprites.walk_r;
  } else {
    this.sprite = (this.direction == 'l') ? this.sprites.stand_l : this.sprites.stand_r;
  }
  this.sprite.timer.reset();
};

//------------------ Gun ------------------//

function Gun(parent) {
  this.parent = parent;
  this.minInterval = 500;
  this.lastTime = getTime() - this.minInterval;
}

Gun.prototype.shoot = function(dX, dY) {
  var t = getTime();
  if (t - this.lastTime < this.minInterval) { return; }
  
  this.lastTime = t;
  var q = this.parent.parent.queue;
  var d = this.parent.direction;
  
  var x = (d == 'r') ? Math.ceil(this.parent.x + 3) : Math.floor(this.parent.x - 1);
  var y = Math.round(this.parent.y + 2);
  
  var distance = (this.parent.walking) ? 20 : 20;
  if (dX === undefined) dX = (d == 'r') ? x + distance : x - distance;
  if (dY === undefined) dY = y;
  
  q.add(new Bullet(this.parent, x, y, dX, dY, q));
  this.parent.parent.audioManager.playSound('SHOT');
};

//---------------- Bullet -----------------//

function Bullet(shooter, x, y, dX, dY, queue) {
  this.shooter = shooter || null;
  this.x = x; this.y = y; this.w = 1; this.h = 1;
  this.hW = this.w / 2; this.hH = this.h / 2;
  this.damage = 20;
  this.queue = queue; this.id = 0; // id is set by queue
  this.animation = new MoveAnimation(this);
  this.animation.start(dX, dY);
}

Bullet.prototype.update = function(fTime) {
  this.animation.update(fTime);
};

Bullet.prototype.draw = function(ctx) {
  ctx.fillStyle = 'hsla(0, 0%, 50%, 1)';
  ctx.fillRect(this.x, this.y, this.w, this.h);
};

Bullet.prototype.collide = function(collisionData) {
  if ((this.shooter && collisionData.o.constructor === this.shooter.constructor) || collisionData.o.constructor === Bullet || collisionData.o.constructor === Particle) { return; }
  if (collisionData.o.alive && !collisionData.o.imune) {
    collisionData.o.takeDamage(this.damage, collisionData.dir);
  } else if (collisionData.o.constructor === Enemy) {
    return;
  }
  this.stopMove();
};

Bullet.prototype.stopMove = function() {
  this.queue.removeById(this.id);
};

//--------------- Particle ----------------//

function Particle(x, y, vX, vY) {
  this.x = x; this.y = y; this.w = 1; this.h = 1;
  this.hW = this.w / 2; this.hH = this.h / 2;
  this.velocity = { x: vX, y: vY };
  this.weight = 200;
  this.landed = false;
}

Particle.prototype.update = function(fTime) {
  if (this.landed) { return; }
  this.x += this.velocity.x * fTime;
  this.y += this.velocity.y * fTime;
  this.velocity.y += this.weight * fTime;
};

Particle.prototype.draw = function(ctx) {
  ctx.fillStyle = 'hsla(345, 100%, 40%, 1)';
  ctx.fillRect(this.x, this.y, this.w, this.h);
};

Particle.prototype.collide = function(collisionData) {
  this.velocity.x = 0;
  this.velocity.y = 0;
  switch (collisionData.dir) {
    case 't': this.y = Math.round(this.y - 1); break;
    case 'b': this.y = Math.round(this.y + 1); break;
    case 'r': this.x = Math.round(this.x - 1); break;
    case 'l': this.x = Math.round(this.x + 1); break;
  }
  this.landed = true;
};

//---------------- Player -----------------//

function Player(parent, x, y) {
  Movable.call(this, parent, x, y);
  this.sprites = {
    stand_l: new Sprite(this.parent.imageManager.PLAYER_STAND_L, this.w, this.h, 1, 0),
    stand_r: new Sprite(this.parent.imageManager.PLAYER_STAND_R, this.w, this.h, 1, 0),
    walk_l: new Sprite(this.parent.imageManager.PLAYER_WALK_L, this.w, this.h, 2, 0.2),
    walk_r: new Sprite(this.parent.imageManager.PLAYER_WALK_R, this.w, this.h, 2, 0.2),
    jump_l: new Sprite(this.parent.imageManager.PLAYER_JUMP_L, this.w, this.h, 1, 0),
    jump_r: new Sprite(this.parent.imageManager.PLAYER_JUMP_R, this.w, this.h, 1, 0)
  };
  this.sprite = this.sprites.stand_r;
  this.gun = new Gun(this);
}

Player.prototype = Object.create(Movable.prototype);
Player.prototype.constructor = Player;

Player.prototype.collide = function(collisionData) {
  //if (this.jumping && (collisionData.dir == 'b' || collisionData.dir == 't')) this.parent.audioManager.playSound('LAND');
  Movable.prototype.collide.call(this, collisionData);
};

//----------------- Enemy -----------------//

function Enemy(parent, x, y, amplitude) {
  Movable.call(this, parent, x, y);
  if (amplitude === undefined) amplitude = 5;
  this.amplitude = { current: 0, max: amplitude };
  var tMin = (this.amplitude.max > 0) ? 10 : 15;
  var tMax = (this.amplitude.max > 0) ? 15 : 20;
  this.shootTimer = new Timer(getRandomInt(tMin, tMax) / 10);
  this.sprites = {
    stand_l: new Sprite(this.parent.imageManager.ENEMY_STAND_L, this.w, this.h, 1, 0),
    stand_r: new Sprite(this.parent.imageManager.ENEMY_STAND_R, this.w, this.h, 1, 0),
    walk_l: new Sprite(this.parent.imageManager.ENEMY_WALK_L, this.w, this.h, 2, 0.2),
    walk_r: new Sprite(this.parent.imageManager.ENEMY_WALK_R, this.w, this.h, 2, 0.2)
  };
  this.gun = new Gun(this);
  this.lives = 20; this.speed = 10;
  if (this.amplitude.max) this.startWalk(this.direction);
  this.setSprite();
}

Enemy.prototype = Object.create(Movable.prototype);
Enemy.prototype.constructor = Enemy;

Enemy.prototype.update = function(fTime) {
  Movable.prototype.update.call(this, fTime);
  
  if (!this.alive) { return; }
  
  if (this.amplitude.max > 0) {
    this.amplitude.current += this.velocity.x * fTime;
    if (Math.abs(this.amplitude.current) >= this.amplitude.max) {
      this.turnAround();
      this.amplitude.current = 0;
    }
  } else {
    if ((this.parent.player.x > this.x && this.direction == 'l')
     || (this.parent.player.x < this.x && this.direction == 'r')) {
      this.turnAround();
    }
  }
  
  var that = this;
  function distToPlayerX() {
    return Math.abs(that.parent.player.x - that.x);
  }
  function distToPlayerY() {
    return Math.abs(that.parent.player.y - that.y);
  }
  function facingPlayer() {
    return (that.direction == 'l') ? that.parent.player.x < that.x : that.parent.player.x > that.x;
  }
  
  if (this.shootTimer.tick(fTime)) {
    this.shootTimer.reset();
    if (facingPlayer() && distToPlayerX() < this.parent.drawDimensions.w - 10 && distToPlayerY() < this.parent.drawDimensions.h - 20) {
      this.gun.shoot(this.parent.player.x + 1, this.parent.player.y + 2);
    }
  }
  
};

Enemy.prototype.collide = function(collisionData) {
  if (collisionData.dir == 'l' || collisionData.dir == 'r') {
    this.turnAround();
    this.amplitude.current = 0;
  }
  Movable.prototype.collide.call(this, collisionData);
};

Enemy.prototype.die = function() {
  if (this.alive) {
    this.parent.parent.enemyDown();
  }
  Movable.prototype.die.call(this);
};

//------------ Move animation -------------//

function MoveAnimation(parent) {
  this.parent = parent;
  this.speed = 30;
  this.destination = { x: 0, y: 0 };
  this.velocity = { x: 0, y: 0 };
  this.isAnimating = false;
}

MoveAnimation.prototype.update = function(fTime) {
  if (this.isAnimating) {
    var addX, addY;
    addX = fTime * this.velocity.x;
    addY = fTime * this.velocity.y;
    this.parent.x += addX; this.parent.y += addY;
    if (((this.velocity.x > 0) && (this.parent.x >= this.destination.x))
     || ((this.velocity.x < 0) && (this.parent.x <= this.destination.x))
     || ((this.velocity.y > 0) && (this.parent.y >= this.destination.y))
     || ((this.velocity.y < 0) && (this.parent.y <= this.destination.y))) { this.parent.stopMove(); }
  }
  return this.isAnimating;
};

MoveAnimation.prototype.start = function(dX, dY) {
  this.destination.x = dX - this.parent.hW;
  this.destination.y = dY - this.parent.hH;
  var tX = this.destination.x - this.parent.x;
  var tY = this.destination.y - this.parent.y;
  var distance = Math.sqrt(Math.pow(tX, 2) + Math.pow(tY, 2));
  if (!distance) { return; }
  this.velocity.x = (tX / distance) * this.speed;
  this.velocity.y = (tY / distance) * this.speed;
  this.isAnimating = true;
};

MoveAnimation.prototype.stop = function(correctPosition) {
  if (correctPosition === undefined) correctPosition = true;
  this.isAnimating = false;
  if (correctPosition) {
    this.parent.x = this.destination.x;
    this.parent.y = this.destination.y;
  }
};