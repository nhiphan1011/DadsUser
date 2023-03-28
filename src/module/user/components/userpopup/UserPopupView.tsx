import React from "react";
import { debounce } from "lodash";

import { useAppSelector } from "hooks";

import { MultiSelect, SelectInput } from "components";

import { LOCATION, BIRTHDAY, GENDER, INTEREST } from "constant";
import { NUSER_INITITIAL_STATE, selectuser } from "module/user";

export interface IUserPopupView {
  active: boolean;
  check: boolean;
  value: NUSER_INITITIAL_STATE.IDATA_INIT;
  handleClose: () => void;
  handleCheck: () => void;
  handleSelect: (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
  handleMultiple: (nam: string, value: string) => void;
  handleSubmit: (data: NUSER_INITITIAL_STATE.IDATA_INIT) => void;
}

const UserPopupView = ({
  active,
  check,
  value,
  handleSelect,
  handleClose,
  handleMultiple,
  handleCheck,
  handleSubmit,
}: IUserPopupView) => {
  const { loading } = useAppSelector(selectuser);

  return (
    <>
      <div
        className={`bg-[#211d21] w-screen h-screen fixed top-0 left-0 z-[180] transition-opacity duration-150 ease-linear
          ${active ? "opacity-50 visible" : "opacity-0 invisible"}`}
      ></div>
      <div
        className={`${
          active ? "opacity-100 visible" : "opacity-0 invisible"
        } fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-[200] w-full max-w-5xl px-[16px] transition-opacity duration-2000 ease-linear`}
      >
        <div className="relative w-full h-full">
          <div className="relative bg-white rounded-lg  dark:bg-gray-700 p-10">
            <div className="absolute top-4 right-4 w-14 h-14 hover:cursor-pointer" onClick={handleClose}>
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>

            <div className="flex-col flex items-center justify-between p-4  rounded-t">
              <p className="text-[32px] text-primary dark:text-white font-bold">Welcome to DADS</p>
              <p className="text-[32px] text-primary dark:text-white">Web3 Earning Network</p>
            </div>

            <div className=" space-y-6">
              <p className="text-[18px] text-primary dark:text-white font-bold">Demographic</p>
            </div>
            <div className="flex justify-between mt-6 w-full space-x-10">
              <label className="w-1/3">
                <span className="text-primary font-light pb-[10px] block capitalize">Location</span>
                <SelectInput name="location" arr={LOCATION} handleChange={handleSelect} />
              </label>
              <label className="w-1/3">
                <span className="text-primary font-light pb-[10px] block capitalize">Birthday</span>
                <SelectInput name="dateOfBirth" arr={BIRTHDAY} handleChange={handleSelect} />
              </label>
              <label className="w-1/3">
                <span className="text-primary font-light pb-[10px] block capitalize">Gender</span>
                <SelectInput name="gender" arr={GENDER} handleChange={handleSelect} />
              </label>
            </div>

            <div className=" space-y-6 mt-10">
              <p className="text-[18px] text-primary dark:text-white font-bold">Interest</p>
            </div>
            <div className="flex justify-between mt-6 w-full space-x-10">
              <label className="w-1/2">
                <span className="text-primary font-light pb-[10px] block capitalize">Interested Category</span>
                <MultiSelect name="category" value={value.category} arr={INTEREST} handleChange={handleMultiple} />
              </label>

              <div className="w-1/2 h-full">
                <label htmlFor="select" className="text-primary font-light pb-[10px] block capitalize relative">
                  <div
                    className={`after:absolute  after:bg-[#FF008A] after:w-[30px] after:h-[30px] after:top-6 after:right-[-10px] after:rounded-full after:content-["+2"] after:z-10 after:justify-center after:flex after:items-center after:text-[white] text-[1.2rem]`}
                  >
                    Brand Love
                  </div>
                </label>
                <input
                  className="w-full min-w-[150px] min-h-[38px] bg-[#EBE1FF] text-[14px] rounded-[12px] shadow-lg border-none relative "
                  type="text"
                  name="brandLove"
                  onChange={debounce(handleSelect, 200)}
                />
              </div>
            </div>

            <div className="flex items-center my-4 space-x-10 p-10">
              <input
                className="w-10 h-10 text-blue-600 bg-gray-100 border-[#120360] rounded-lg focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                type="checkbox"
                onChange={handleCheck}
              />
              <label htmlFor="default-checkbox" className="text-[12px] text-primary">
                By clicking “Submit &amp; Receive Reward” you agree to our Terms of Use and Privacy Policy, and confirm
                that you are over the age of 13.
              </label>
            </div>

            <div className="flex justify-center">
              <button
                className="disabled:opacity-80 text-[20px] text-[white] bg-primary rounded-[20px] px-[24px] py-[12px] focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 flex items-center"
                type="submit"
                disabled={loading || !check}
                onClick={() => handleSubmit(value)}
              >
                Submit & Receive Reward
                {loading && (
                  <div role="status" className="ml-[12px]">
                    <svg
                      aria-hidden="true"
                      className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
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
                    <span className="sr-only">Loading...</span>
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
        {/* {isConfirm && (
          <div className=" bg-white shadow-2xl min-w-[450px] min-h-[50px]  p-10 space-y-10 z-[51] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex-col flex text-center items-center">
            <p> Your profile can not change within 30 days, kindly reveiew carefully and confirm your profile</p>
            <div className="flex space-x-8">
              <button
                onClick={() => {
                  setIsConfirm(false);
                }}
                type="submit"
                className="bg-gray-200 text-[12px] px-10 py-4 rounded-[12px]"
              >
                Back
              </button>
              <button
                onClick={() => {
                  setIsConfirm(false);
                }}
                type="submit"
                className="bg-[#FF008A] text-[12px] text-white px-10 py-4 rounded-[12px]"
              >
                Confirm
              </button>
            </div>
          </div>
        )} */}
      </div>
    </>
  );
};

export default UserPopupView;
