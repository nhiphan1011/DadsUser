import React, { useState } from "react";

import { useAppDispatch, useAppSelector } from "hooks";

import UserPopupView from "./UserPopupView";

import { DATA_INIT, NUSER_INITITIAL_STATE, selectuser, submitUser, userAction } from "module/user";

export interface IUserPopupContainer {
  init?: boolean;
}

const UserPopupContainer = () => {
  const dispatch = useAppDispatch();
  const { submitform } = useAppSelector(selectuser);
  const [check, setChecked] = useState(false);
  // const [open, setOpen] = useState(init || false);
  const [dataSubmit, setDataSubmit] = useState(DATA_INIT);

  const handleClose = () => {
    dispatch(userAction.closeSubmitFrom());
  };
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setDataSubmit({
      ...dataSubmit,
      [e.target.name]: e.target.value,
    });
  };
  const handleMultiple = (name: string, value: string) => {
    const obj = dataSubmit[name as keyof NUSER_INITITIAL_STATE.IDATA_INIT] as Array<string>;

    setDataSubmit({
      ...dataSubmit,
      [name]: obj.find((item) => item === value) ? obj.filter((item) => item !== value) : [...obj, value],
    });
  };
  const handleCheck = () => {
    setChecked(!check);
  };

  const handleSubmit = (data: NUSER_INITITIAL_STATE.IDATA_INIT) => {
    dispatch(submitUser({ updateInput: data }));
  };

  return (
    <UserPopupView
      active={submitform}
      check={check}
      value={dataSubmit}
      handleSubmit={handleSubmit}
      handleClose={handleClose}
      handleSelect={handleSelect}
      handleMultiple={handleMultiple}
      handleCheck={handleCheck}
    />
  );
};

export default UserPopupContainer;
