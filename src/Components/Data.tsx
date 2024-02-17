import React from "react";
interface person {
  id: number;
  name: string;
  price: number;
  image: string;
}

const Data: person[] = [
  { id: 0, name: "eynak", price: 2000, image: "./assets/dddd.jpg" },
  { id: 1, name: "kolah", price: 1400, image: "./assets/dddd.jpg" },
  { id: 2, name: "kot", price: 1800, image: "./assets/dddd.jpg" },
  { id: 3, name: "kir", price: 1200, image: "./assets/dddd.jpg" },
];
export default Data;
