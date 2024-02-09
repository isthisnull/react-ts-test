import { AriaAttributes, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
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
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() => {
            setCount((count) => count + 1);
            console.log(userId.toFixed(count));
          }}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
        <br />
        {jakesh}
      </p>
    </>
  );
}

export default App;
