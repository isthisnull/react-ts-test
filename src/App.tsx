import { AriaAttributes, useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const userId: number = Math.PI;
  function mamad(kir: number): object {
    return { name: kir };
  }
  const mamad2: number[] = [];
  function mamad3(kir: Array<number>): Array<number> {
    return [kir[0]];
  }

  const jakesh = mamad3([123452, 21, 123]);
  mamad(2);
  const mamad11: Array<number> = [];
  function koni323(kiri: number): Array<string> {
    return [`${kiri}+2`];
  }
  koni323(3);
  return (
    <>
      <div className="card">
        <button
          onClick={() => {
            setCount((count) => count + 1);
            console.log(userId.toFixed(count));
          }}
        >
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
