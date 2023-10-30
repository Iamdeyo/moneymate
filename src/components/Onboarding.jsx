"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Onboarding = () => {
  const [select, setSelect] = useState(0);
  const items = [
    {
      title: "Manage and Track Your Payments with mobile banking ",
      desc: " A convenient way to save money securely from mobile device.",
    },
    {
      title: "Eaily request loans from family and friends",
      desc: "A loan facility that provides you with financial benefits whenever and wherever.",
    },
  ];

  useEffect(() => {
    // Use setTimeout to trigger the state update every 5 seconds
    const redirectTimeout = setTimeout(() => {
      setSelect((prevSelect) => (prevSelect === 0 ? 1 : 0));
    }, 1000); // 5000 milliseconds (5 seconds)

    // Clear the timeout when the component unmounts
    return () => clearTimeout(redirectTimeout);
  }, []);

  return (
    <div className="flex px-4 relative flex-col h-screen bg-darkslateblue items-center text-white min-h-[800px]">
      <div>
        <img src="/cards.png" alt="cards" />
      </div>
      <div className="-mt-4">
        <p className="text-[35px] text-whitesmoke">{items[select].title} </p>
        <p className="text-[18px] text-gray-200 mt-2">{items[select].desc}</p>
      </div>
      <div className="flex px-4 items-center justify-between w-full absolute bottom-20 left-0">
        <div className="w-24 flex items-center gap-2">
          <div
            className={`h-[5px] rounded-xl bg-[#6B7075] ${
              select === 0 ? "w-2/3 " : "w-1/3"
            }`}
            onClick={() => setSelect(0)}
          ></div>
          <div
            className={`h-[5px] rounded-xl bg-white ${
              select === 1 ? "w-2/3 " : "w-1/3"
            }`}
            onClick={() => setSelect(1)}
          ></div>
        </div>
        <Link
          href={"/welcome"}
          className="w-[101px] justify-center items-center text-center font-bold flex h-[55px] p-2 bg-orange text-gray-100 rounded-[10px]"
        >
          Skip
        </Link>
      </div>
    </div>
  );
};

export default Onboarding;
