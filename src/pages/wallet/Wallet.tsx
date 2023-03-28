import BoxBalance from "components/common/boxbalance/BoxBalance";
import Profile from "pages/profile/Profile";

import React from "react";
import { Billing } from "./Billing";
import NavActivities from "./NavActivities";
import { TableWallet } from "./TableWallet";

const Wallet = () => {
  return (
    <div className="w-full h-full px-4">
      {/* Balance */}
      <p className="font-bold text-xl mb-4 text-primary">Balance</p>
      <div className="flex md:space-x-10 mb-16 md:flex-row flex-col md:space-y-0 space-y-4">
        <BoxBalance title="Total" button={false} eDads={"1,000,000"} />{" "}
        <BoxBalance title="In-progress" button={false} eDads={"500,000"} />{" "}
        <BoxBalance title="Can claim" button={true} eDads={"500,000"} />{" "}
      </div>

      {/* Wallet ID */}
      <p className="font-bold text-xl mb-4 text-primary">Wallet ID </p>

      <TableWallet />
      {/* Activities */}
      <p className="font-bold text-xl mb-4 text-primary">Activities</p>

      <NavActivities />

      {/* Billing */}
      <div className="flex justify-between md:w-[80%]">
        <p className="font-bold text-xl mb-4 text-primary">Billing</p>
        <div className="md:min-w-[100px]">
          <select
            id="countries"
            className="pl-6 bg-gray-50 border-none border-gray-300 text-gray-900 text-[12px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="UA">Date</option>
            <option value="US">11/1/2020</option>
            <option value="CA">12/1/2020</option>
            <option value="FR">13/1/2020</option>
            <option value="DE">14/1/2020</option>
          </select>
        </div>
      </div>

      <Billing />
    </div>
  );
};
export default Wallet;
