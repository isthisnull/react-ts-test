import React from "react";

interface GenericsProps<T> {
  kiri: T[];
  render: (item: T) => React.ReactNode;
}

const Generics = <T,>({ kiri, render }: GenericsProps<T>) => {
  return (
    <>
      <ul>
        {kiri.map((item, i) => (
          <li key={i}>{render(item)}</li>
        ))}
      </ul>
    </>
  );
};
export default Generics;
