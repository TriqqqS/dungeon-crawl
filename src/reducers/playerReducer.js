export const INITIAL_STATE = {
  name: "player",
  type: "creature",
  hp: 5,
  mp: 0,
  dmg: 2,
  armor: 3,
  skin: "",
  sprite: "",
  top: null,
  left: null,
};

export const playerReducer = (state, action) => {
  switch (action.type) {
    case "HP_CHANGE":
      return {
        ...state,
        hp: state.hp + action.payload,
      };

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
