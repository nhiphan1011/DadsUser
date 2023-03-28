import React from "react";
interface ITabFilter {
  title: string;
}
export const TabFilter = ({ title }: ITabFilter) => {
  return (
    <div className="max-w-[200px] flex items-center space-x-2">
      <div className="bg-white flex pr-6 py-2 pl-2 rounded-xl text-[12px]">{title}</div>
      <div className="text-[10px] h-8 w-8 hover:cursor-pointer">
        <svg
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
        </svg>
      </div>
    </div>
  );
};
