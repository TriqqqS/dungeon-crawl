import React from "react";
import "./hpBar.css";

const HpBar = ({ playerHp, playerMaxHp }) => {
  return (
    <div className={"level-layout-hp"}>
      <img
        id="hp-border"
        src={process.env.PUBLIC_URL + `/sprites/characters/hpBarBorder1.png`}
        alt=""
      />

      <img
        id="hp-bar"
        src={process.env.PUBLIC_URL + `/sprites/characters/hpBar1.png`}
        alt=""
        style={{
          width:
            playerHp === playerMaxHp
              ? `410px`
              : `${Math.floor(410 / playerMaxHp) * playerHp}px`,
        }}
      />
    </div>
  );
};

export default HpBar;
