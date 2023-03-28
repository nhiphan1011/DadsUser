import React, { useEffect, useState } from "react";
import { useNavigate, useRoutes } from "react-router-dom";
import { PublicRoute, AutRoutes } from "routes";
import Cookies from "js-cookie";
import { ethers } from "ethers";

import { connectWallet } from "hooks/walletAuthHooks";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";

import * as Layout from "components/layouts";
// import SideBar from "components/layouts/SideBar";
import Notify from "components/common/notify/Notify";
import { PopupUser } from "module/user";

import { getUser } from "module/auth";
import { selectAuth } from "pages/auth/authSlice";

function App() {
  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector(selectAuth);

  useEffect(() => {
    dispatch(getUser());
  }, [isAuth]);

  return (
    <>
      <div className="App">{useRoutes([...PublicRoute, ...AutRoutes(isAuth)])}</div>
      <Notify />
      <PopupUser />
    </>
  );
}

export default App;
