import React, { AriaAttributes, useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState<number>(0);
  const userId: number = Math.PI;
  function mamad(kir: number): object {
    return { name: kir };
  }
  const mamad2: number[] = [];
  function mamad3(kir: Array<number>): Array<number> {
    return [kir[0]];
  }

  const jakesh = mamad3([123452, 21, 123]);
  const koni = mamad(2);
  const mamad11: Array<number> = [];
  function koni323(kiri: number): number {
    return kiri + 2.32;
  }
  const koni123: number = koni323(483681247.54385761347);
  const kiri = (dahanservice: number): string => {
    return dahanservice.toString();
  };
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
      {/*       {koni123.toFixed(27)} */}
      {kiri(121231331) + " 122ss22"}
    </>
  );
}

export default App;
