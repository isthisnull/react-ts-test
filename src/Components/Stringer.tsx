import React, { ReactNode } from "react";

interface StringerProps {
  setKoni: React.Dispatch<React.SetStateAction<string>>;
  children?: ReactNode;
}
const Stringer = ({ setKoni, children }: StringerProps) => {
  return (
    <>
      <button
        onClick={() => {
          setKoni("Kiri Hastam");
        }}
      >
        kiri hasti
      </button>
      <button
        onClick={() => {
          setKoni("Koni Hastam");
        }}
      >
        koni hasti
      </button>
      <h4>{children}</h4>
    </>
  );
};

export default Stringer;
