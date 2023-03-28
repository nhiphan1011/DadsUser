import React from "react";

type Props = {
  className: string;
  onClick: () => void;
};

const PrevArrow = (props: Props) => {
  const { className, onClick } = props;
  return (
    <div
      className="slick-arrow slick-prev prev-arrow 
      before:content-['<']  before:font-bold before:text-[30px] before:text-primary"
      style={{
        right: "-10%",
        left: "unset",
        width: "30px",
        height: "30px",
      }}
      onClick={onClick}
    />
  );
};

export default PrevArrow;
