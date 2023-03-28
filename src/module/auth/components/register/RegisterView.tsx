import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import MetaBtn from "assets/image/ButtonGitHub.png";
import GoogleBtn from "assets/image/ButtonGoogle.png";
import { CustomContainer } from "components/common";

import { NResgisterView, NInitialState, REGISTER_SCHEMA, REGISTER_INITIALSTATE } from "module/auth";

const RegisterView = ({ formSubmit, metaSubmit, googleSubmit }: NResgisterView.IRegisterView) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NInitialState.IREGISTER_INITIALSTATE>({
    resolver: yupResolver(REGISTER_SCHEMA),
    defaultValues: REGISTER_INITIALSTATE,
  });
  return (
    <div className="h-full">
      <CustomContainer className="h-full">
        <div className="wrapper h-full flex flex-col justify-center items-center">
          <form onSubmit={handleSubmit(formSubmit)} className="relative space-y-[60px] rounded-md w-[80%]">
            <h1 className="text-5xl font-semibold text-primary">Get Started!</h1>
            <div className="space-y-16 flex flex-col items-center">
              <label className="inline-block w-full">
                <input
                  className="bg-input_grey text-[1.6rem] p-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  placeholder="Username"
                  {...register("username")}
                ></input>

                {errors.email && <p className="p-1 text-[13px] font-light  text-orange-500">{errors.email.message}</p>}
              </label>
              <label className="inline-block w-full">
                <input
                  className="bg-input_grey text-[1.6rem] p-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="email"
                  placeholder="Email"
                  {...register("email")}
                ></input>
                {/* <input type="password" placeholder="Password" className={`input w-full`} />
                {errors.password && (
                  <p className="p-1 text-[13px] font-light  text-orange-500">{errors.password.message}</p>
                )} */}
              </label>
              <label className="inline-block w-full">
                <input
                  className="bg-input_grey text-[1.6rem] p-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="password"
                  autoComplete="on"
                  placeholder="Password"
                  {...register("password")}
                ></input>
                {errors.password && (
                  <p className="p-1 text-[13px] font-light  text-orange-500">{errors.password.message}</p>
                )}
              </label>
              <button
                className="w-full text-[2rem] max-w-[340px] rounded-md bg-secondary py-[1rem] font-medium text-white capitalize"
                type="submit"
              >
                Create Account
              </button>
            </div>
          </form>

          <div className="w-full pt-16 text-[2rem] font-medium text-[#B0BAC3]">
            <h5 className="text-center">- OR -</h5>
            <div className="btn-wrapper flex justify-between pt-[26px] max-w-[500px] mx-auto">
              <a className="w-[40%]" href="https://sv-user.dadsnetwork.co/auth/google/url">
                <img className="w-full" src={GoogleBtn} alt="" />
              </a>
              <button className="w-[56%]" onClick={metaSubmit}>
                <img className="w-full" src={MetaBtn} alt="" />
              </button>
            </div>
          </div>
        </div>
      </CustomContainer>
    </div>
  );
};

export default RegisterView;
