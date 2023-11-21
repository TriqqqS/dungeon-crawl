import React, { memo } from "react";

const TileElement = memo(({ sprite, exit }) => {
  // change it later for any item on the ground, not just exit
  const item = exit ? (
    <img
      className="item"
      src={process.env.PUBLIC_URL + "/sprites/environment/ladder1Tile.png"}
      alt=""
      style={{ position: "absolute", display: "block" }}
    />
  ) : null;

  return (
    <div>
      <img
        className="tile"
        src={process.env.PUBLIC_URL + sprite}
        alt=""
        style={{ position: "absolute", display: "block" }}
      />
      {item}
    </div>
  );
});

export default TileElement;
