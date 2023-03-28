import React from "react";
interface IBoxBalance {
  title: string;
  eDads: string;
  button: boolean;
}
const BoxBalance = ({ title, eDads, button }: IBoxBalance) => {
  return (
    <div className="min-w-[150px] min-h-[90px] md:w-[25%] max-w-md bg-[#EBE1FF] px-6 py-4 relative shadow-lg flex flex-col justify-between rounded-2xl">
      <div className="text-primary text-[16px]">{title}</div>
      <div className="flex justify-between items-center">
        <div className="text-[18px] text-primary">{eDads}</div>
        <div className=" text-primary">{`(eDADS)`}</div>
        {button && (
          <button
            type="button"
            className="bg-[#FC008A] rounded-[20px] text-white  absolute top-4 right-4 px-6 py-2 shadow-md text-[12px]"
          >
            Claim
          </button>
        )}
      </div>
    </div>
  );
};
export default BoxBalance;
