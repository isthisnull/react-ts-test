import React, { ReactElement } from "react";
type Headingprops = { title: string };

const Heading = ({ title }: Headingprops): ReactElement => {
  return <h1>{title}</h1>;
};

export default Heading;
