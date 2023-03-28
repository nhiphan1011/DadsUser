import { NCard } from "interface/components/layout";
import DadsLogo from "../../assets/image/DadsLogo.png";
import shareButton from "../../assets/image/ButtonShare.png";

const BestCard = ({ title, description, image, link, width = "" }: NCard.IBestCard) => {
  return (
    <div
      className={` w-[19%]  flex flex-col justify-between bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 overflow-hidden my-4`}
    >
      <div className="flex justify-center bg-red">
        <a href={link ? link : "#"} className="">
          <img
            className="
            h-[170px] w-[170px] "
            src={image}
            alt="product image"
          />
        </a>
      </div>
      <div className="p-5">
        <a href={link ? link : "#"}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center truncate2">
            {title ? title : "Noteworthy technology acquisitions 2021"}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">
          {description ? `Earn up to ${description}` : "Earn up to 0%"}
        </p>
        <div className="flex justify-end space-x-2">
          <a
            href={"#"}
            className=" inline-flex  items-end  text-sm font-medium text-center text-white   focus:ring-4 focus:outline-none hover:opacity-100 opacity-80 dark:focus:ring-blue-800 rounded-[50%] hover:scale-120"
          >
            <img src={shareButton} alt="No image" className="w-[30px] h-[30px]" />
          </a>
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
export default BestCard;
