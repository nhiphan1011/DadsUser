import React from "react";
interface IBadge {
  content: string;
}
const Badge = ({ content }: IBadge) => {
  return (
    <span
      id="badge-dismiss-default"
      className=" truncate items-center py-2 px-4 mr-2 mt-4 text-[#120360] bg-[#CDB7FF] rounded-[12px] dark:bg-[#CDB7FF]-200 dark:text-[#120360]-200 text-md"
    >
      {content ? content : "Default"}
      <button
        type="button"
        className="inline-flex items-center p-0.5 ml-2 text-sm text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-300 dark:hover:text-gray-900 rounded-[50%]"
        data-dismiss-target="#badge-dismiss-default"
        aria-label="Remove"
      >
        <span className="sr-only">Remove badge</span>
      </button>
    </span>
  );
};
export default Badge;
