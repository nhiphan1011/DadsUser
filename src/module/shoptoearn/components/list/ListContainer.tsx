import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "hooks";

import ListView from "./ListView";

import { getProductList, getShopList, selectproduct } from "module/shoptoearn";

type Props = {};

const ListContainer = (props: Props) => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { shopslist, list } = useAppSelector(selectproduct);

  useEffect(() => {
    dispatch(getShopList({ id }));
    dispatch(getProductList({ id }));
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [id]);

  return <ListView shoplist={shopslist} productlist={list} id={id} />;
};

export default ListContainer;
