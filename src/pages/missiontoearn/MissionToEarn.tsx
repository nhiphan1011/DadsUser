import PlayCard from "components/cards/PlayCard";
import React, { useEffect, useState } from "react";
import Banner1 from "../../assets/image/Banner1.png";
import DaoIcon from "../../assets/image/DaoIcon.png";
import ArrowMission from "../../assets/image/ArrowMission.png";
import { CATEGORIES_MISSION } from "constant/categories";
import { Link } from "react-router-dom";
import homeApi from "api/homeApi";

const MissionToEarn = () => {
  const [mision, setMision] = useState<Array<any>>([]);

  const fetchMision = async () => {
    const { data } = await homeApi.getHomeMission();
    setMision(data);
  };

  useEffect(() => {
    try {
      fetchMision();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <>
      <div className="container  flex flex-col space-y-10">
        {/* Banner */}
        <div className="w-full h-[20%] ">
          <img src={Banner1} alt="" className="object-contain w-full h-full" />
        </div>
        {/* Categories */}
        <div
          className=" px-5 flex justify-around items-center  md:min-h-[100px]  space-x-5 w-full mx-auto
        bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700
        overflow-hidden "
        >
          {CATEGORIES_MISSION.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center hover:cursor-pointer hover:scale-110 transition h-[5rem] justify-center "
              >
                <img src={item.image} alt="" className="w-full h-full object-contain" />
                <p className="text-sm text-primary mt-2 md:block hidden">{item.title}</p>
              </div>
            );
          })}
        </div>
        {/* DADS Mission */}
        {/* <p className="text-[16px] text-primary">DADS Mission</p>

        <div className="bg-[#F8F7FA] h-[100px] w-full flex items-center ">
          <div className=" flex justify-center w-[60%] mx-auto items-center space-x-10 ">
            <div className=" flex-col flex items-center space-y-2">
              <img src={DaoIcon} alt="" className=" h-[40px] w-[40px]" />
              <button type="button" className="bg-[#FF008A] text-white p-2 rounded-xl">
                Attendance Now
              </button>
            </div>
            <div className="arrow h-[5px] ">
              <img src={ArrowMission} alt="" className="w-full " />
            </div>
            <div className=" flex-col flex items-center">
              <img src={DaoIcon} alt="" className=" h-[40px] w-[40px]" />
              <button type="button" className="">
                Watch 5 Ads
              </button>
            </div>
          </div>
        </div> */}
        {/* Projects Mission */}
        <div className="flex justify-between md:flex-nowrap flex-wrap">
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
    </>
  );
};
export default MissionToEarn;
