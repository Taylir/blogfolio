import React, { useRef } from "react";
import "./Gridwave.css";

function Gridwave() {
  let columns = Math.floor(document.body.clientWidth / 50),
    rows = Math.floor(document.body.clientHeight / 50);
  const wrapperRef = useRef(null);

  const createTile = (index) => {
    const tile = document.createElement("div");

    tile.classList.add("tile");

    return tile;
  };

  const createTiles = (quantity) => {
    Array.from(Array(quantity)).map((tile, index) => {
      wrapperRef.current.appendChild(createTile(index));
    });
  };

  function createGrid() {
    wrapperRef.current.innerHTML = "";
    columns = Math.floor(document.body.clientWidth / 50);
    rows = Math.floor(document.body.clientHeight / 50);
    wrapperRef.current.style.setProperty("--columns", columns)
    wrapperRef.current.style.setProperty("--rows", rows)

    createTiles(columns * rows)
  }
  return <div id="tiles"></div>;
}

export default Gridwave;
