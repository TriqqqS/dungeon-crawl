import React, { memo } from "react";
import "./playerModel.css";

const PlayerModel = memo(
  ({ sprite, top, left, animation, hitCounter, onActionAnimationEnd }) => {
    return (
      <div
        key={hitCounter}
        className={`moving-creature ${animation}`}
        onAnimationEnd={onActionAnimationEnd}
        onTransitionEnd={onActionAnimationEnd}
        style={{
          top: `${top * 59 + 34}px`,
          left: `${left * 59}px`,
        }}
      >
        <img
          src={
            process.env.PUBLIC_URL + `/sprites/characters/${sprite}Sprite.png`
          }
          alt=""
        />
      </div>
    );
  }
);
export default PlayerModel;
