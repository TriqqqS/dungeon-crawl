import React from "react";
import { useReducer, useRef, useEffect } from "react";
import { levelReducer, INITIAL_STATE } from "../../reducers/levelReducer";
import { creatureAction } from "../../reducers/levelReducer";
import { aiLogic } from "../../utils/aiLogic";
import commandHandler from "../../utils/commandHandler";
import TileElement from "../tileElement/tileElement";
import PlayerModel from "../playerModel/playerModel";
import HpBar from "../hpBar/hpBar";
import "./levelController.css";

// all variations of top and left variables means an offset from top or left
const LevelController = () => {
  const [levelState, dispatch] = useReducer(levelReducer, INITIAL_STATE);
  const { pattern, creatures } = levelState;
  const playerHp = levelState.creatures[0].hp;
  const playerMaxHp = levelState.creatures[0].maxHp;

  // const actionDirection = levelState.creatures[0].actionDirection;
  const direction = {
    w: "top",
    s: "bot",
    a: "left",
    d: "right",
    ArrowUp: "top",
    ArrowDown: "bot",
    ArrowLeft: "left",
    ArrowRight: "right",
  };

  // actionBlock for blocking player's control
  const actionBlock = useRef(false);
  // timerId for removing previous timer when new actionBlock activated
  const timerId = useRef(null);
  // enumeration counter for enemy turn
  const turnQueue = useRef(0);

  useEffect(() => {
    const moveByKeyboard = (event) => {
      if (Object.keys(direction).includes(event.key)) {
        event.preventDefault();
      }
      if (
        Object.keys(direction).includes(event.key) &&
        actionBlock.current === false &&
        playerHp > 0 &&
        commandHandler(direction[event.key], 0, levelState).message !==
          "pathIsBlocked" &&
        turnQueue.current === 0
      ) {
        // blocking keyboard
        actionBlock.current = true;
        turnQueue.current = 1;
        timerId.current = setTimeout(() => {
          actionBlock.current = false;
        }, 280);
        dispatch(creatureAction(direction[event.key], 0, levelState));
      }
    };

    window.addEventListener("keydown", moveByKeyboard);
    return () => {
      window.removeEventListener("keydown", moveByKeyboard);
    };
  });

  // this func do something only for enemy's attack turn
  const onActionAnimationEnd = () => {
    console.log(turnQueue.current);
    if (turnQueue.current) {
      creatures.slice(turnQueue.current).some((element) => {
        const aiDirection = aiLogic(element.id, pattern, creatures);
        console.log(
          `id: ${element.id} / ${aiLogic(element.id, pattern, creatures)}`
        );

        turnQueue.current = element.id;
        turnQueue.current === creatures.length - 1
          ? (turnQueue.current = 0)
          : (turnQueue.current = element.id + 1);

        if (
          aiDirection !== "stand" &&
          commandHandler(aiDirection, element.id, levelState).message !==
            "pathIsBlocked"
        ) {
          clearInterval(timerId.current);
          actionBlock.current = true;

          timerId.current = setTimeout(() => {
            actionBlock.current = false;
          }, 280);

          dispatch(
            creatureAction(
              aiLogic(element.id, pattern, creatures),
              element.id,
              levelState
            )
          );
          return true;
        }
        return false;
      });
    }
  };

  // building selected level layout from TileElement components
  const renderLayout = (pattern) => {
    return pattern.map((row) => {
      return row.map((el) => {
        return (
          <TileElement
            key={`${el.top}x${el.left}`}
            sprite={process.env.PUBLIC_URL + `${el.sprite}`}
            exit={el.exit}
          />
        );
      });
    });
  };

  const renderCreatures = (creatures) => {
    return creatures.map((el, index) => {
      return (
        <PlayerModel
          key={index}
          sprite={el.sprite}
          animation={el.animation}
          top={el.top}
          left={el.left}
          hitCounter={el.hitCounter}
          onActionAnimationEnd={onActionAnimationEnd}
        />
      );
    });
  };

  return (
    <div className="level-layout">
      <HpBar playerHp={playerHp} playerMaxHp={playerMaxHp} />
      <div className="level-layout__tiles">{renderLayout(pattern)}</div>
      <div className="level-layout__creatures">
        {renderCreatures(creatures)}
      </div>
    </div>
  );
};

export default LevelController;
