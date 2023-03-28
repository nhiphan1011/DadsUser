import React from "react";

import { ProductCard } from "components";
import PlayCard from "components/cards/PlayCard";
import { Link } from "react-router-dom";

export interface IListView {
  name: string;
  data: Array<any>;
  type: string;
  url: string;
}

const ListView = ({ data, name, type, url }: IListView) => {
  return (
    <>
      <div className="flex justify-between relative mb-4">
        <h2 className="md:text-2xl text-xl text-[#13016D] font-semibold mb-8">{name}</h2>
        <div className="absolute top-0 right-6  min-h-[30px] bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 text-[16px] flex items-center">
          <Link to={url} className="px-6 hover:underline hover:underline-offset-3 hover:cursor-pointer">
            See more {">>"}
          </Link>
        </div>
      </div>

      <div className="flex justify-between flex-wrap md:flex-nowrap">
        {type === "shop" &&
          data.map((shop) => (
            <ProductCard
              description={shop.introduction}
              image={shop.imageUrl}
              link={shop.offerLink}
              title={shop.shopName}
              key={shop.id}
              price={shop.commissionValue}
              discount={shop.max_com || 0}
              earn={shop.commissionRate || 0}
            />
          ))}
        {type === "mission" &&
          data.map((mision) => (
            <PlayCard
              description={mision.description}
              image={mision.image}
              link={mision.url}
              title={mision.title}
              key={mision.id}
            />
          ))}
        {type === "play" &&
          data.map((play) => (
            <PlayCard
              description={play.description}
              image={play.image}
              link={play.url}
              title={play.title}
              key={play.id}
            />
          ))}
      </div>
    </>
  );
};

export default ListView;
