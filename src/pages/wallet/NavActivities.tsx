import React from "react";
import { TabFilter } from "./TabFilter";

const NavActivities = () => {
  return (
    <>
      <div className="bg-[#F5F0FF] md:w-[80%] min-h-[450px] rounded-[20px] p-6 mb-20 shadow-md md:block hidden">
        <div className="mb-4 border-b border-[gray] w-full h-full">
          <ul
            className="flex flex-wrap -mb-px text-sm font-medium text-center "
            id="myTab"
            data-tabs-toggle="#myTabContent"
            role="tablist"
          >
            <li className="mr-2" role="presentation">
              <button
                className="inline-block p-4 border-b-2 rounded-t-lg text-[14px]"
                id="profile-tab"
                data-tabs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Profile
              </button>
            </li>
            <li className="mr-2" role="presentation">
              <button
                className="inline-block text-[14px] p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                id="dashboard-tab"
                data-tabs-target="#dashboard"
                type="button"
                role="tab"
                aria-controls="dashboard"
                aria-selected="false"
              >
                Dashboard
              </button>
            </li>
            <li className="mr-2" role="presentation">
              <button
                className="inline-block  text-[14px] p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                id="settings-tab"
                data-tabs-target="#settings"
                type="button"
                role="tab"
                aria-controls="settings"
                aria-selected="false"
              >
                Settings
              </button>
            </li>
            <li role="presentation">
              <button
                className="inline-block text-[14px] p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                id="contacts-tab"
                data-tabs-target="#contacts"
                type="button"
                role="tab"
                aria-controls="contacts"
                aria-selected="false"
              >
                Contacts
              </button>
            </li>
          </ul>
        </div>
        <div id="myTabContent" className=" flex space-x-12">
          <TabFilter title="Transaction ID" />
          <TabFilter title="My Earning" />
          <TabFilter title="The number of ads watched" />
          <TabFilter title="Status" />
        </div>
      </div>
    </>
  );
};
export default NavActivities;
