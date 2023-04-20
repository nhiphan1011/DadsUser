import React from "react";
import { Link } from "react-router-dom";

import { useAppDispatch } from "hooks";

import SearchField from "components/formcontrols/SearchField";
import Dropdown from "./Dropdown";
import LoginButton from "./LoginButton";
import Logo from 'assets/image/Logo_dads.png'
// import { loginUser } from "module/auth";

import { BellIcon } from "@heroicons/react/24/solid";
const Header = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    // dispatch(loginUser());
  };

  return (
    <header className="sticky top-0 z-30 w-full px-2 py-6 bg-primary sm:px-4 shadow-xl">
      <div className="md:container flex md:flex-wrap flex-nowrap items-center justify-between mx-auto md:px-0 px-4">
        <div className="flex space-x-10 items-center justify-center">
          <Link to="/" className="flex items-center">
            <img src={Logo} className="h-6 mr-3 sm:h-10" alt="Flowbite Logo" />
          </Link>
          <Link to="/" className="flex items-center text-white">
            Become an Advertiser
          </Link>
        </div>

        {/* <SearchField /> */}
        {/* <Dropdown /> */}
        <div className="flex space-x-10 items-center justify-center">
          <button>
            <BellIcon className="w-8 h-8 text-white -mt-2" />
          </button>
          <LoginButton handleLogin={handleClick} />
        </div>
      </div>
    </header>
  );
};
export default Header;
