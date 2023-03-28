import React from "react";

import Header from "components/layouts/header/Header";
import SideBar from "./SideBar";
import Footer from "components/layouts/Footer";

import { ILayout } from "interface/components/layout";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { PopupSignUp } from "components/common/popupsignup/PopupSignUp";
import BottomNavigation from "./BottomNavigation";

const Layout = () => {
  const location = useLocation();
  return (
    <>
      {/* <PopupSignUp /> */}
      <Header />
      {!(location.pathname === "/assistants") ? (
        <>
          <div className="flex max-w-[1024px] mx-auto py-10">
            {/* {!(location.pathname === "/assistants") && <SideBar />} */}
            <SideBar />
            <main className="w-full">
              <Outlet />
            </main>
          </div>
          <Footer />
          <BottomNavigation />
        </>

      ) : (
        <div className="w-[100%]">
          <main className="w-full" >
            <Outlet />
          </main>
          <Footer />
          <BottomNavigation />
        </div>
      )}
    </>
  );
};

export default Layout;
