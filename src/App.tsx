import React, { AriaAttributes, ReactNode, useState } from "react";

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
  type mamad22 = {
    title: string;
    koniha: string;
  };

  const Section = ({ koniha = "kir", title = "my subheading" }: mamad22) => {
    return (
      <section>
        <h2>{title}</h2>
        <p>{koniha}</p>
      </section>
    );
  };

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
      <Section>as</Section>
      <div className="card">
        <button
          onClick={() => {
            setCount(count + 1);
            console.log(userId.toFixed(count));
          }}
        >
          count is {count}
        </button>
        <button
          className="reset"
          onClick={() => {
            setCount(0);
          }}
        >
          Reset
        </button>
      </div>
      {koni123.toFixed(27)}
      <div>{kiri(121231331) + " 122ss22"}</div>
    </>
  );
}

export default App;
