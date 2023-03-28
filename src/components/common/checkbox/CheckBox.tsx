export const CheckBox = ({ handleChange, Arr, value }: any) => {
  return (
    <div className="w-full h-full">
      <label htmlFor="select" className="block mb-4 text-primary dark:text-white relative font-thin">
        <div
          className={`after:absolute  after:bg-[#FF008A] after:w-[30px] after:h-[30px] after:top-6 after:right-[-10px] after:rounded-full after:content-["+2"] after:z-10 after:justify-center after:flex after:items-center after:text-[white] font-thin  text-xl`}
        >
          {Arr[0].title}
        </div>
      </label>
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
          className="h-80 w-full px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200
           "
          aria-labelledby="dropdownSearchButton"
        >
          {Arr &&
            Arr[0]?.valueArr?.map(
              (
                item: {
                  name: string;
                  value: string;
                },
                index: number
              ) => {
                return (
                  <li key={index} className="min-w-[150px]">
                    <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600 ">
                      <input
                        onChange={handleChange}
                        id={item.value}
                        type="checkbox"
                        className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <label
                        htmlFor={item.value}
                        className="w-full ml-2 text-xl font-thin text-gray-900 rounded dark:text-gray-300 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      >
                        {item.name}
                      </label>
                    </div>
                  </li>
                );
              }
            )}
        </ul>
      </div>
    </div>
  );
};
