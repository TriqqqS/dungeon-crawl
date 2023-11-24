import React, { memo } from "react";

const TileElement = memo(({ sprite, exit }) => {
  return (
    <div>
      <img
        className="tile"
        src={process.env.PUBLIC_URL + sprite}
        alt=""
        style={{ position: "absolute", display: "block" }}
      />
      {exit && (
        <img
          className="item"
          src={process.env.PUBLIC_URL + "/sprites/environment/ladder1Tile.png"}
          alt=""
          style={{ position: "absolute", display: "block" }}
        />
      )}
    </div>
  );
});

export default TileElement;
