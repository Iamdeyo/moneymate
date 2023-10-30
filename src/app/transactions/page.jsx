"use client";
import BottomNav from "@/components/BottomNav";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Transactions = () => {
  const items = [
    {
      id: 744,
      name: "Mary Jane Watson",
      date: "Oct 27th, 17:15:36",
      amount: 25000,
      status: "successful",
    },
    {
      id: 170,
      name: "John Doe",
      date: "Oct 24th, 11:23:45",
      amount: 20000,
      status: "successful",
    },
    {
      id: 683,
      name: "Jane Doe",
      date: "Oct 22nd, 13:14:15",
      amount: 1000,
      status: "failed",
    },
    {
      id: 713,
      name: "Peter Parker",
      date: "Oct 21st, 23:59:59",
      amount: 500,
      status: "successful",
    },
  ];

  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col px-4 items-center mb-[90px]">
      <div className="w-full mt-5" onClick={() => router.back()}>
        <img src="/back-outline.png" alt="back" />
      </div>
      <div className="flex flex-col gap-4 text-darkslateblue w-full mt-3">
        <div className="flex items-center justify-between">
          <p className="text-xl font-semibold">Transactions</p>
          <img src="/cashback.png" alt="cash" className="mr-auto ml-2" />
          <img src="/bell.svg" alt="notify" />
        </div>

        <div className="flex items-center gap-3 text-[10px]">
          <span>All Categories</span>
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
      </div>

      <div className="w-full overflow-hidden overflow-y-auto h-full flex flex-col gap-5 pb-6 mt-6">
        {items.map((item) => (
          <Link
            href={"/loans/borrow-request"}
            className="h-[60px] flex items-center px-[12px]  py-[15px] shadow-[0px_1px_4px_0px_rgba(0,_0,_0,_0.25)] gap-[10%] text-darkslateblue flex-none"
            key={item.id}
          >
            <div className="flex w-[70%] truncate items-center gap-[10px]">
              <div className="p-[6px] flex-none bg-[#F0E1BB] w-fit rounded-full">
                <img src="/fcmb-logo-2.png" alt="fcmb" />
              </div>
              <div className="w-full flex-none truncate">
                <p className="text-sm w-40 truncate">
                  Transfer to {""} {item.name}
                </p>
                <p className="text-[8px]"> {item.date} </p>
              </div>
            </div>
            <div className="text-start w-[20%] ">
              <p className="text-sm font-medium"> &#8358;{item.amount}</p>
              <p
                className={`text-[10px] font-semibold ${
                  item.status == "successful" ? "" : "text-red-500"
                }`}
              >
                {item.status}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <BottomNav />
    </div>
  );
};

export default Transactions;
