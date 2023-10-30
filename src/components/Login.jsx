"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col min-h-screen px-4 bg-darkslateblue items-center text-white">
      <div className="flex items-center w-full gap-9 mt-20">
        <span onClick={() => router.back()}>
          <img src="/back.png" alt="back" />
        </span>
        <p className="text-[20px] font-medium">Sign in</p>
      </div>
      <p className="mt-10 w-full text-2xl font-bold">Welcome back</p>
      <div className="text-sm font-medium w-full flex flex-col gap-8 mt-8">
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
            type="text"
            className="w-full h-full outline-none px-[1.25rem] pt-[1rem] font-medium text-gray-900 placeholder:text-gray-200"
            placeholder="••••••••••••"
          />
        </div>
      </div>
      <p className="text-sm font-medium text-orange w-full text-end mt-6">
        Forgot Password?
      </p>
      <Link href={"/dashboard"} className="btn-main mt-20">
        Login
      </Link>

      <p className="text-[18px] mt-16 mb-4">Login with fingerprint</p>
      <img src="/fingerprint.png" alt="fingerprint" />
    </div>
  );
};

export default Login;
