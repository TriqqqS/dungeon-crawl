const pathCheck = (top, left, pattern, levelSize) => {
  const insideLayout =
    top >= 0 && top < levelSize && left >= 0 && left < levelSize ? true : false;

  if (
    insideLayout &&
    pattern[top][left].type === "road" &&
    pattern[top][left].occupiedBy === false
  ) {
    return "pathIsFree";
  } else {
    if (insideLayout && pattern[top][left].occupiedBy) return "pathIsOccupied";
  }
  return "pathIsBlocked";
};

const creatureMove = (
  top,
  left,
  prevTop,
  prevLeft,
  id,
  direction,
  pattern,
  creatures
) => {
  pattern[top][left].occupiedBy = pattern[prevTop][prevLeft].occupiedBy;
  pattern[prevTop][prevLeft].occupiedBy = false;
  creatures[id].top = top;
  creatures[id].left = left;
  creatures[id].actionDirection = direction;

  return {
    pattern: pattern,
    creatures: creatures,
  };
};

const creatureAttack = (top, left, id, direction, pattern, creatures) => {
  console.log(`ID: ${id} attacked`);
  const attacker = creatures[id];
  const target = creatures[pattern[top][left].occupiedBy.id];

  attacker.actionDirection = direction;

  if (target.hp > 0) {
    attacker.hitCounter++;
    attacker.animation = `attack-animation__${direction}AttackAnimation`;

    target.animation = "";
    target.hp = target.hp - attacker.dmg > 0 ? target.hp - attacker.dmg : 0;
    if (target.hp <= 0) {
      target.sprite = `${target.sprite}Dead`;
      pattern[top][left].occupiedBy = false;
    }
  }

  // if (id !== 0) attacker.chasing = true;

  return {
    pattern: pattern,
    creatures: creatures,
  };
};

const nothingHappens = (pattern, creatures) => {
  return {
    message: "pathIsBlocked",
    pattern: pattern,
    creatures: creatures,
  };
};

const commandHandler = (direction, id, levelState) => {
  const top = levelState.creatures[id].top;
  const left = levelState.creatures[id].left;
  const levelSize = levelState.levelSize;
  const pattern = JSON.parse(JSON.stringify(levelState.pattern));
  const creatures = JSON.parse(JSON.stringify(levelState.creatures));
  const directionTranslate = {
    top: { top: top - 1, left: left },
    bot: { top: top + 1, left: left },
    left: { top: top, left: left - 1 },
    right: { top: top, left: left + 1 },
  };

  switch (
    pathCheck(
      directionTranslate[direction].top,
      directionTranslate[direction].left,
      pattern,
      levelSize
    )
  ) {
    case "pathIsFree":
      return creatureMove(
        directionTranslate[direction].top,
        directionTranslate[direction].left,
        top,
        left,
        id,
        direction,
        pattern,
        creatures
      );

    case "pathIsOccupied":
      return creatureAttack(
        directionTranslate[direction].top,
        directionTranslate[direction].left,
        id,
        direction,
        pattern,
        creatures
      );

    default:
      return nothingHappens(pattern, creatures);
  }
};

export default commandHandler;
