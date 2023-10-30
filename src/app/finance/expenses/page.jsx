"use client";
import BottomNav from "@/components/BottomNav";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Expenses = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col px-4 items-center mb-[90px]">
      <div className="w-full mt-5" onClick={() => router.back()}>
        <img src="/back-outline.png" alt="back" />
      </div>
      <div className="flex flex-col gap-4 text-darkslateblue w-full mt-3">
        <div className="flex items-center justify-between">
          <p className="text-xl font-semibold">Finance</p>
          <img src="/cashback.png" alt="cash" className="mr-auto ml-2" />
          <img src="/bell.svg" alt="notify" />
        </div>
        <p className="text-[9px] w-1/2">Profit surged, expenses trimmed.</p>
      </div>

      <div className="h-[50px] rounded-full bg-[#F0E1BB] w-full p-2 flex items-center text-center text-sm font-semibold mt-10 flex-none">
        <Link
          href={"/finance/income"}
          className="w-full h-full flex items-center justify-center text-darkslateblue"
        >
          Income
        </Link>
        <div className="w-full h-full bg-darkslateblue text-white flex items-center justify-center rounded-full">
          Expenses
        </div>
      </div>
      <div className="w-full items-start my-10 flex justify-between">
        <div className="flex items-center gap-3 text-[10px]">
          <span>Oct 2023</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="5"
            viewBox="0 0 10 5"
            fill="none"
          >
            <path
              d="M1.5 1.00977L5.1129 4.00977L8.5 1.00977"
              stroke="black"
              stroke-width="1.9"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="text-center">
          <p className="text-xs ">Total expense</p>
          <p className="text-2xl text-darkslateblue"> &#8358;12,520.90</p>
        </div>
      </div>
      <div className="shadow-[0px_1px_4px_0px_rgba(0,_0,_0,_0.25)] w-full aspect-square rounded-3xl p-4 flex flex-col items-center max-w-sm">
        <div className="my-auto relative">
          <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[20px] font-medium">
            &#8358;12,520.90
          </p>
          <img src="/chart.svg" alt="chart" />
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full max-w-[200px]">
          <div className="flex gap-[10px]">
            <span className="inline-block w-[9px] h-[9px] bg-darkslateblue rounded-full"></span>
            <p className="text-[8px]"> Loans </p>{" "}
            <span className="text-[10px] font-semibold">10%</span>
          </div>
          <div className="flex gap-[10px]">
            <span className="inline-block w-[9px] h-[9px] bg-green-500 rounded-full"></span>
            <p className="text-[8px]"> Utility </p>{" "}
            <span className="text-[10px] font-semibold">12%</span>
          </div>
          <div className="flex gap-[10px]">
            <span className="inline-block w-[9px] h-[9px] bg-orange rounded-full"></span>
            <p className="text-[8px]"> Clothes </p>{" "}
            <span className="text-[10px] font-semibold">21%</span>
          </div>
          <div className="flex gap-[10px]">
            <span className="inline-block w-[9px] h-[9px] bg-blue-600 rounded-full"></span>
            <p className="text-[8px]"> Food </p>{" "}
            <span className="text-[10px] font-semibold">9%</span>
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default Expenses;
