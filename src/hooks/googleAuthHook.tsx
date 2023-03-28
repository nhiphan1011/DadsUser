import React from "react";

import axiosClient from "services/axiosClients";
import { useAppDispatch } from "./reduxHooks";

// import { authAction, getGoogleAuth } from "module/auth";

const useGoogleAuth = () => {
  const dispatch = useAppDispatch();

  const handleGoogleButton = () => {
    console.log("hello");

    // dispatch(getGoogleAuth());
  };
  return {
    handleGoogleButton,
  };
};

export default useGoogleAuth;
