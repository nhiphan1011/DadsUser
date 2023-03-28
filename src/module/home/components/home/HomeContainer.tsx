import React, { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "hooks";

import HomeView from "./HomeView";

import { EBANNER_TYPE, getBanner, selecthome } from "module/home";

type Props = {};

const HomeContainer = (props: Props) => {
  const dispatch = useAppDispatch();
  const { list } = useAppSelector(selecthome);

  const bannerlist = list.filter((item) => item.bannerPosition <= 8 && item.bannerType === EBANNER_TYPE.home);
  const bannerside = list.filter(
    (item) => item.bannerPosition === 9 || (item.bannerPosition === 10 && item.bannerType === EBANNER_TYPE.home)
  );
  const eventbanner = list.filter((item) => item.bannerPosition === 11 && item.bannerType === EBANNER_TYPE.home);
  const footbanner = list.filter((item) => item.bannerPosition === 12 && item.bannerType === EBANNER_TYPE.home);
  const topicklist = list.filter((item) => item.bannerType === EBANNER_TYPE.topick);
  const middlebanner = list.filter((item) => item.bannerType === EBANNER_TYPE.middle);

  useEffect(() => {
    dispatch(getBanner());
  }, []);

  return (
    <>
      <HomeView
        banner={bannerlist}
        bannerside={bannerside}
        topick={topicklist}
        middle={middlebanner}
        footbanner={footbanner}
        eventbanner={eventbanner}
      />
    </>
  );
};

export default HomeContainer;
