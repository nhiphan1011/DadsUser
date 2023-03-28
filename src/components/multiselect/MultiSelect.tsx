import React, { useRef } from "react";

import { SelectInput } from "components";

export interface IMultiSelect {
  arr: Array<{ name: string; value: string; [key: string]: any }>;
  value: Array<string>;
  name: string;
  handleChange: (nam: string, value: string) => void;
}

const MultiSelect = ({ name, value, arr, handleChange }: IMultiSelect) => {
  const elmRef = useRef(null);
  //   const {  } = useMultiSelect();

  return (
    <>
      <button
        id="dropdownSearchButton"
        data-dropdown-toggle="dropdownSearch"
        className="flex justify-between items-center px-4 py-2 text-xl text-center bg-[#EBE1FF] rounded-[12px] hover:bg-[#EBE1FF] focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:focus:ring-blue-800 text-black min-h-[38px] shadow-xl w-full"
        type="button"
      >
        {value && <p>{value.toString()}</p>}
        <svg
          className="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown menu */}
      <div id="dropdownSearch" className="z-10 hidden bg-white rounded-lg shadow dark:bg-gray-700 w-full max-w-md">
        <ul
          className="h-80 w-full px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownSearchButton"
        >
          {arr.map((item, index) => (
            <li key={index} className="min-w-[150px]">
              <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                <label
                  className="w-full ml-2 text-xl font-thin text-gray-900 rounded dark:text-gray-300 cursor-pointer dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  onClick={() => handleChange(name, item.value)}
                >
                  {item.name}
                </label>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* <SelectInput multiple arr={arr} name={name} handleChange={handleChange} /> */}
    </>
  );
};

export default MultiSelect;
