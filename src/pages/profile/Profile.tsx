import Badges from "components/common/badges";
import { CheckBox } from "components/common/checkbox/CheckBox";
// import { SelectInput } from "components/common/selectinput/SelectInput";

import { GENDER } from "constant/gender";
import { INTEREST } from "constant/interest";
import { LOCATION } from "constant/location";
import { debounce } from "lodash";
import React, { useState } from "react";

const Profile = () => {
  const [dataSubmit, setDataSubmit] = useState<any>({
    category: [],
  });
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
  return (
    <div className="w-[100%]  h-full min-h-[80vh] px-4">
      {/* Demographic */}
      <div className=" space-y-6">
        <p className="text-xl text-primary dark:text-white font-bold">Demographic</p>
      </div>
      <div className="flex justify-between mt-6  space-x-10 w-[50%]">
        {/* <SelectInput Arr={[{ title: "Location", valueArr: LOCATION }]} handleChange={handleChangeSelect} /> */}
        {/* <SelectInput Arr={[{ title: "Gender", valueArr: GENDER }]} handleChange={handleChangeSelect} /> */}
        {/* <SelectInput Arr={[{ title: "Birthday", valueArr: BIRTHDAY }]} handleChange={handleChangeSelect} /> */}
      </div>
      {/* Interest */}
      <div className="">
        <div className=" space-y-6 mt-10">
          <p className="text-xl text-primary dark:text-white font-bold">Interest</p>
        </div>
        <div className="flex md:justify-between mt-6 md:w-[80%] md:space-x-10 profile-select md:flex-row flex-col">
          <div className="md:w-[50%] flex flex-col">
            <CheckBox
              Arr={[{ title: "Interested Category", valueArr: INTEREST }]}
              handleChange={handleChangeSelectMulti}
              value={dataSubmit.category}
            />
            <div className="w-full min-h-[100px] shadow-lg border border-[#EBE1FF] my-10 overflow-y-auto max-h-[100px] px-4 rounded-md">
              <div className="flex flex-row flex-wrap">
                <Badges content="Books" />
                <Badges content="Booasdasdasdasdasks" />
                <Badges content="BooBooasdasdasdasd" />
              </div>
            </div>
          </div>
          <div className="md:w-[50%] flex flex-col">
            <label htmlFor="select" className="block mb-4 text-gray-900 dark:text-white relative">
              <div
                className={`after:absolute  after:bg-[#FF008A] after:w-[30px] after:h-[30px] after:top-6 after:right-[-10px] after:rounded-full after:content-["+2"] after:z-10 after:justify-center after:flex after:items-center after:text-[white] text-primary text-xl font-thin`}
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

            <div className="w-full min-h-[100px] shadow-lg border border-[#EBE1FF] my-10 overflow-y-auto max-h-[100px] px-4 rounded-md">
              <div className="flex flex-row flex-wrap">
                <Badges content="Books" />
                <Badges content="Booasdasdasdasdasks" />
                <Badges content="BooBooasdasdasdasd" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center md:w-[80%] my-10">
        <button type="submit" className="bg-[#FC008A] p-4 text-white rounded-[12px] shadow-xl">
          Request Change
        </button>
      </div>
    </div>
  );
};
export default Profile;
