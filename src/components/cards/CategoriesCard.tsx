import { NCard } from "interface/components/layout";
import DadsLogo from "../../assets/image/DadsLogo.png";
import React from "react";

const CategoriesCard = ({ title, description, image, link, impression, reward }: NCard.ICategoriesCard) => {
  return (
    <div className="min-w-[200px] max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 overflow-hidden ">
      <a href={link ? link : "#"} className=" justify-center flex">
        <img
          className="object-fit "
          src={image ? image : "https://flowbite.com/docs/images/products/apple-watch.png"}
          alt="roun"
        />
      </a>

      <div className="p-5">
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ">{impression ? impression : " 123 likes"}</p>
        <a href={link ? link : "#"}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
            {title ? title : "Noteworthy technology acquisitions 2021"}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ">
          {description
            ? description
            : " Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."}
        </p>
        <div className="flex justify-between items-center">
          <p className="mr-3 font-light text-gray-700 dark:text-gray-400 ">{reward ? reward : "10dads"}</p>
          <a
            href={link ? link : "#"}
            className="inline-flex  items-end px-3 py-3 text-sm font-medium text-center text-white bg-[#FF008A] hover:bg-[#FF008A] focus:ring-4 focus:outline-none hover:opacity-100 opacity-80 dark:focus:ring-blue-800 rounded-[50%] hover:scale-120"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
export default CategoriesCard;
