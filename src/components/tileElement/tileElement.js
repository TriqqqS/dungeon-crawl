import React, { memo } from "react";

const TileElement = memo(({ sprite, type }) => {
  // const top = tileCoords.top;
  // const left = tileCoords.left;

  // console.log(`TILE RERENDERED ${top} x ${left}`);

  return (
    <div className={type}>
      <img src={process.env.PUBLIC_URL + sprite} alt="" />
    </div>
  );
});

export default TileElement;
