import React, { Children } from "react";
import Heading from "./Components/Heading.tsx";
import { useState } from "react";
import Counter from "./Components/Counter.tsx";
import Popup from "./Components/Popup.tsx";
import Stringer from "./Components/Stringer.tsx";
function App() {
  const [count, setCount] = useState<number>(1);
  const [koni, setKoni] = useState<string>("");
  return (
    <>
      <Heading title="kirekhar" />
      <Counter setCount={setCount}>Count is {count}</Counter>
      <Popup message="kiriii"></Popup>
      <Stringer setKoni={setKoni}>man chiam? {koni}</Stringer>
    </>
  );
}

export default App;
