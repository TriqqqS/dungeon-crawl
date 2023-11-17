import React, { memo } from "react";
import "./monsterModel.css";

const MonsterModel = memo(({ top, left, sprite, animation, monsterHp }) => {
  console.log(`Monster's HP: ${monsterHp}`);

  return (
    <div
      className={
        animation
          ? `moving-grid__monster attack-animation__${animation}`
          : `moving-grid__monster`
      }
      style={{
        top: `${top * 59}px`,
        left: `${left * 59}px`,
      }}
    >
      <img
        src={process.env.PUBLIC_URL + `/sprites/characters/${sprite}Sprite.png`}
        alt=""
      />
    </div>
  );
});

export default MonsterModel;
