import LevelMakerKit from "../utils/levelMakerKit";
import creaturesDb from "./creaturesDb";

const lm = new LevelMakerKit();

// setting up tile's coordinates and creatures inside level layout
const setTilePosition = (level) => {
  level.pattern.map((row, top) => {
    return row.map((col, left) => {
      const cr = level.creatures.find(
        (creature) => creature.top === top && creature.left === left
      );
      if (cr) col.occupiedBy = { id: cr.id };

      if (top === level.exit.top && left === level.exit.left) col.exit = true;

      col.top = top;
      col.left = left;

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
    exit: { top: 0, left: 6 },
    creatures: [
      { ...creaturesDb.player, id: 0, top: 6, left: 0 },
      { ...creaturesDb.ogre1, id: 1, top: 1, left: 0 },
      { ...creaturesDb.ogre1, id: 2, top: 1, left: 6 },
      { ...creaturesDb.ogre1, id: 3, top: 4, left: 2 },
    ],

    items: [{ id: 0, type: "ladder", top: 0, left: 6 }],

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
