import React from "react";

import { IContainer } from "interface/components/common";

const CustomContainer = ({ className, children, fluid = false }: IContainer) => {
  return (
    <div
      className={`container w-full ${
        !fluid ? "max-w-[1100px] md:max-w-[1200px] 2xl:max-w-[1390px]" : "max-w-full"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default CustomContainer;
