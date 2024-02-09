import Heading from "./Components/Heading.tsx";
import { useState } from "react";
import Counter from "./Components/Counter.tsx";
import Popup from "./Components/Popup.tsx";
import Stringer from "./Components/Stringer.tsx";
import List from "./Components/List.tsx";
import React from "react";
import { render } from "react-dom";
import Generics from "./Components/Generics.tsx";

function App() {
  const [count, setCount] = useState<number>(1);
  const [koni, setKoni] = useState<string>("");
  return (
    <>
      <Heading title="nam" />
      <Counter setCount={setCount}>Current Count: {count}</Counter>
      <Popup message="sad"></Popup>
      <Stringer setKoni={setKoni}>man chiam? {koni}</Stringer>
      <List
        items={["asdav", "dad3123dsaashi"]}
        render={(item: string) => <div>{item}</div>}
      />
      <Generics
        kiri={["namossi", "koni"]}
        render={(item: string) => <div>{item}</div>}
      />
    </>
  );
}

export default App;
