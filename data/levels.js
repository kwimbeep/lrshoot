/*********************************
 LR Shoot - data/levels.js
 Copyright © 2014 Marcis Berzins (berzins.marcis@gmail.com)
 This program is licensed under the terms of the GNU General Public License: http://www.gnu.org/licenses/gpl-3.0.txt
 *********************************/

var levels = [];

//------------------ 1 --------------------//
levels.push({
  w: 200, h: 32,
  pX: 2, pY: 24,
  titleImage: 'LVL_1_TITLE',
  backgrounds: [
    { w: 100, h: 32, offset: { x: 0, y: 0, multiplier: 0 }, image: 'LVL_1_BG_1' },
    { w: 200, h: 32, offset: { x: 0, y: 0, multiplier: 0 }, image: 'LVL_1_BG_2' }
  ],
  blocks: [
    // floor
    { x: 0, y: 30, w: 200, h: 2, hW: 100, hH: 1, color: 'hsla(0, 0%, 30%, 1)' },
    
    // first block
    { x: 25, y: 26, w: 2, h: 4, hW: 1, hH: 2, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 27, y: 20, w: 18, h: 10, hW: 9, hH: 5, color: 'hsla(0, 0%, 30%, 1)' },
    
    // second block
    { x: 55, y: 26, w: 2, h: 4, hW: 1, hH: 2, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 57, y: 20, w: 18, h: 10, hW: 9, hH: 5, color: 'hsla(0, 0%, 30%, 1)' },
    
    // steps down
    { x: 75, y: 21, w: 3, h: 9, hW: 1.5, hH: 4.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 78, y: 22, w: 3, h: 8, hW: 1.5, hH: 4, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 81, y: 23, w: 3, h: 7, hW: 1.5, hH: 3.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 84, y: 24, w: 3, h: 6, hW: 1.5, hH: 3, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 87, y: 25, w: 3, h: 5, hW: 1.5, hH: 2.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 90, y: 26, w: 3, h: 4, hW: 1.5, hH: 2, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 93, y: 27, w: 3, h: 3, hW: 1.5, hH: 1.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 96, y: 28, w: 3, h: 2, hW: 1.5, hH: 1, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 99, y: 29, w: 3, h: 1, hW: 1.5, hH: 1.5, color: 'hsla(0, 0%, 30%, 1)' },
    
    // blocks
    { x: 110, y: 25, w: 5, h: 5, hW: 2.5, hH: 2.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 115, y: 20, w: 5, h: 10, hW: 2.5, hH: 5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 120, y: 25, w: 5, h: 5, hW: 2.5, hH: 2.5, color: 'hsla(0, 0%, 30%, 1)' },
    
    // platforms
    { x: 130, y: 15, w: 5, h: 1, hW: 2.5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 142, y: 21, w: 3, h: 1, hW: 1.5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    
    // high blocks
    { x: 145, y: 15, w: 20, h: 15, hW: 10, hH: 7.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 165, y: 12, w: 20, h: 18, hW: 10, hH: 9, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 185, y: 9, w: 15, h: 21, hW: 7.5, hH: 10.5, color: 'hsla(0, 0%, 30%, 1)' }
  ],
  enemies: [
    { x: 38, y: 14, amplitude: 0 },
    { x: 52, y: 24, amplitude: 0 },
    { x: 65, y: 14, amplitude: 8 },
    { x: 90, y: 20, amplitude: 0 },
    { x: 107, y: 24, amplitude: 0 },
    { x: 125, y: 24, amplitude: 25 },
    { x: 131, y: 9, amplitude: 0 },
    { x: 142, y: 15, amplitude: 0 },
    { x: 160, y: 9, amplitude: 10 },
    { x: 180, y: 6, amplitude: 10 },
    { x: 190, y: 3, amplitude: 5 }
  ]
});

//------------------ 2 --------------------//
levels.push({
  w: 200, h: 32,
  pX: 9, pY: 3,
  titleImage: 'LVL_2_TITLE',
  backgrounds: [
    { w: 100, h: 32, offset: { x: 0, y: 0, multiplier: 0 }, image: 'LVL_2_BG_1' }
  ],
  blocks: [
    // floor
    { x: 0, y: 30, w: 200, h: 2, hW: 100, hH: 1, color: 'hsla(0, 0%, 30%, 1)' },
    
    // high blocks
    { x: 0, y: 9, w: 20, h: 21, hW: 10, hH: 10.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 20, y: 6, w: 20, h: 18, hW: 10, hH: 9, color: 'hsla(0, 0%, 30%, 1)' },
    
    // platforms
    { x: 40, y: 12, w: 5, h: 1, hW: 2.5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 40, y: 19, w: 10, h: 1, hW: 5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    
    // middle platforms
    { x: 55, y: 15, w: 3, h: 2, hW: 1.5, hH: 1, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 55, y: 25, w: 20, h: 2, hW: 10, hH: 1, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 62, y: 20, w: 6, h: 2, hW: 3, hH: 1, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 72, y: 15, w: 3, h: 2, hW: 1.5, hH: 1, color: 'hsla(0, 0%, 30%, 1)' },
    
    // platforms
    { x: 80, y: 19, w: 10, h: 1, hW: 5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 85, y: 12, w: 5, h: 1, hW: 2.5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    
    // high blocks
    { x: 90, y: 6, w: 20, h: 18, hW: 10, hH: 9, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 110, y: 9, w: 20, h: 21, hW: 10, hH: 10.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 130, y: 15, w: 20, h: 15, hW: 10, hH: 7.5, color: 'hsla(0, 0%, 30%, 1)' },
    
    { x: 165, y: 24, w: 5, h: 6, hW: 2.5, hH: 3, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 185, y: 24, w: 5, h: 6, hW: 2.5, hH: 3, color: 'hsla(0, 0%, 30%, 1)' }
  ],
  enemies: [
    { x: 20, y: 24, amplitude: 25 },
    { x: 37, y: 0, amplitude: 0 },
    { x: 41, y: 6, amplitude: 0 },
    { x: 43, y: 13, amplitude: 0 },
    { x: 84, y: 13, amplitude: 0 },
    { x: 86, y: 6, amplitude: 0 },
    { x: 107, y: 24, amplitude: 25 },
    { x: 110, y: 3, amplitude: 15 },
    { x: 130, y: 9, amplitude: 15 },
    { x: 150, y: 24, amplitude: 10 },
    { x: 170, y: 24, amplitude: 10 }
  ]
});

//------------------ 3 --------------------//
levels.push({
  w: 200, h: 32,
  pX: 2, pY: 24,
  titleImage: 'LVL_3_TITLE',
  backgrounds: [
    { w: 100, h: 32, offset: { x: 0, y: 0, multiplier: 0 }, image: 'LVL_3_BG_1' }
  ],
  blocks: [
    // floor
    { x: 0, y: 30, w: 200, h: 2, hW: 100, hH: 1, color: 'hsla(0, 0%, 30%, 1)' },
    
    // block steps
    { x: 10, y: 25, w: 10, h: 5, hW: 5, hH: 2.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 20, y: 20, w: 10, h: 10, hW: 5, hH: 5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 30, y: 15, w: 10, h: 15, hW: 5, hH: 7.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 40, y: 10, w: 10, h: 20, hW: 5, hH: 10, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 50, y: 6, w: 10, h: 24, hW: 5, hH: 12, color: 'hsla(0, 0%, 30%, 1)' },
    
    // pit
    { x: 60, y: 9, w: 3, h: 22, hW: 1.5, hH: 11, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 63, y: 14, w: 7, h: 17, hW: 3.5, hH: 8.5, color: 'hsla(0, 0%, 30%, 1)' },
    
    // high block
    { x: 70, y: 6, w: 10, h: 24, hW: 5, hH: 12, color: 'hsla(0, 0%, 30%, 1)' },
    
    // steps down
    { x: 80, y: 7, w: 1, h: 23, hW: 0.5, hH: 11.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 81, y: 8, w: 1, h: 22, hW: 0.5, hH: 11, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 82, y: 9, w: 1, h: 21, hW: 0.5, hH: 10.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 83, y: 10, w: 1, h: 20, hW: 0.5, hH: 10, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 84, y: 11, w: 1, h: 19, hW: 0.5, hH: 9.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 85, y: 12, w: 1, h: 18, hW: 0.5, hH: 9, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 86, y: 13, w: 1, h: 17, hW: 0.5, hH: 8.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 87, y: 14, w: 1, h: 16, hW: 0.5, hH: 8, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 88, y: 15, w: 1, h: 15, hW: 0.5, hH: 7.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 89, y: 16, w: 1, h: 14, hW: 0.5, hH: 7, color: 'hsla(0, 0%, 30%, 1)' },
    
    // downstairs
    { x: 90, y: 17, w: 30, h: 13, hW: 15, hH: 6.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 97, y: 9, w: 3, h: 8, hW: 1.5, hH: 4, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 100, y: 13, w: 3, h: 4, hW: 1.5, hH: 2, color: 'hsla(0, 0%, 30%, 1)' },
    
    // high block + edge 
    { x: 120, y: 6, w: 10, h: 24, hW: 5, hH: 12, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 112, y: 6, w: 8, h: 2, hW: 4, hH: 1, color: 'hsla(0, 0%, 30%, 1)' },
    
    // long high block + upper platforms
    { x: 130, y: 7, w: 50, h: 23, hW: 25, hH: 11.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 135, y: 0, w: 10, h: 1, hW: 5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 150, y: 0, w: 10, h: 1, hW: 5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 165, y: 0, w: 10, h: 1, hW: 5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 180, y: 0, w: 10, h: 1, hW: 5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    
    // narrow steps down
    { x: 180, y: 13, w: 3, h: 17, hW: 1.5, hH: 8.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 183, y: 19, w: 3, h: 11, hW: 1.5, hH: 5.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 186, y: 24, w: 3, h: 6, hW: 1.5, hH: 3, color: 'hsla(0, 0%, 30%, 1)' },
    
    // end passage
    { x: 199, y: -50, w: 1, h: 60, hW: 0.5, hH: 30, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 199, y: 16, w: 1, h: 14, hW: 0.5, hH: 7, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 197, y: 16, w: 2, h: 1, hW: 1, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' }
  ],
  enemies: [
    { x: 17, y: 19, amplitude: 7 },
    { x: 25, y: 14, amplitude: 7 },
    { x: 33, y: 9, amplitude: 7 },
    { x: 41, y: 4, amplitude: 7 },
    { x: 67, y: 8, amplitude: 0 },
    { x: 70, y: 0, amplitude: 7 },
    { x: 94, y: 11, amplitude: 0 },
    { x: 103, y: 11, amplitude: 14 },
    { x: 110, y: 11, amplitude: 14 },
    { x: 112, y: 0, amplitude: 0 },
    { x: 130, y: 1, amplitude: 47 },
    { x: 140, y: 1, amplitude: 37 },
    { x: 150, y: 1, amplitude: 27 },
    { x: 160, y: 1, amplitude: 17 },
    { x: 196, y: 24, amplitude: 0 },
    { x: 197, y: 10, amplitude: 0 }
  ]
});

//------------------ 4 --------------------//
levels.push({
  w: 200, h: 32,
  pX: 2, pY: 10,
  titleImage: 'LVL_4_TITLE',
  backgrounds: [
    { w: 100, h: 32, offset: { x: 0, y: 0, multiplier: 0 }, image: 'LVL_4_BG_1' }
  ],
  blocks: [
    // floor
    { x: 0, y: 30, w: 200, h: 2, hW: 100, hH: 1, color: 'hsla(0, 0%, 30%, 1)' },
    
    // start tunnel
    { x: 0, y: 0, w: 13, h: 10, hW: 6.5, hH: 5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 0, y: 16, w: 10, h: 14, hW: 5, hH: 7, color: 'hsla(0, 0%, 30%, 1)' },
    
    // step down
    { x: 13, y: 0, w: 4, h: 16, hW: 2, hH: 8, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 10, y: 22, w: 10, h: 8, hW: 5, hH: 4, color: 'hsla(0, 0%, 30%, 1)' },
    
    // step up
    { x: 17, y: 0, w: 13, h: 10, hW: 6.5, hH: 5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 20, y: 16, w: 35, h: 14, hW: 17.5, hH: 7, color: 'hsla(0, 0%, 30%, 1)' },
    
    // platform + upper blocks
    { x: 35, y: 9, w: 7, h: 1, hW: 3.5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 30, y: 0, w: 28, h: 3, hW: 14, hH: 1.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 47, y: 0, w: 11, h: 10, hW: 5.5, hH: 5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 30, y: 3, w: 1, h: 1, hW: 0.5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 46, y: 3, w: 1, h: 1, hW: 0.5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    
    // 2 steps down
    { x: 58, y: 0, w: 6, h: 16, hW: 3, hH: 8, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 55, y: 22, w: 6, h: 8, hW: 3, hH: 4, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 64, y: 0, w: 6, h: 22, hW: 3, hH: 11, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 61, y: 28, w: 12, h: 2, hW: 6, hH: 1, color: 'hsla(0, 0%, 30%, 1)' },
    
    // 3 steps up
    { x: 70, y: 0, w: 6, h: 16, hW: 3, hH: 8, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 73, y: 22, w: 6, h: 8, hW: 3, hH: 4, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 76, y: 0, w: 6, h: 10, hW: 3, hH: 5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 79, y: 16, w: 6, h: 14, hW: 3, hH: 7, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 82, y: 0, w: 41, h: 4, hW: 20.5, hH: 2, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 85, y: 10, w: 10, h: 20, hW: 5, hH: 10, color: 'hsla(0, 0%, 30%, 1)' },
    
    // lower blocks + platform
    { x: 95, y: 17, w: 17, h: 13, hW: 8.5, hH: 6.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 100, y: 10, w: 7, h: 1, hW: 3.5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 112, y: 10, w: 8, h: 20, hW: 4, hH: 10, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 95, y: 16, w: 1, h: 1, hW: 0.5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 111, y: 16, w: 1, h: 1, hW: 0.5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    
    // small steps down
    { x: 123, y: 0, w: 10, h: 5, hW: 5, hH: 2.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 120, y: 11, w: 10, h: 19, hW: 5, hH: 9.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 133, y: 0, w: 10, h: 6, hW: 5, hH: 3, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 130, y: 12, w: 10, h: 18, hW: 5, hH: 9, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 143, y: 0, w: 10, h: 7, hW: 5, hH: 3.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 140, y: 13, w: 10, h: 17, hW: 5, hH: 8.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 153, y: 0, w: 8, h: 8, hW: 4, hH: 4, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 150, y: 14, w: 8, h: 16, hW: 4, hH: 8, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 161, y: 0, w: 6, h: 9, hW: 3, hH: 4.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 158, y: 15, w: 6, h: 15, hW: 3, hH: 7.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 167, y: 0, w: 4, h: 10, hW: 2, hH: 5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 164, y: 16, w: 4, h: 14, hW: 2, hH: 7, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 171, y: 0, w: 4, h: 11, hW: 2, hH: 5.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 168, y: 17, w: 4, h: 13, hW: 2, hH: 6.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 175, y: 0, w: 4, h: 12, hW: 2, hH: 6, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 172, y: 18, w: 4, h: 12, hW: 2, hH: 6, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 179, y: 0, w: 4, h: 13, hW: 2, hH: 6.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 176, y: 19, w: 10, h: 11, hW: 5, hH: 5.5, color: 'hsla(0, 0%, 30%, 1)' },
    
    //step up and down
    { x: 183, y: 0, w: 9, h: 9, hW: 4.5, hH: 4.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 186, y: 15, w: 3, h: 15, hW: 1.5, hH: 7.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 192, y: 0, w: 8, h: 13, hW: 4, hH: 6.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 189, y: 19, w: 11, h: 11, hW: 5.5, hH: 5.5, color: 'hsla(0, 0%, 30%, 1)' },
  ],
  enemies: [
    { x: 25, y: 10, amplitude: 0 },
    { x: 35, y: 3, amplitude: 0 },
    { x: 39, y: 3, amplitude: 0 },
    { x: 58, y: 16, amplitude: 0 },
    { x: 64, y: 22, amplitude: 9 },
    { x: 76, y: 16, amplitude: 0 },
    { x: 82, y: 10, amplitude: 0 },
    { x: 85, y: 4, amplitude: 7 },
    { x: 100, y: 4, amplitude: 4 },
    { x: 96, y: 11, amplitude: 12 },
    { x: 120, y: 5, amplitude: 7 },
    { x: 140, y: 7, amplitude: 7 },
    { x: 158, y: 9, amplitude: 3 },
    { x: 176, y: 13, amplitude: 7 },
    { x: 186, y: 9, amplitude: 0 },
  ]
});

//------------------ 5 --------------------//
levels.push({
  w: 200, h: 32,
  pX: 1, pY: 13,
  titleImage: 'LVL_5_TITLE',
  backgrounds: [
    { w: 100, h: 32, offset: { x: 0, y: 0, multiplier: 0 }, image: 'LVL_5_BG_1' }
  ],
  blocks: [
    // start passage
    { x: 0, y: 0, w: 5, h: 13, hW: 2.5, hH: 6.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 0, y: 19, w: 5, h: 13, hW: 2.5, hH: 6.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 6, y: 0, w: 4, h: 13, hW: 2, hH: 6.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 6, y: 19, w: 4, h: 13, hW: 2, hH: 6.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 11, y: 0, w: 3, h: 13, hW: 1.5, hH: 6.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 11, y: 19, w: 3, h: 13, hW: 1.5, hH: 6.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 15, y: 0, w: 2, h: 13, hW: 1, hH: 6.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 15, y: 19, w: 2, h: 13, hW: 1, hH: 6.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 18, y: 0, w: 1, h: 13, hW: 0.5, hH: 6.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 18, y: 19, w: 1, h: 13, hW: 0.5, hH: 6.5, color: 'hsla(0, 0%, 30%, 1)' },
    
    // outer narrowing
    { x: 20, y: 2, w: 1, h: 11, hW: 0.5, hH: 5.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 20, y: 19, w: 1, h: 11, hW: 0.5, hH: 5.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 22, y: 4, w: 1, h: 9, hW: 0.5, hH: 4.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 22, y: 19, w: 1, h: 9, hW: 0.5, hH: 4.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 24, y: 6, w: 1, h: 7, hW: 0.5, hH: 3.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 24, y: 19, w: 1, h: 7, hW: 0.5, hH: 3.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 26, y: 8, w: 1, h: 5, hW: 0.5, hH: 2.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 26, y: 19, w: 1, h: 5, hW: 0.5, hH: 2.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 28, y: 10, w: 1, h: 3, hW: 0.5, hH: 1.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 28, y: 19, w: 1, h: 3, hW: 0.5, hH: 1.5, color: 'hsla(0, 0%, 30%, 1)' },
    
    // dot trail
    { x: 30, y: 12, w: 1, h: 1, hW: 0.5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 30, y: 19, w: 1, h: 1, hW: 0.5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 32, y: 12, w: 1, h: 1, hW: 0.5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 32, y: 19, w: 1, h: 1, hW: 0.5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 34, y: 12, w: 1, h: 1, hW: 0.5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 34, y: 19, w: 1, h: 1, hW: 0.5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 36, y: 12, w: 1, h: 1, hW: 0.5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 36, y: 19, w: 1, h: 1, hW: 0.5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 38, y: 12, w: 1, h: 1, hW: 0.5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 38, y: 19, w: 1, h: 1, hW: 0.5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 40, y: 12, w: 1, h: 1, hW: 0.5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 40, y: 19, w: 1, h: 1, hW: 0.5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 42, y: 12, w: 1, h: 1, hW: 0.5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 42, y: 19, w: 1, h: 1, hW: 0.5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 44, y: 12, w: 1, h: 1, hW: 0.5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 44, y: 19, w: 1, h: 1, hW: 0.5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 46, y: 12, w: 1, h: 1, hW: 0.5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 46, y: 19, w: 1, h: 1, hW: 0.5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 48, y: 12, w: 1, h: 1, hW: 0.5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 48, y: 19, w: 1, h: 1, hW: 0.5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 50, y: 12, w: 1, h: 1, hW: 0.5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 50, y: 19, w: 1, h: 1, hW: 0.5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    
    // dots to lines
    { x: 52, y: 12, w: 2, h: 1, hW: 2, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 52, y: 19, w: 2, h: 1, hW: 2, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 55, y: 12, w: 3, h: 1, hW: 1.5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 55, y: 19, w: 3, h: 1, hW: 1.5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 59, y: 12, w: 4, h: 1, hW: 2, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 59, y: 19, w: 4, h: 1, hW: 2, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 61, y: 12, w: 5, h: 1, hW: 2.5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 61, y: 19, w: 5, h: 1, hW: 2.5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 67, y: 12, w: 6, h: 1, hW: 3, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 67, y: 19, w: 6, h: 1, hW: 3, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 74, y: 12, w: 7, h: 1, hW: 3.5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 74, y: 19, w: 7, h: 1, hW: 3.5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 82, y: 12, w: 8, h: 1, hW: 4, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 82, y: 19, w: 8, h: 1, hW: 4, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 91, y: 12, w: 9, h: 1, hW: 4.5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 91, y: 19, w: 9, h: 1, hW: 4.5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 101, y: 12, w: 10, h: 1, hW: 5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 101, y: 19, w: 10, h: 1, hW: 5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    
    // long lines
    { x: 112, y: 12, w: 88, h: 1, hW: 44, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 112, y: 19, w: 88, h: 1, hW: 44, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    
    // enemy separators
    { x: 115, y: 9, w: 1, h: 1, hW: 0.5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 115, y: 22, w: 1, h: 1, hW: 0.5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 121, y: 9, w: 1, h: 1, hW: 0.5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 121, y: 22, w: 1, h: 1, hW: 0.5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 127, y: 9, w: 1, h: 1, hW: 0.5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 127, y: 22, w: 1, h: 1, hW: 0.5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 133, y: 9, w: 1, h: 1, hW: 0.5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 133, y: 22, w: 1, h: 1, hW: 0.5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 139, y: 9, w: 1, h: 1, hW: 0.5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 139, y: 22, w: 1, h: 1, hW: 0.5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 145, y: 9, w: 1, h: 1, hW: 0.5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 145, y: 22, w: 1, h: 1, hW: 0.5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 151, y: 9, w: 1, h: 1, hW: 0.5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 151, y: 22, w: 1, h: 1, hW: 0.5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 157, y: 9, w: 1, h: 1, hW: 0.5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 157, y: 22, w: 1, h: 1, hW: 0.5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    
    { x: 118, y: 4, w: 1, h: 1, hW: 0.5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 118, y: 27, w: 1, h: 1, hW: 0.5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 124, y: 4, w: 1, h: 1, hW: 0.5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 124, y: 27, w: 1, h: 1, hW: 0.5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 130, y: 4, w: 1, h: 1, hW: 0.5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 130, y: 27, w: 1, h: 1, hW: 0.5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 136, y: 4, w: 1, h: 1, hW: 0.5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 136, y: 27, w: 1, h: 1, hW: 0.5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 142, y: 4, w: 1, h: 1, hW: 0.5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 142, y: 27, w: 1, h: 1, hW: 0.5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 148, y: 4, w: 1, h: 1, hW: 0.5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 148, y: 27, w: 1, h: 1, hW: 0.5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 154, y: 4, w: 1, h: 1, hW: 0.5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
    { x: 154, y: 27, w: 1, h: 1, hW: 0.5, hH: 0.5, color: 'hsla(0, 0%, 30%, 1)' },
  ],
  enemies: [
    { x: 117, y: 6, amplitude: 0 },
    { x: 117, y: 21, amplitude: 0 },
    { x: 123, y: 6, amplitude: 0 },
    { x: 123, y: 21, amplitude: 0 },
    { x: 129, y: 6, amplitude: 0 },
    { x: 129, y: 21, amplitude: 0 },
    { x: 135, y: 6, amplitude: 0 },
    { x: 135, y: 21, amplitude: 0 },
    { x: 141, y: 6, amplitude: 0 },
    { x: 141, y: 21, amplitude: 0 },
    { x: 147, y: 6, amplitude: 0 },
    { x: 147, y: 21, amplitude: 0 },
    { x: 153, y: 6, amplitude: 0 },
    { x: 153, y: 21, amplitude: 0 },
    { x: 193, y: 13, amplitude: 0 },
  ]
});