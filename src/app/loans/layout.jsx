import BottomNav from "@/components/BottomNav";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="h-screen flex flex-col items-center">
      <div className="w-full mt-5">
        <img src="/back-outline.png" alt="back" />
      </div>
      <div className="flex flex-col gap-4 text-darkslateblue w-full mt-3">
        <div className="flex items-center justify-between">
          <p className="text-xl font-semibold">Access Loans</p>
          <img src="/cash-money.png" alt="cash" className="mr-auto ml-2" />
          <img src="/bell.svg" alt="notify" />
        </div>
        <p className="text-[9px] w-1/2">
          Easily borrow money from loved ones and pay back with little interest.
        </p>
      </div>
      {children}
      <BottomNav />
    </div>
  );
};

export default Layout;
