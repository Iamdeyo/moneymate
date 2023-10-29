"use client";

import { useState } from "react";

const SignUp = () => {
  const [hide, setHide] = useState(true);
  return (
    <div className="relative bg-darkslateblue w-full h-[50.75rem] overflow-hidden text-center text-[0.88rem] text-white font-inter">
      <div className="absolute bottom-[0rem] left-[0rem] w-[23.44rem] h-[2.13rem]">
        <div className="absolute bottom-[0.5rem] left-[calc(50%_-_66.5px)] rounded-81xl bg-gray-200 w-[8.38rem] h-[0.31rem]" />
      </div>
      <div className="absolute top-[11.06rem] left-[1.25rem] flex flex-col items-start justify-start text-left text-black">
        <div className="flex flex-col items-start justify-start gap-[2rem]">
          <div className="text-sm font-medium w-[20.94rem] flex flex-col gap-8">
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

          <div className="relative w-[20.06rem] h-[2.75rem] text-white">
            <input
              className="absolute top-[0.06rem] left-[0rem] w-[1.38rem] h-[1.38rem] overflow-hidden"
              type="checkbox"
            />
            <div className="absolute top-[0rem] left-[1.88rem] leading-[1.38rem] font-medium flex items-center w-[18.19rem]">
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
        </div>
      </div>
      <div className="absolute top-[37.63rem] left-[1.44rem] rounded-81xl bg-orange w-[20.94rem] h-[3.19rem] flex flex-row items-center justify-center p-[0.5rem] box-border text-[1rem] text-gray-100">
        <b className="relative">Sign up</b>
      </div>
      <div className="absolute top-[4.19rem] left-[3.38rem] h-[4.16rem] flex flex-col items-center justify-between text-[1.5rem]">
        <b className="relative leading-[1.25rem] inline-block w-[16.56rem] h-[1.53rem] shrink-0">
          CREATE AN ACCOUNT
        </b>
        <div className="relative text-[1rem] leading-[1.25rem] font-medium text-whitesmoke">
          Already have an account? sign in
        </div>
      </div>
    </div>
  );
};

export default SignUp;
