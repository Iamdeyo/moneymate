"use client";

import Link from "next/link";
import { useState } from "react";

const Signup = () => {
  const [hide, setHide] = useState(true);
  return (
    <div className="flex flex-col min-h-screen px-4 bg-darkslateblue pb-10 items-center text-white">
      <div className="mt-20">
        <p className="text-2xl font-bold">CREATE AN ACCOUNT</p>
        <p className="mt-4">Already have an account? sign in</p>
      </div>
      <div className="text-sm font-medium w-full flex flex-col gap-8 mt-10">
        <div className="w-full relative p h-[3.81rem] rounded-[24px] overflow-hidden">
          <div className="absolute top-[0.75rem] left-[1.25rem] text-[0.63rem] tracking-[-0.12px] font-semibold text-lightslategray">
            Name
          </div>
          <input
            type="text"
            className="w-full h-full outline-none px-[1.25rem] pt-[1rem] font-medium text-gray-900 placeholder:text-gray-200"
            placeholder="Louis Real"
          />
        </div>
        <div className="w-full relative p h-[3.81rem] rounded-[24px] overflow-hidden">
          <div className="absolute top-[0.75rem] left-[1.25rem] text-[0.63rem] tracking-[-0.12px] font-semibold text-lightslategray">
            Email
          </div>
          <input
            type="text"
            className="w-full h-full outline-none px-[1.25rem] pt-[1rem] font-medium text-gray-900 placeholder:text-gray-200"
            placeholder="Louis04real@gmail.com"
          />
        </div>
        <div className="w-full relative p h-[3.81rem] rounded-[24px] overflow-hidden">
          <div className="absolute top-[0.75rem] left-[1.25rem] text-[0.63rem] tracking-[-0.12px] font-semibold text-lightslategray">
            Password
          </div>
          <input
            type={hide ? "password" : "text"}
            className="w-full h-full outline-none px-[1.25rem] pt-[1rem] font-medium text-gray-900 placeholder:text-gray-200"
            placeholder="••••••••••••"
          />
          <div
            className="absolute top-[1.25rem] right-[1rem] w-[1.5rem] h-[1.5rem]"
            onClick={() => setHide(!hide)}
          >
            {hide ? (
              <img src="/show.svg" alt="hide" />
            ) : (
              <img src="/hide.svg" alt="hide" />
            )}
          </div>
        </div>
      </div>
      <div className="mt-8 relative w-full h-[2.75rem] text-white flex gap-4">
        <input
          className="w-[1.38rem] h-[1.38rem] overflow-hidden"
          type="checkbox"
        />
        <div className="leading-[1.38rem] font-medium flex items-center w-full">
          <span className="[line-break:anywhere] w-full">
            <span>By signing up, you agree to the</span>
            <span className="text-orange"> Terms of</span>
            <span>{` `}</span>
            <span className="text-orange">{`Service `}</span>
            <span>and</span>
            <span className="text-orange"> Privacy Policy</span>
          </span>
        </div>
      </div>
      <Link href={"/unverified-dashboard"} className="btn-main mt-32">
        Sign Up
      </Link>
    </div>
  );
};

export default Signup;
