import { useEffect, useState } from "react";

import PlayCard from "components/cards/PlayCard";
import Badges from "components/common/badges";
import homeApi from "api/homeApi";

import { CAROSEUL } from "constant/carousel";

import Banner1 from "assets/image/Banner1.png";
import Banner2 from "assets/image/Banner2.png";
import Banner3 from "assets/image/Banner3.png";
import TopPick from "assets/image/TopPick.png";
import ProductCard from "components/cards/ProductCard";

type Props = {};

const Home = (props: Props) => {
  const [mision, setMision] = useState<Array<any>>([]);
  const [shop, setShop] = useState<Array<any>>([]);

  const fetchMision = async () => {
    const { data } = await homeApi.getHomeMission();
    setMision(data);
  };

  const fetchShop = async () => {
    const { data } = await homeApi.getHomeShop();
    setShop(data);
  };

  useEffect(() => {
    try {
      fetchMision();
      fetchShop();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <div className="space-y-10 p-5">
        {/* Banner */}
        <div className="flex flex-row w-full h-full justify-between">
          <div className="w-[69.5%] max-h-[20%]">
            <img src={Banner1} alt="Banner1" className="w-full h-full rounded-md mr-2px" />
          </div>
          <div className="w-[30%] flex flex-col max-h-[20%] justify-between">
            <img src={Banner2} alt="Banner2" className="h-[49%] rounded-[8px]" />
            <img src={Banner3} alt="Banner3" className="h-[49%] rounded-[8px]" />
          </div>
        </div>
        {/* Caroseul */}
        <div
          className=" px-5 flex justify-around items-center  min-h-[100px]  space-x-5 w-5/6 mx-auto
        bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700
        overflow-hidden"
        >
          {CAROSEUL.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center hover:cursor-pointer hover:scale-110 transition w-1/6 h-10 justify-center"
              >
                <img src={item.image} alt="" className="w-full h-full object-contain" />
                <p className="text-md text-primary mt-2">{item.title}</p>
              </div>
            );
          })}
        </div>
        {/* Profile */}
        <div className="flex-row flex w-full h-[auto]  justify-between">
          {/* Profile left */}
          <div className="flex flex-col w-[49.5%] min-h-[150px] justify-between">
            <div className="flex flex-row  w-full h-[45%] justify-between">
              {/* Earning */}
              <div
                className=" bg-[#E4DAFA] w-full h-[100%] p-6 relative
                border border-[#FF008A4D] rounded-[12px] shadow-md dark:bg-gray-800 dark:border-gray-700 "
              >
                <div className="absolute text-[16px] top-6 left-6">Earning</div>
                <button
                  type="button"
                  className="bg-[#CDB7FF] shadow-md dark:bg-gray-800 dark:border-gray-700  top-6 right-6 absolute text-[16px] py-2 px-6
                    focus:ring-4 focus:outline-none focus:ring-[#E4DAFA]-200 rounded-[12px]"
                >
                  Claim
                </button>
                <div className="flex flex-row items-center absolute bottom-2 right-6">
                  <p className="text-[#13016D] text-[24px]">1,000,000</p>
                  <p className="text-gray-400 text-[12px] ml-2"> (eDADS)</p>
                </div>
              </div>
              {/* Lesson */}
              {/* <div
                className="bg-white w-[49%] h-[100%] p-6 relative
                border border-[#FF008A4D] rounded-[12px] shadow-md dark:bg-gray-800 dark:border-gray-700 "
              >
                <label
                  htmlFor="countries"
                  className="block mb-2 text-sm font-medium text-primary dark:text-white"
                ></label>
                <select
                  defaultValue={""}
                  id="countries"
                  className=" border-none border-gray-300 text-primary text-[12px] rounded-[12px] focus:ring-blue-500 focus:border-blue-500 block w-[40%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option>Lesson completed </option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
                <p className="text-[#13016D] text-[24px] absolute bottom-2 right-6">05</p>
              </div> */}
            </div>
            <div className="w-full h-[52%] ">
              <img src={Banner1} alt="asd" className="w-full h-full object-cover rounded-[12px]" />
            </div>
          </div>
          {/* Profile right */}
          <div
            className="flex flex-col w-[49.5%] min-h-[150px] h-auto p-6 relative
                border border-[#FF008A4D] rounded-[12px] shadow-md dark:bg-gray-800 dark:border-gray-700
                text-[#13016D] text-[16px] "
          >
            {/* See more */}
            <div className="absolute top-6 right-6  bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#" className="px-6 min-h-[30px] hover:underline hover:underline-offset-3 hover:cursor-pointer">
                See more {">>"}
              </a>
            </div>
            <div className="flex flex-row md:text-2xl text-xl items-center space-x-4">
              <p className="">Profile</p>

              {/* On */}
              <svg
                className="w-10 h-10 hover:cursor-pointer"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                ></path>
              </svg>
              {/* Off */}
              {/* <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                  ></path>
                </svg> */}
            </div>
            <p className="">Location: VietNam</p>
            <p className="">Age: 25</p>
            <p className="">Gender: Female </p>

            {/* Interest */}
            <div className="flex-col flex text-md mt-4">
              <p>Interest</p>
              <div className="flex flex-row flex-wrap">
                <Badges content="Books" />
                <Badges content="Booasdasdasdasdasks" />
                <Badges content="BooBooasdasdasdasd" />
                <Badges content="BooBooasdasdasdasd" />
                <Badges content="BooBooasdasdasdasd" />
                <Badges content="BooBooasdasdasdasd" />
              </div>
            </div>
            <div className="flex-col flex text-md mt-4">
              <p>Brand love</p>
              <div className="flex flex-row flex-wrap">
                <Badges content="Books" />
                <Badges content="Booasdasdasdasdasks" />
                <Badges content="BooBooasdasdasdasd" />
              </div>
            </div>
          </div>
        </div>
        {/* Top pick */}
        <div className="md:text-2xl text-xl text-[#13016D] font-semibold  mx-auto">
          <h2 className="md:text-2xl text-xl text-[#13016D] font-semibold mb-8">Top pick</h2>
          <div className="flex flex-wrap ">
            <img src={TopPick} alt="DadsLogo" className=" h-[100%] w-1/5 mb-5" />
            <img src={TopPick} alt="DadsLogo" className=" h-[100%] w-1/5 mb-5" />
            <img src={TopPick} alt="DadsLogo" className=" h-[100%] w-1/5 mb-5" />
            <img src={TopPick} alt="DadsLogo" className=" h-[100%] w-1/5 mb-5" />
            <img src={TopPick} alt="DadsLogo" className=" h-[100%] w-1/5 mb-5" />
            <img src={TopPick} alt="DadsLogo" className=" h-[100%] w-1/5 mb-5" />
            <img src={TopPick} alt="DadsLogo" className=" h-[100%] w-1/5 mb-5" />
            <img src={TopPick} alt="DadsLogo" className=" h-[100%] w-1/5 mb-5" />
          </div>
        </div>
        {/* Watch to Earn */}
        {/* Learn to Earn */}
        {/* <div className="">
          <h2 className="md:text-2xl text-xl text-[#13016D] font-semibold mb-8">Learn to Earn</h2>
          <CategoriesCard
            impression="1,045 likes"
            reward="Complete course & earn up to 10 eDADS"
            description="Description....."
            image={TopPick}
            link="#"
            title="Learn Metaverse for Beginners. What is Metaverse?"
            key={2}
          />
        </div> */}
        {/* Banner 2nd */}
        <div className="d">
          <img src={Banner2} alt="DadsLogo" className="w-[100%] h-[30%] max-h-[200px] my-[2%] object-full" />
        </div>
        {/* Shop to Earn */}
        <div className="">
          <div className="flex justify-between relative mb-4">
            <h2 className="md:text-2xl text-xl text-[#13016D] font-semibold mb-8">Shop to Earn</h2>
            <div className="absolute top-0 right-6  min-h-[30px] bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 text-[16px] flex items-center">
              <a href="#" className="px-6 hover:underline hover:underline-offset-3 hover:cursor-pointer">
                See more {">>"}
              </a>
            </div>
          </div>
          <div className="flex justify-between">
            {shop.map((shop) => (
              <>
                <ProductCard
                  description={shop.introduction}
                  image={shop.logo}
                  link={shop.url}
                  title={shop.name}
                  key={shop.id}
                  price={shop.commissionValue}
                  discount={shop.max_com || 0}
                  earn={shop.max_com || 0}
                />
              </>
            ))}
          </div>
        </div>
        {/* Play to Earn */}
        <div className="">
          <div className="flex justify-between relative mb-4">
            <h2 className="md:text-2xl text-xl text-[#13016D] font-semibold mb-8">Play to Earn</h2>
            <div className="absolute top-0 right-6  min-h-[30px] bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 text-[16px] flex items-center">
              <a href="#" className="px-6 hover:underline hover:underline-offset-3 hover:cursor-pointer">
                See more {">>"}
              </a>
            </div>
          </div>
          <div className="flex justify-between">
            {mision.map((mision) => (
              <PlayCard
                description={mision.description}
                image={mision.image}
                link={mision.url}
                title={mision.title}
                key={mision.id}
              />
            ))}
          </div>
        </div>
        {/* Banner 3nd */}
        <div className="d">
          <img src={Banner2} alt="DadsLogo" className="w-[100%] h-[30%] max-h-[200px] my-[2%] object-full" />
        </div>
        {/* Misson to Earn */}
        <div className=" ">
          <div className="flex justify-between relative mb-4">
            <h2 className="md:text-2xl text-xl text-[#13016D] font-semibold mb-8">Mission to Earn</h2>
            <div className="absolute top-0 right-6  min-h-[30px] bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 text-[16px] flex items-center">
              <a href="#" className="px-6 hover:underline hover:underline-offset-3 hover:cursor-pointer">
                See more {">>"}
              </a>
            </div>
          </div>
          <div className="flex justify-between">
            {mision.map((mision) => (
              <PlayCard
                description={mision.description}
                image={mision.image}
                link={mision.url}
                title={mision.title}
                key={mision.id}
              />
            ))}
          </div>
        </div>
        {/* Read & Install to Earn && banner4 */}
        <div className="flex flex-row justify-between items-stretch">
          <div className="flex flex-col w-2/6 h-[100%]  justify-between">
            {/* Read to Earn */}

            <h2 className="md:text-2xl text-xl text-[#13016D] font-semibold mb-3">Read to Earn</h2>
            <div className="w-full  rounded-[12px] mb-5 px-4">
              <div className="flex items-center bg-[#F8F7FA] w-4/6 h-full min-h-[50px] max-h-[80] py-5 px-6 border rounded-lg shadow-md text-md font-bold">
                COMING SOON
              </div>
            </div>
            {/* Install to Earn */}

            <h2 className="md:text-2xl text-xl text-[#13016D] font-semibold mb-3">Install to Earn</h2>
            <div className="w-full h-[49%] rounded-[12px] px-4">
              <div className="flex items-center bg-[#F8F7FA] w-4/6 h-full  min-h-[50px] max-h-[80] py-5 px-6 border rounded-lg shadow-md text-md font-bold">
                COMING SOON
              </div>
            </div>
          </div>
          <div className="w-4/6 flex rounded-lg pt-10">
            <img src={Banner2} alt="DadsLogo" className="w-[100%] h-[100%] object-contain " />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
