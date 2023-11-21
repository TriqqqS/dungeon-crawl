import React from "react";
import "./mainMenu.css";

const MainMenu = ({ disableContinue, onGameStart }) => {
  return (
    <div className="main-menu">
      <div className="buttons-container">
        <button
          id="continue"
          className={disableContinue ? "disabled" : ""}
          disabled={disableContinue}
          onClick={(e) => {
            onGameStart(e);
          }}
        ></button>
        <button
          id="new-game"
          onClick={(e) => {
            onGameStart(e);
          }}
        ></button>
      </div>
    </div>
  );
};

export default MainMenu;
