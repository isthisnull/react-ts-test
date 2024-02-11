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
            <div>
              <img />
            </div>
            <div className="info">
              <div className="name">پرایمر براق گلدن رز صورت </div>
              <div className="mainPrice">129000 تومان</div>
              <div className="price"> 88000 تومان</div>
            </div>
            <div className="buttons">
              <button className="likeBtn">
                <img src="./assets/dddd.jpg" className="likeBtnImg" />
              </button>
              <button className="buyBtn">افزودن به سبد خرید </button>
            </div>
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
