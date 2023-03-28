import React from "react";
import { HomeIcon, ChartBarIcon, UserIcon, WalletIcon, PuzzlePieceIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
type Props = {};

const BottomNavigation = (props: Props) => {
  return (
    <div className="bg-primary fixed bottom-0 overflow-visible w-full shadow-inner p-4 flex flex-row md:flex-col md:px-10 md:top-0 md:relative">
      <div className="flex flex-1 justify-center text-xs font-bold text-center md:py-4 md:flex-none md:justify-start">
        <Link to="/" className="md:inline-flex md:gap-2">
          <HomeIcon className="w-12 h-12 text-white" />
          <span className="font-medium text-lg text-white">Home</span>
        </Link>
      </div>
      <div className="flex flex-1 justify-center text-xs font-bold text-center md:py-4 md:flex-none md:justify-start">
        <Link to="/" className="md:inline-flex md:gap-2">
          <ChartBarIcon className="w-12 h-12 text-white" />
          <span className="font-medium text-lg text-white">Rewards</span>
        </Link>
      </div>
      <div className="flex flex-1 justify-center text-xs font-bold text-center md:py-4 md:flex-none md:justify-start">
        <Link to="/profile" className="md:inline-flex md:gap-2">
          <UserIcon className="w-12 h-12 text-white" />
          <span className="font-medium text-lg text-white">Profile</span>
        </Link>
      </div>
      {/* <div className="flex flex-1 justify-center font-bold text-center md:py-4 md:order-5 md:flex-none md:justify-start">
        <a href="#" className="md:inline-flex md:gap-2">
          <svg
            className="w-12 h-12 inline-block md:w-6 md:h-6 md:inline-block text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="hidden md:block text-xs pt-1">Add</span>
        </a>
      </div> */}
      <div className="flex flex-1 justify-center text-xs font-bold text-center md:py-4 md:flex-none md:justify-start">
        <Link to="/wallet" className="md:inline-flex md:gap-2">
          <WalletIcon className="w-12 h-12 text-white" />
          <span className="font-medium text-lg text-white">Wallet</span>
        </Link>
      </div>
      <div className="flex flex-1 justify-center text-xs font-bold text-center md:py-4 md:flex-none md:justify-start">
        <Link to="/" className="md:inline-flex md:gap-2">
          <PuzzlePieceIcon className="w-12 h-12 text-white" />
          <span className="font-medium text-lg text-white">Extension</span>
        </Link>
      </div>
    </div>
  );
};

export default BottomNavigation;
