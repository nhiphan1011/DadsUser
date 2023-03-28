import React from "react";
import { Link } from "react-router-dom";
import { HomeIcon, ChartBarIcon, UserIcon, WalletIcon, PuzzlePieceIcon } from "@heroicons/react/24/solid";
type Props = {};

const SideBar = (props: Props) => {
  return (
    <aside className="w-1/6 p-5 h-[70vh] sticky top-[10%] md:block hidden" aria-label="Sidebar">
      <div className="overflow-y-auto py-4 px-3 bg-[F5F5FA] shadow-md shadow-gray-400 rounded-xl dark:bg-gray-800 h-full ">
        <ul className="space-y-2">
          <li>
            <Link
              to={"/"}
              className="flex items-center p-2 text-base font-normal text-primary rounded-lg dark:text-white hover:bg-purple-400 dark:hover:bg-gray-700"
            >
              <HomeIcon className="w-10 h-10 text-primary" />
              <span className="ml-3 font-medium text-lg">Home</span>
            </Link>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-base font-normal text-primary rounded-lg dark:text-white hover:bg-purple-400 dark:hover:bg-gray-700"
            >
              <ChartBarIcon className="w-10 h-10 text-primary" />
              <span className="flex-1 ml-3 font-medium text-lg whitespace-nowrap">My rewards</span>
            </a>
          </li>
          <li>
            <Link
              to={"/profile"}
              className="flex items-center p-2 text-base font-normal text-primary rounded-lg dark:text-white hover:bg-purple-400 dark:hover:bg-gray-700"
            >
              <UserIcon className="w-10 h-10 text-primary"></UserIcon>
              <span className="flex-1 ml-3 font-medium text-lg whitespace-nowrap">Profile</span>
            </Link>
          </li>
          <li>
            <Link
              to={"/wallet"}
              className="flex items-center p-2 text-base font-normal text-primary rounded-lg dark:text-white hover:bg-purple-400 dark:hover:bg-gray-700"
            >
              <WalletIcon className="w-10 h-10 text-primary" />
              <span className="flex-1 ml-3 font-medium text-lg whitespace-nowrap">Wallet</span>
            </Link>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-base font-normal text-primary rounded-lg dark:text-white hover:bg-purple-400 dark:hover:bg-gray-700"
            >
              <PuzzlePieceIcon className="w-10 h-10 text-primary" />
              <span className="flex-1 ml-3 font-medium text-lg whitespace-nowrap">DADS Extension</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
