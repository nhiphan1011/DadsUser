import { NCard } from "interface/components/layout";

import React from "react";

import DOMPurify from "dompurify";

import { ArrowRightCircleIcon, LinkIcon, ArrowUpTrayIcon } from "@heroicons/react/24/solid";

const ProductCard = ({ title, description, image, link, price = "default", earn = "0%" }: NCard.IProductCard) => {
  const safeDes = DOMPurify.sanitize(description);

  const parseEarn = (number: any) => {
    const newNum: any = Math.round(Number(number) * 100);

    newNum.toFixed(1);
    return newNum;
  };

  return (
    <div
      className={`md:w-[19%] w-[49%] hover:scale-105 transition bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 relative overflow-hidden mb-5`}
    >
      <a href={link}>
        {/* Image */}
        <div className="flex justify-center ">
          <img
            className=" rounded-t-lg 
            h-[170px] w-[170px] "
            src={image}
            alt="product image"
          />
        </div>
      </a>
      <div className="px-3 pb-3 line-clamp-2 ">
        <a href="#">
          <h5 className="text-lg font-normal text-primary dark:text-white truncate2 min-h-[50px] mt-3">{title}</h5>
          <p
            className="mb-3 font-normal text-gray-700 dark:text-gray-400 truncate2 "
            dangerouslySetInnerHTML={{ __html: safeDes }}
          ></p>
        </a>

        <div className="flex items-center justify-between mb-auto">
          <div className="flex flex-col">
            <span className="text-sm font-normal text-primary dark:text-white mb-5">
              Buy & Earn up to {parseEarn(earn)}%
            </span>
          </div>
        </div>

        <div className="flex space-x-2 mt-auto justify-end">
          <a href={link}>
            <ArrowUpTrayIcon className="h-10 w-10 text-blue-800 hover:text-[#FF008A] " />
          </a>
          <a href={link}>
            <ArrowRightCircleIcon className="h-10 w-10 text-[#FF008A] hover:text-blue-800 " />
          </a>
        </div>
      </div>
      {/* <div className="absolute top-0 right-0 bg-[#FF008A] text-white p-2 rounded-md opacity-70">
        <span>
          Off
          <br /> {parseInt(discount.replace("%", "")).toFixed() || 0} %
        </span>
      </div> */}
    </div>
  );
};

export default ProductCard;
