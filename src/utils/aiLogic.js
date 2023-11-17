export const aiLogic = (attackerId, pattern, creatures) => {
  let direction = "stand";
  // const {hp, top, left} = creatures[attackerId]

  if (creatures[attackerId].hp > 0) {
    if (
      creatures[attackerId].top === creatures[0].top &&
      creatures[attackerId].left > creatures[0].left
    ) {
      direction = "left";
      if (creatures[attackerId].left - creatures[0].left !== 1) {
        pattern[creatures[attackerId].top]
          .slice(creatures[0].left + 1, creatures[attackerId].left)
          .forEach((tile) => {
            if (tile.type !== "road") direction = "stand";
          });
        return direction;
      } else return direction;
    }

    if (
      creatures[attackerId].top === creatures[0].top &&
      creatures[attackerId].left < creatures[0].left
    ) {
      direction = "right";
      if (creatures[0].left - creatures[attackerId].left !== 1) {
        pattern[creatures[attackerId].top]
          .slice(creatures[attackerId].left + 1, creatures[0].left)
          .forEach((tile) => {
            if (tile.type !== "road") direction = "stand";
          });
        return direction;
      } else return direction;
    }

    if (
      creatures[attackerId].left === creatures[0].left &&
      creatures[attackerId].top > creatures[0].top
    ) {
      direction = "top";
      if (creatures[attackerId].top - creatures[0].top !== 1) {
        pattern
          .slice(creatures[0].top + 1, creatures[attackerId].top)
          .forEach((row) => {
            if (row[creatures[0].left].type !== "road") direction = "stand";
          });
        return direction;
      } else return direction;
    }

    if (
      creatures[attackerId].left === creatures[0].left &&
      creatures[attackerId].top < creatures[0].top
    ) {
      direction = "bot";
      if (creatures[0].top - creatures[attackerId].top !== 1) {
        pattern
          .slice(creatures[attackerId].top + 1, creatures[0].top)
          .forEach((row) => {
            if (row[creatures[0].left].type !== "road") direction = "stand";
          });
        return direction;
      } else return direction;
    }

    if (creatures[attackerId].actionDirection) {
      console.log(`CHASING`);

      return creatures[attackerId].actionDirection;
    }
  }

  return direction;
};

// return data for dispatch
