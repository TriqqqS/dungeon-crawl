export default class LevelMakerKit {
  createGrassGround(occupiedBy = false) {
    return {
      name: "grass",
      type: "road",
      sprite: "/sprites/environment/grass1Tile.png",
      occupiedBy: occupiedBy,
      item: null,
      underAttack: false,
      top: 0,
      left: 0,
    };
  }

  createWoodenBlock() {
    return {
      name: "wood",
      type: "destructable",
      sprite: "/sprites/environment/wooden1Tile.png",
      top: 0,
      left: 0,
    };
  }

  createStoneBlock() {
    return {
      name: "stone",
      type: "undestructable",
      sprite: "/sprites/environment/stone1Tile.png",
      top: 0,
      left: 0,
    };
  }

  createLadder(entryLevel = 1, exitLevel = 2) {
    return {
      name: "ladder",
      entryLevel: entryLevel,
      exitLevel: exitLevel,
      type: "portal",
      sprite: "/sprites/environment/ladder1Tile.png",
      top: 0,
      left: 0,
    };
  }
  createPlayer(startingPoint = [0, 0], playerType = "knight") {
    return {
      name: "player",
      type: "creature",
      hp: 5,
      mp: 0,
      dmg: 2,
      armor: 3,
      sprite: `/sprites/characters/${playerType}Sprite1.png`,
      x: startingPoint[0],
      y: startingPoint[1],
    };
  }
  createMonster(startingPoint = [0, 0], monsterType = "ogre") {
    return {
      name: "monster",
      type: "creature",
      hp: 6,
      mp: 0,
      dmg: 2,
      armor: 2,
      sprite: `/sprites/characters/${monsterType}Sprite1.png`,
      x: startingPoint[0],
      y: startingPoint[1],
    };
  }
}
