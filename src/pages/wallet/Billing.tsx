import React from "react";

export const Billing = () => {
  return (
    <div className="relative overflow-x-auto shadow-xl sm:rounded-[16px] md:max-w-[80%] p-6 bg-[#F5F0FF] mb-20">
      <table className="  text-left text-gray-500 dark:text-gray-400 mb-20 w-full">
        <thead className="text-xs text-gray-700  dark:bg-gray-700 dark:text-gray-400 border-b-[1px] border-[gray] w-full">
          <tr>
            {/* {Arr?.title?.map((value, index) => {
            return (
              <th key={index} scope="col" className="px-6 py-3">
                {value}
              </th>
            );
          })} */}
            {["Date", "Transaction ID", "Request type", "Amount", "Status"].map((value, index) => {
              return (
                <th
                  key={index}
                  scope="col"
                  className={`px-6 py-3 space-x-8 text-${index === 0 ? "left" : "center"} md:text-[14px]`}
                >
                  {value}
                </th>
              );
            })}
          </tr>
        </thead>
      </table>
    </div>
  );
};
