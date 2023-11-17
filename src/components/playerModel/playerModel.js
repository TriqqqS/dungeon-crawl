import React, { memo } from "react";
// import { useRef } from "react";
import "./playerModel.css";

const PlayerModel = memo(
  ({ sprite, top, left, animation, hitCounter, onActionAnimationEnd }) => {
    return (
      <>
        <div
          // changing key to remount if player's position have not changed but need to replay previous animation
          key={hitCounter}
          className={`moving-creature ${animation}`}
          onAnimationEnd={onActionAnimationEnd}
          onTransitionEnd={onActionAnimationEnd}
          style={{
            top: `${top * 59 + 34}px`,
            left: `${left * 59}px`,
          }}
        >
          <div className="moving-creature__sprite">
            <img
              src={
                process.env.PUBLIC_URL +
                `/sprites/characters/${sprite}Sprite.png`
              }
              alt=""
            />
          </div>
        </div>
      </>
    );
  }
);
export default PlayerModel;
