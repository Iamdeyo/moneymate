"use client";
import BottomNav from "@/components/BottomNav";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Me = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col px-4 items-center mb-[90px]">
      <div className="w-full mt-5" onClick={() => router.back()}>
        <img src="/back-outline.png" alt="back" />
      </div>
      <div className="flex flex-col gap-4 text-darkslateblue w-full mt-3">
        <div className="flex items-center justify-between">
          <p className="text-xl font-semibold">Profile</p>

          <img src="/bell.svg" alt="notify" />
        </div>
      </div>
      <div>
        <img src="/profile.png" alt="back" />
        <p className='font-medium text-center mt-2 text-darkslateblue'> James</p>
      </div>
      <div className="w-full flex flex-col gap-10 mt-8">
        <Link
          href={"/kyc"}
          className="flex justify-between items-center pb-4 border-b-2 border-b-orange"
        >
          <div>
            <p className="font-semibold text-darkslateblue">KYC Verification</p>
            <p className="text-xs">Choose your means of verification.</p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="18"
            viewBox="0 0 10 18"
            fill="none"
          >
            <path
              d="M1 16.75L9 8.75L1 1.25"
              stroke="#5C2682"
              stroke-width="1.9"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Link>
        <Link
          href={"/dispute"}
          className="flex justify-between items-center pb-4 border-b-2 border-b-orange"
        >
          <div>
            <p className="font-semibold text-darkslateblue">Dispute</p>
            <p className="text-xs">Reslove issues quickly. </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="18"
            viewBox="0 0 10 18"
            fill="none"
          >
            <path
              d="M1 16.75L9 8.75L1 1.25"
              stroke="#5C2682"
              stroke-width="1.9"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Link>
        <div className="flex justify-between items-center pb-4 border-b-2 border-b-orange">
          <div>
            <p className="font-semibold text-darkslateblue">Security Centre</p>
            <p className="text-xs">Keep your account safe and secure.</p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="18"
            viewBox="0 0 10 18"
            fill="none"
          >
            <path
              d="M1 16.75L9 8.75L1 1.25"
              stroke="#5C2682"
              stroke-width="1.9"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="flex justify-between items-center pb-4 border-b-2 border-b-orange">
          <div>
            <p className="font-semibold text-darkslateblue">Account Limits</p>
            <p className="text-xs">View your transaction limits.</p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="18"
            viewBox="0 0 10 18"
            fill="none"
          >
            <path
              d="M1 16.75L9 8.75L1 1.25"
              stroke="#5C2682"
              stroke-width="1.9"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Me;
