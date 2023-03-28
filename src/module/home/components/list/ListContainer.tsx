import React, { useEffect, useState } from "react";

import { API_HOME, ListView } from "module/home";

export interface IListView {
  name: string;
  url: string;
  type: string;
}

const ListContainer = ({ name, url, type }: IListView) => {
  const [mission, setMission] = useState<Array<any>>([]);
  const [shop, setShop] = useState<Array<any>>([]);
  const [play, setPlay] = useState<Array<any>>([]);

  const fetchMision = async () => {
    const { data } = await API_HOME.getHomeMission();
    setMission(data);
  };

  const fetchShop = async () => {
    const { data } = await API_HOME.getHomeShop();
    setShop(data);
  };

  const fetchPlay = async () => {
    const { data } = await API_HOME.getHomePlay();
    setPlay(data);
  };

  useEffect(() => {
    try {
      fetchMision();
      fetchShop();
      fetchPlay();
    } catch (error) {
      console.log(error);
    }
  }, []);

  switch (type) {
    case "shop":
      // code block

      return <ListView name={name} data={shop} type={type} url={url} />;
    case "mission":
      // code block
      return <ListView name={name} data={mission} type={type} url={url} />;
    case "play":
      // code block
      return <ListView name={name} data={play} type={type} url={url} />;
    default:
      return <p>...Loading</p>;
    // code block
  }
};

export default ListContainer;
