import getLevel from "../database/levelDb";
import commandHandler from "../utils/commandHandler";

export const INITIAL_STATE = {
  level: 1,
  levelSize: 7,
  creatures: getLevel(1).creatures,
  pattern: getLevel(1).pattern,
  hitCounter: 0,
};

const LEVEL_CHANGE = "LEVEL_CHANGE";
const CREATURE_ACTION = "CREATURE_ACTION";

export const levelReducer = (state, action) => {
  switch (action.type) {
    // change current level
    case LEVEL_CHANGE:
      return {
        ...state,
        level: action.payload.level,
      };

    case CREATURE_ACTION:
      return {
        ...state,
        pattern: action.payload.pattern,
        creatures: action.payload.creatures,
      };

    default:
      return state;
  }
};

export const creatureAction = (direction, id, state) => {
  const actionData = commandHandler(direction, id, state);
  return {
    type: CREATURE_ACTION,
    payload: actionData,
  };
};

export const levelChangeAction = (payload) => ({
  type: LEVEL_CHANGE,
  payload: payload,
});
