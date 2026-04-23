// === SCENERY CREATION ===

/* Important Note:
    The background images will be drawn in order from top to bottom, so put the ones in the far background first, then work forward. Note that none of the background images can go in front of Hallebot.
*/

// TODO 1: Create more scenery instances
const scenery = {
  moon: {
    imageUrl: "images/backgrounds/moon.png",
    loopWidth: 0,
    instances: [{ x: 100, y: 175, width: 150, height: 150 }],
  },
  building: {
    imageUrl: "images/backgrounds/building.png",
    loopWidth: 1400,
    instances: [{ x: 1000, width: 150, height: 200, speedX: -2 }, {x: 540, width: 300, height: 200, speedX: -2}, {x: 100, width: 50, height: 150, speedX: -2}, { x: 50, width: 100, height: 200, speedX: -2}],
  },
    lamp: {
    imageUrl: "images/backgrounds/lamp.png",
    loopWidth: 1400,
    instances: [{ x: 1000, width: 50, height: 150, speedX: -2 }, { x: 500, width: 50, height: 150, speedX: -2}, { x: 1300, width: 50, height: 150, speedX: -2}, { x: 200, width: 50, height: 150, speedX: -2}],
  },
};
