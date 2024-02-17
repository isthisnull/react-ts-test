import React from "react";
import Data from "./Data";
/* 
interface person {
  id: number;
  name: string;
  price: number;
  image: string;
}

const Koni: {}[] = [{ 1: 1 }, 2, 3, 4, 5];
const Dasa: person[] = [
  { id: 0, name: "eynak", price: 2000, image: "./assets/dddd.jpg" },
  { id: 1, name: "kolah", price: 1400, image: "./assets/dddd.jpg" },
  { id: 2, name: "kot", price: 1800, image: "./assets/dddd.jpg" },
  { id: 3, name: "kir", price: 1200, image: "./assets/dddd.jpg" },
]; */
const DataUser = () => {
  return (
    <>
      <button className="left" onClick={() => {}}>
        left
      </button>
      <button className="right" onClick={() => {}}>
        right
      </button>
      <div className="gg">
        <div className="ggf">
          {Data.map((item) => (
            <ul>
              <li key={item.id}>
                <label>{item.name}</label>
                <div>{item.price}</div>
                <img src={item.image} />
              </li>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
};

export default DataUser;
