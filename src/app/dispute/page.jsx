"use client";

import BottomNav from "@/components/BottomNav";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Dispute = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col px-4 items-center mb-[90px]">
      <div className="w-full mt-5" onClick={() => router.back()}>
        <img src="/back-outline.png" alt="back" />
      </div>
      <div className="flex flex-col gap-4 text-darkslateblue w-full mt-3">
        <div className="flex items-center justify-between">
          <p className="text-xl font-semibold">Disputes</p>

          <img src="/bell.svg" alt="notify" />
        </div>
        <p className="text-[10px] mt-2">
          We apologise for the discomfort this must have caused you, kindly
          share and let us help you resolve it faster.
        </p>
      </div>

      <BottomNav />
    </div>
  );
};

export default Dispute;
