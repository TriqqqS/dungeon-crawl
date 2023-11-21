import React, { useState } from "react";
import MainMenu from "./components/mainMenu/mainMenu";
import LevelController from "./components/levelController/levelController";
import "./App.css";

function App() {
  const disableContinue = localStorage.getItem("level") > 1 ? false : true;

  const [mainMenu, setMainMenu] = useState(true);
  const [currentLevel, setCurrentLevel] = useState(
    localStorage.getItem("level") > 1 ? localStorage.getItem("level") : 1
  );

  const onGameStart = (e) => {
    e.preventDefault();
    setMainMenu(false);
    if (e.target.id === "new-game") {
      localStorage.setItem("level", 1);
      setCurrentLevel(1);
    }
  };

  const mainScreen =
    mainMenu === true ? (
      <MainMenu disableContinue={disableContinue} onGameStart={onGameStart} />
    ) : (
      <LevelController levelId={currentLevel} />
    );

  return <div className="App">{mainScreen}</div>;
}

export default App;
