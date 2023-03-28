import React from "react";
interface ITableWallet {
  Arr?: {
    title?: Array<string>;
    data?: Array<{
      ETH: string;
      Wallet: string;
      Date: string;
      Action: string;
    }>;
  };
}
export const TableWallet = ({ Arr }: ITableWallet) => {
  return (
    <div className="mb-20">
      <div className="relative overflow-x-auto shadow-xl sm:rounded-[16px] md:max-w-[50%] p-6 bg-[#F5F0FF]">
        <table className="w-full  text-left text-gray-500 dark:text-gray-400 mb-20">
          <thead className="text-xs text-gray-700  dark:bg-gray-700 dark:text-gray-400 border-b-[1px] border-[gray]">
            <tr>
              {/* {Arr?.title?.map((value, index) => {
                return (
                  <th key={index} scope="col" className="px-6 py-3">
                    {value}
                  </th>
                );
              })} */}
              {["Block chain", "Wallet ID", "Date added", "Action"].map((value, index) => {
                return (
                  <th
                    key={index}
                    scope="col"
                    className={`px-6 py-3 text-${index === 0 ? "left" : "center"} md:text-xl text-sm`}
                  >
                    {value}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            <tr className="  dark:bg-gray-800 dark:border-gray-700 text-primary">
              <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap dark:text-white">
                ETH
              </th>
              <td className="px-6 py-4 text-center">abcd...efgh1</td>
              <td className="px-6 py-4 text-center">1/1/2023</td>
              <td className="px-6 py-4 text-center">default</td>
            </tr>
            <tr className=" dark:bg-gray-800 text-primary">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                BSC
              </th>
              <td className="px-6 py-4 text-center">abcd...efgh2</td>
              <td className="px-6 py-4 text-center">2/1/2023</td>
              <td className="px-6 py-4 text-center hover:underline hover:cursor-pointer">remove</td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-center items-center">
          <button
            type="button"
            className="bg-[#FC008A] text-white  w-[100px] h-[30px] p-2 rounded-[12px] flex items-center justify-center space-x-2"
          >
            <span className="font-bold text-[20px]">+</span>
            Add wallet
          </button>
        </div>
      </div>
    </div>
  );
};
