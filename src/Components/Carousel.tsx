import React from "react";
import { useState } from "react";
const Carousel = () => {
  const [top, setTop] = useState<number>(0);
  const [right, setRight] = useState<number>(0);
  return (
    <>
      <button
        className="leftBtn"
        onClick={() => {
          setRight(right + 100);
        }}
      >
        left
      </button>
      <button
        className="rightBtn"
        onClick={() => {
          setRight(right - 100);
        }}
      >
        right
      </button>
      <div className="container">
        <div
          className="imgContainer"
          style={{ top: `${top}px`, right: `${right}px` }}
        >
          <div className="card1">
            <img src="./assets/dddd.jpg" />
          </div>
          <div className="card1">
            <img src="./assets/dddd.jpg" />
          </div>
          <div className="card1">
            <img src="./assets/dddd.jpg" />
          </div>
          <div className="card1">
            <img src="./assets/dddd.jpg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
