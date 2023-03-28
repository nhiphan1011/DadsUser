import React, { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";

import { globalAction, selectGlobal } from "globalSlice";

import { ALERT_FORMAT_BG, ALERT_FORMAT_BTN, ALERT_FORMAT_TEXT } from "constant/components";

import { INotify } from "interface/components/common";

import { objectValueExtractor } from "utils/common";

const Notify = ({ className = "" }: INotify) => {
  const dispatch = useAppDispatch();
  const { stateOpenNotify, message, format } = useAppSelector(selectGlobal);

  const handleDissmiss = () => {
    dispatch(globalAction.closeNotify());
  };

  useEffect(() => {
    if (stateOpenNotify === true) {
      let timer: any = setTimeout(() => {
        handleDissmiss();
        return clearTimeout(timer);
      }, 4000);
    }
  }, [stateOpenNotify]);

  return (
    <div
      className={`${className} ${
        typeof format === "string" && format!.length > 0
          ? objectValueExtractor(`${format}`, ALERT_FORMAT_BG)
          : objectValueExtractor(`info`, ALERT_FORMAT_BG)
      }
      ${!stateOpenNotify ? "translate-x-[110%] opacity-0" : "translate-x-0 opacity-100"} 
        flex items-center p-4 rounded-lg w-max max-w-[85vw] md:max-w-[60%] transition-all duration-200 ease-linear fixed z-[300] top-[86px] right-[20px]`}
      role="alert"
    >
      <svg
        aria-hidden="true"
        className={`
        ${
          typeof format === "string" && format!.length > 0
            ? objectValueExtractor(`${format}`, ALERT_FORMAT_TEXT)
            : objectValueExtractor(`info`, ALERT_FORMAT_TEXT)
        }
        flex-shrink-0 w-5 h-5`}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clipRule="evenodd"
        ></path>
      </svg>
      {/* <span className="sr-only">Info</span> */}
      <div
        className={`
         ${
           typeof format === "string" && format!.length > 0
             ? objectValueExtractor(`${format}`, ALERT_FORMAT_TEXT)
             : objectValueExtractor(`info`, ALERT_FORMAT_TEXT)
         }
        ml-3 font-medium`}
      >
        {message}
      </div>
      <button
        type="button"
        className={`
        ${
          typeof format === "string" && format!.length > 0
            ? objectValueExtractor(`${format}`, ALERT_FORMAT_BTN)
            : objectValueExtractor(`info`, ALERT_FORMAT_BTN)
        }
          ml-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 p-1.5 inline-flex h-8 w-8`}
        aria-label="Close"
        onClick={handleDissmiss}
      >
        <span className="sr-only">Close</span>
        <svg
          aria-hidden="true"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Notify;
