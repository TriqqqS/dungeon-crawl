export default class LevelMakerKit {
  createGrassGround() {
    return {
      name: "grass",
      type: "road",
      sprite: "/sprites/environment/grass1Tile.png",
      exit: false,
      occupiedBy: false,
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
      exit: false,
      sprite: "/sprites/environment/wooden1Tile.png",
      top: 0,
      left: 0,
    };
  }

  createStoneBlock() {
    return {
      name: "stone",
      type: "undestructable",
      exit: false,
      sprite: "/sprites/environment/stone1Tile.png",
      top: 0,
      left: 0,
    };
  }
}
