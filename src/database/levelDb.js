import LevelMakerKit from "../utils/levelMakerKit";
import creaturesDb from "./creaturesDb";

const lm = new LevelMakerKit();

// setting up tile's coordinates and creatures inside level layout
const setTilePosition = (level) => {
  level.pattern.map((row, top) => {
    return row.map((col, left) => {
      const cr = level.creatures.filter(
        (creature) => creature.top === top && creature.left === left
      );
      col.top = top;
      col.left = left;
      if (cr[0]) col.occupiedBy = { id: cr[0].id };
      return col;
    });
  });
  return level;
};

const levelDb = {
  1: {
    level: 1,
    size: 7,
    startPosition: { top: 6, left: 0 },
    creatures: [
      { ...creaturesDb.player, id: 0, top: 2, left: 3 },
      { ...creaturesDb.ogre1, id: 1, top: 1, left: 0 },
      { ...creaturesDb.ogre1, id: 2, top: 1, left: 6 },
      { ...creaturesDb.ogre1, id: 3, top: 4, left: 1 },
    ],

    pattern: [
      [
        lm.createGrassGround(),
        lm.createGrassGround(),
        lm.createStoneBlock(),
        lm.createStoneBlock(),
        lm.createStoneBlock(),
        lm.createStoneBlock(),
        lm.createGrassGround(),
      ],
      [
        lm.createGrassGround(),
        lm.createGrassGround(),
        lm.createGrassGround(),
        lm.createGrassGround(),
        lm.createGrassGround(),
        lm.createGrassGround(),
        lm.createGrassGround(),
      ],
      [
        lm.createGrassGround(),
        lm.createStoneBlock(),
        lm.createStoneBlock(),
        lm.createGrassGround(),
        lm.createStoneBlock(),
        lm.createStoneBlock(),
        lm.createStoneBlock(),
      ],
      [
        lm.createStoneBlock(),
        lm.createStoneBlock(),
        lm.createStoneBlock(),
        lm.createGrassGround(),
        lm.createStoneBlock(),
        lm.createStoneBlock(),
        lm.createStoneBlock(),
      ],
      [
        lm.createGrassGround(),
        lm.createGrassGround(),
        lm.createGrassGround(),
        lm.createGrassGround(),
        lm.createGrassGround(),
        lm.createGrassGround(),
        lm.createGrassGround(),
      ],
      [
        lm.createGrassGround(),
        lm.createStoneBlock(),
        lm.createGrassGround(),
        lm.createStoneBlock(),
        lm.createStoneBlock(),
        lm.createGrassGround(),
        lm.createStoneBlock(),
      ],
      [
        lm.createGrassGround(),
        lm.createStoneBlock(),
        lm.createGrassGround(),
        lm.createStoneBlock(),
        lm.createGrassGround(),
        lm.createGrassGround(),
        lm.createStoneBlock(),
      ],
    ],
  },
};

const getLevel = (levelId) => {
  return setTilePosition(levelDb[levelId]);
};

export default getLevel;
