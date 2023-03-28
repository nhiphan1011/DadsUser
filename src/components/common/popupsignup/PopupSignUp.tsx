import { gql, useMutation } from "@apollo/client";
import { GENDER } from "constant/gender";
import { INTEREST } from "constant/interest";
import { LOCATION } from "constant/location";
import { debounce } from "lodash";
import React, { useState } from "react";
import { CheckBox } from "../checkbox/CheckBox";
// import { SelectInput } from "../selectinput/SelectInput";
const MUTATION_INFO_USERS = gql`
  mutation UpdateSubmission($updateInput: UpdateInput!) {
    updateSubmission(UpdateInput: $updateInput) {
      success
      msg
      data {
        address
        brandLove
        category
        coinsDads
      }
    }
  }
`;
export const PopupSignUp = () => {
  const [isClosed, setIsClosed] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);
  const [dataSubmit, setDataSubmit] = useState<any>({
    category: [],
  });
  const [mutation_info] = useMutation(MUTATION_INFO_USERS, {});
  const handleChangeSelect = (e: any) => {
    setDataSubmit({
      ...dataSubmit,
      [e.target.id]: e.target.value,
    });
  };
  const handleChangeSelectMulti = (e: any) => {
    let ArrCate = dataSubmit?.category;
    if (!ArrCate?.includes(e.target.id)) {
      ArrCate.push(e.target.id);
    } else {
      ArrCate = ArrCate.filter((item: string) => item !== e.target.id);
    }
    setDataSubmit({
      ...dataSubmit,
      ["category"]: ArrCate,
    });
  };
  const handleChangeInput = (e: any) => {
    setDataSubmit({
      ...dataSubmit,
      [e.target.name]: e.target.value,
    });
  };
  console.log(dataSubmit, "check data");
  return (
    <div className={`${isClosed ? "hidden" : "block"} w-full h-full fixed z-50`}>
      <div className="bg-[#211d21] opacity-95 w-full h-full absolute top-0 left-0 "></div>

      <div
        id="defaultModal"
        tabIndex={-1}
        aria-hidden="false"
        className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
      >
        <div className="relative w-full h-full max-w-5xl md:h-auto min-w-[700px] ">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg  dark:bg-gray-700 p-10">
            {/* close */}
            <div
              className="absolute top-4 right-4 w-14 h-14 hover:cursor-pointer"
              onClick={() => {
                setIsClosed(true);
              }}
            >
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
            {/* <!-- Modal header --> */}
            <div className="flex-col flex items-center justify-between p-4  rounded-t">
              <p className="text-[32px] text-primary dark:text-white font-bold">Welcome to DADS</p>
              <p className="text-[32px] text-primary dark:text-white">Web3 Earning Network</p>
            </div>
            {/* <!-- Modal body --> */}
            {/* Demographic */}

            <div className=" space-y-6">
              <p className="text-[18px] text-primary dark:text-white font-bold">Demographic</p>
            </div>
            <div className="flex justify-between mt-6 w-full space-x-10">
              {/* <SelectInput Arr={[{ title: "Location", valueArr: LOCATION }]} handleChange={handleChangeSelect} /> */}
              {/* <SelectInput Arr={[{ title: "Gender", valueArr: GENDER }]} handleChange={handleChangeSelect} /> */}
              {/* <SelectInput Arr={[{ title: "Birthday", valueArr: BIRTHDAY }]} handleChange={handleChangeSelect} /> */}
            </div>
            {/* Interest */}
            <div className=" space-y-6 mt-10">
              <p className="text-[18px] text-primary dark:text-white font-bold">Interest</p>
            </div>
            <div className="flex justify-between mt-6 w-full space-x-10">
              <CheckBox
                Arr={[{ title: "Interested Category", valueArr: INTEREST }]}
                handleChange={handleChangeSelectMulti}
                value={dataSubmit.category}
              />
              <div className="w-full h-full">
                <label htmlFor="select" className="block mb-4 text-gray-900 dark:text-white relative">
                  <div
                    className={`after:absolute  after:bg-[#FF008A] after:w-[30px] after:h-[30px] after:top-6 after:right-[-10px] after:rounded-full after:content-["+2"] after:z-10 after:justify-center after:flex after:items-center after:text-[white]  text-[16px]`}
                  >
                    Brand Love
                  </div>
                </label>
                <input
                  onChange={debounce(handleChangeInput, 200)}
                  type="text"
                  name="brandlove"
                  className="w-full min-w-[150px] min-h-[38px] bg-[#EBE1FF] text-[14px] rounded-[12px] shadow-lg border-none relative "
                />
              </div>
            </div>
            {/* <!-- Modal footer --> */}
            {/* Checked */}

            <div className="flex items-center my-4 space-x-10 p-10">
              <input
                id="default-checkbox"
                type="checkbox"
                className="w-10 h-10 text-blue-600 bg-gray-100 border-[#120360] rounded-lg focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label htmlFor="default-checkbox" className="text-[12px] text-primary">
                By clicking “Submit &amp; Receive Reward” you agree to our Terms of Use and Privacy Policy, and confirm
                that you are over the age of 13.
              </label>
            </div>

            {/* Submit */}
            <div className="flex justify-center">
              <button
                onClick={() => {
                  setIsConfirm(true);
                  mutation_info({
                    variables: {
                      updateInput: {
                        gender: dataSubmit.gender ? dataSubmit.gender : "none",
                        location: dataSubmit.location ? dataSubmit.location : "none",
                        dateOfBirth: dataSubmit.date_of_birth === "none" ? "" : dataSubmit.date_of_birth,
                        category: dataSubmit.category ? dataSubmit.category : [],
                        brandLove: dataSubmit?.brandLove?.length === 0 ? "" : dataSubmit.brandLove,
                      },
                    },
                  });
                }}
                type="submit"
                className="text-[20px] text-[white] bg-primary rounded-[20px] p-12 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2  "
              >
                Submit & Receive Reward
              </button>
            </div>
          </div>
        </div>
        {isConfirm && (
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
        )}
      </div>
    </div>
  );
};
