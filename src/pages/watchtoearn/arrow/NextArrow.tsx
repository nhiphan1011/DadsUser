import React from "react";

type Props = {
  className: string;
  onClick: () => void;
};

const NextArrow = (props: Props) => {
  const { className, onClick } = props;

  return (
    <div
      className="slick-arrow slick-next next-arrow 
      before:content-['>']  before:font-bold before:text-[30px] before:text-primary"
      style={{ width: "30px", height: "30px", right: "-15%" }}
      onClick={onClick}
    />
  );
};

export default NextArrow;
