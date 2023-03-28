import { useEffect, useState } from "react";
import PlayCard from "components/cards/PlayCard";
import Banner1 from "../../assets/image/Banner1.png";
import homeApi from "api/homeApi";
import { CAROSEUL } from "constant/carousel";

const PlayToEarn = () => {
  const [play, setPlay] = useState<Array<any>>([]);

  const fetchPlay = async () => {
    const { data } = await homeApi.getHomePlay();
    setPlay(data);
  };

  useEffect(() => {
    try {
      fetchPlay();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div className=" flex flex-col space-y-10">
      {/* Banner */}
      <div className="w-full">
        <img src={Banner1} alt="" className="object-contain w-full h-full" />
      </div>

      {/* DADS Mission */}

      {/* Projects Mission */}
      {/* <p className="text-[16px] text-primary">Projects Mission</p> */}
      <div
        className=" px-5 flex justify-around items-center  md:min-h-[100px]  space-x-5 w-5/6 mx-auto
        bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700
        overflow-hidden"
      >
        {CAROSEUL.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center hover:cursor-pointer hover:scale-110 transition w-1/6 h-[4rem] justify-center "
            >
              <img src={item.image} alt="" className="w-full h-full object-contain" />
              <p className="text-sm text-primary mt-2 md:block hidden">{item.title}</p>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between md:flex-nowrap flex-wrap">
        {play.map((mision) => (
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
  );
};
export default PlayToEarn;
