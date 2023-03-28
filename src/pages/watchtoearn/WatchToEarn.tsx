import React, { useRef, useState } from "react";
import Slider from "react-slick";
import NextArrow from "./arrow/NextArrow";
import PrevArrow from "./arrow/PrevArrow";
type Props = {};

const WatchToEarnPage = (props: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  //creating the ref
  const ref = useRef<any>({});

  const next = () => {
    setLoading(true);
    setTimeout(() => {
      ref.current.slickNext();
      setLoading(false);
    }, 3000);
  };

  const previous = () => {
    ref.current.slickPrev();
  };

  // setting slider configurations
  const [sliderSettings, setSliderSettings] = useState({
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    draggable: false,
    arrows: false,
  });

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   vertical: true,
  //   verticalSwiping: true,
  //   draggable: false,
  //   // beforeChange: function (currentSlide: any, nextSlide: any) {
  //   //   console.log("before change", currentSlide, nextSlide);
  //   // },
  //   // afterChange: function (currentSlide: any) {
  //   //   console.log("after change", currentSlide);
  //   // },
  //   nextArrow: <NextArrow className="nextArrow before:text-lg" onClick={} />,
  //   prevArrow: <PrevArrow className="preArrow " onClick={() => console.log(1)} />,
  // };
  return (
    <div className="w-1/2 relative">
      <Slider {...sliderSettings} ref={ref}>
        <div>
          <img src="https://dads-blush.vercel.app/assets/reward.eeda6f58.png" alt="ads" />
        </div>
        <div>
          <img src="https://dads-blush.vercel.app/assets/reward.eeda6f58.png" alt="ads" />
        </div>
        <div>
          <img src="https://dads-blush.vercel.app/assets/reward.eeda6f58.png" alt="ads" />
        </div>
        <div>
          <img src="https://dads-blush.vercel.app/assets/reward.eeda6f58.png" alt="ads" />
        </div>
        <div>
          <img src="https://dads-blush.vercel.app/assets/reward.eeda6f58.png" alt="ads" />
        </div>
        <div>
          <img src="https://dads-blush.vercel.app/assets/reward.eeda6f58.png" alt="ads" />
        </div>
      </Slider>
      <div className="flex flex-col absolute top-1/2 right-[-20%]">
        {!loading ? (
          <>
            <button onClick={previous}>
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="h-16 w-16 [color]-$fill-color"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
              </svg>
            </button>
            <button onClick={next}>
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="h-16 w-16 [color]-$fill-color"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
                ></path>
              </svg>
            </button>
          </>
        ) : (
          <>
            <svg
              aria-hidden="true"
              className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600 "
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          </>
        )}
      </div>
    </div>
  );
};

export default WatchToEarnPage;
