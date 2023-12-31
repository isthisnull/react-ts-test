import React from "react";
import Heading from "./Components/Heading.tsx";
import { useState } from "react";
import Counter from "./Components/Counter.tsx";
function App() {
  const [count, setCount] = useState<number>(1);
  return (
    <>
      <Heading title="kirekhar" />
      <Counter setCount={setCount}>Count is {count}</Counter>
    </>
  );
}

export default App;
