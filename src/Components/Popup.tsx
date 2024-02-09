import React, { ReactElement, ReactNode } from "react";

interface MessageProps {
  message: string;
}

const Popup = ({ message }: MessageProps): ReactElement => {
  return (
    <>
      <h2>{message}</h2>
    </>
  );
};

export default Popup;
