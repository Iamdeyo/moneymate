"use client";

import BottomNav from "@/components/BottomNav";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Kyc = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col px-4 items-center mb-[90px]">
      <div className="w-full mt-5" onClick={() => router.back()}>
        <img src="/back-outline.png" alt="back" />
      </div>
      <div className="flex flex-col gap-4 text-darkslateblue w-full mt-3">
        <div className="flex items-center justify-between">
          <p className="text-xl font-semibold">KYC Verification</p>

          <img src="/bell.svg" alt="notify" />
        </div>
        <p className="text-[10px] mt-2">Choose your means of verification..</p>
      </div>
      <div className="w-full mt-8 pr-2 bg-darkslateblue h-[88px] pl-4 items-center rounded-xl text-white font-medium flex">
        <p>
          Complete your personal information and enjoy unlimited transaction.
        </p>
        <img src="/badge.svg" alt="badge" />
      </div>
      <div className="w-full flex flex-col gap-8 mt-12">
        <Link
          href={"/nin"}
          className="h-[53px] text-xs font-semibold flex items-center px-4 bg-[#E4EBFF] rounded-xl"
        >
          <p>NIN Verification</p>
        </Link>
        <div className="h-[53px] text-xs font-semibold flex items-center px-4 bg-[#E4EBFF] rounded-xl">
          <p>Driver’s Lincense</p>
        </div>
        <div className="h-[53px] text-xs font-semibold flex items-center px-4 bg-[#E4EBFF] rounded-xl">
          <p>International Passport</p>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default Kyc;
