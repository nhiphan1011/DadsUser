import { NCard } from "interface/components/layout";
import shareButton from "../../assets/image/ButtonShare.png";
import { ArrowRightCircleIcon, LinkIcon, ArrowUpTrayIcon } from "@heroicons/react/24/solid";

const PlayCard = ({ title, description, image, link }: NCard.IPlayCard) => {
  return (
    <div
      className=" bg-white border flex flex-col transition  hover:scale-110 border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 overflow-hidden 
    md:w-[19%] w-[49%] md:mb-0 mb-3"
    >
      <div className="flex justify-center bg-red">
        <a href={link ? link : "#"}>
          <img
            className=" rounded-t-lg 
            h-[170px] w-[170px] "
            src={image}
            alt="product image"
          />
        </a>
      </div>
      <div className="p-5 h-[100%] flex justify-end flex-col">
        <a href={link ? link : "#"}>
          <h5 className="mb-2 text-xl s font-normal tracking-tight text-primary dark:text-white truncate2 min-h-[50px] mt-3">
            {title ? title : "Noteworthy technology acquisitions 2021"}
          </h5>
        </a>
        <p className="font-normal text-primary dark:text-gray-400 truncate2 mb-auto">
          {description
            ? description
            : " Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."}
        </p>

        {/* Share && come */}
        <div className="flex space-x-2 mt-6 justify-end ">
          <a href={"#"}>
            <ArrowUpTrayIcon className="h-10 w-10 text-blue-800 hover:text-[#FF008A] " />
          </a>
          <a href="#">
            <ArrowRightCircleIcon className="h-10 w-10 text-[#FF008A] hover:text-blue-800 " />
          </a>
        </div>
      </div>
    </div>
  );
};
export default PlayCard;
