export const INITIAL_STATE = {
  name: "monster",
  type: "ogre",
  hp: 3,
  mp: 0,
  dmg: 2,
  armor: 3,
  skin: "",
  sprite: "",
  top: 4,
  left: 4,
};

export const monsterReducer = (state, action) => {
  switch (action.type) {
    case "HP_CHANGE":
      if (state.hp - action.payload > 0) {
        return {
          ...state,
          hp: state.hp - action.payload,
        };
      } else
        return {
          ...state,
          sprite: `/sprites/characters/mrError1Sprite.png`,
          hp: 0,
        };

    case "POSITION_CHANGE":
      const newTop = action.payload.top;
      const newLeft = action.payload.left;

      if (state.top === null || state.left === null)
        return {
          ...state,
          top: newTop,
          left: newLeft,
        };

      if (
        (state.top - newTop === 1 || state.top - newTop === -1) &&
        state.left - newLeft === 0
      )
        return {
          ...state,
          top: newTop,
          left: newLeft,
        };

      if (
        (state.left - newLeft === 1 || state.left - newLeft === -1) &&
        state.top - newTop === 0
      )
        return {
          ...state,
          top: newTop,
          left: newLeft,
        };

      return { ...state };

    case "SPRITE_CHANGE":
      return {
        ...state,
        skin: action.payload,
        sprite: `/sprites/characters/${action.payload}Sprite.png`,
      };
    default:
      return state;
  }
};
