import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

import { BestCard, ProductCard } from "components";

import { CATEGORIES_SHOP } from "constant/categories";

import { NProductModel } from "module/shoptoearn";

import Banner2 from "assets/image/Banner2.png";

import { NCard } from "interface/components/layout";

export interface IListView {
  id?: string;
  // shoplist: Array<NCard.IProductCard>;
  shoplist: Array<any>;
  productlist: Array<any>;
}

const ListView = ({ shoplist, productlist, id }: IListView) => {
  return (
    <main className="px-5">
      {/* Banner */}
      <div className="w-full h-full">
        <img src={Banner2} alt="DadsLogo" className="w-[100%] h-[30%] max-h-[200px] my-[2%] object-cover" />
      </div>
      {/* Category */}
      <p className=" text-primary font-bold text-md mb-5">Category</p>
      <div className=" w-full mb-5 flex justify-center items-center rounded-xl ">
        <div className="flex space-x-5 py-2 h-full">
          {CATEGORIES_SHOP.map((value, index) => {
            return index === 0 ? (
              <Link
                to={`/shop`}
                key={index}
                className={clsx("flex flex-col  items-center w-[10%] h-full  hover:scale-110", {
                  ["opacity-50 "]: !id,
                })}
              >
                <img src={value.image} alt={value.title} className=" object-cover mb-2" />
                <p className="break-normal text-center md:block hidden">{value.title}</p>
              </Link>
            ) : (
              <Link
                to={`/shop/${index}`}
                key={index}
                className={clsx("flex flex-col  items-center w-[10%]  hover:scale-110", {
                  ["opacity-50 "]: Number(id) === index,
                })}
              >
                <img src={value.image} alt={value.title} className=" object-cover mb-2" />
                <p className="break-normal text-center text-sm md:block hidden">{value.title}</p>
              </Link>
            );
          })}
        </div>
      </div>
      {/* Best Shop Best Earning */}
      <div className=" mx-auto  text-[#13016D] mb-5">
        <p className=" text-primary font-bold text-md mb-5"> Best Shop - Best Earning</p>
        <div className="flex flex-wrap justify-between">
          {shoplist.length > 0 ? (
            shoplist.map((shop) => (
              <ProductCard
                description=""
                image={shop.imageUrl}
                link={shop.offerLink}
                title={shop.shopName}
                key={shop.id}
                price={shop.commissionValue}
                discount={shop.max_com || 0}
                earn={shop.commissionRate || 0}
              />
            ))
          ) : (
            <p>No Shop to show</p>
          )}
        </div>

        <div className="flex justify-center items-center z-20 mt-3">
          <div className=" min-h-[30px] bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 text-[16px] flex items-center">
            <a href="#" className="px-6 hover:underline hover:underline-offset-3 hover:cursor-pointer">
              See more {">>"}
            </a>
          </div>
        </div>
      </div>
      {/* Best Shop Best Earning */}
      <div className=" mx-auto mb-5">
        <p className="text-primary font-bold text-md mb-5"> Recommended Products</p>
        <div className="  flex flex-wrap h-auto justify-between">
          {productlist.length > 0 ? (
            productlist.map((product) => (
              <ProductCard
                key={product.id}
                description={product.description}
                image={product.imageUrl}
                link={product.offerLink}
                title={product.productName}
                price={product.price}
                discount={product.commissionRate}
                earn={product.commissionRate}
                width="20%"
              />
            ))
          ) : (
            <p>There is no data</p>
          )}

          <div className="flex justify-center items-center z-20 w-full mt-3">
            <div
              className="min-h-[30px] bg-white border border-gray-200 rounded-lg shadow-md 
              dark:bg-gray-800 dark:border-gray-700 text-[16px] flex items-center"
            >
              <a href="#" className="px-6 hover:underline hover:underline-offset-3 hover:cursor-pointer">
                See more {">>"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ListView;
