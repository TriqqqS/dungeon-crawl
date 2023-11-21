export const aiLogic = (attackerId, pattern, creatures) => {
  const monster = creatures[attackerId];
  const player = creatures[0];

  let direction = "stand";

  if (monster.hp > 0) {
    if (monster.top === player.top && monster.left > player.left) {
      direction = "left";
      if (monster.left - player.left !== 1) {
        pattern[monster.top]
          .slice(player.left + 1, monster.left)
          .forEach((tile) => {
            if (tile.type !== "road") direction = "stand";
          });
        return direction;
      } else return direction;
    }

    if (monster.top === player.top && monster.left < player.left) {
      direction = "right";
      if (player.left - monster.left !== 1) {
        pattern[monster.top]
          .slice(monster.left + 1, player.left)
          .forEach((tile) => {
            if (tile.type !== "road") direction = "stand";
          });
        return direction;
      } else return direction;
    }

    if (monster.left === player.left && monster.top > player.top) {
      direction = "top";
      if (monster.top - player.top !== 1) {
        pattern.slice(player.top + 1, monster.top).forEach((row) => {
          if (row[player.left].type !== "road") direction = "stand";
        });
        return direction;
      } else return direction;
    }

    if (monster.left === player.left && monster.top < player.top) {
      direction = "bot";
      if (player.top - monster.top !== 1) {
        pattern.slice(monster.top + 1, player.top).forEach((row) => {
          if (row[player.left].type !== "road") direction = "stand";
        });
        return direction;
      } else return direction;
    }

    if (monster.actionDirection) {
      console.log(`CHASING`);

      return monster.actionDirection;
    }
  }

  return direction;
};
