import BottomNav from "@/components/BottomNav";
import Link from "next/link";

const Dashboard = () => {
  const items = [
    {
      id: 1,
      title: "Access Loan",
      desc: "Get loans for your friends.",
      img: "/cash-money-big.png",
      link: "/loans",
    },
    {
      id: 2,
      title: "Utilities",
      desc: "pay bills easily.",
      img: "/bill.png",
      link: "#",
    },
    {
      id: 3,
      title: "Recharge and Data",
      desc: "Affordable data for you at the comfort of your home.",
      img: "/global.png",
      link: "#",
    },
  ];
  return (
    <div className="px-4 pt-5 flex flex-col h-screen">
      <div className=" w-full flex-none flex flex-row items-center justify-between text-[1rem] text-darkslategray mb-6">
        <div className="flex flex-row items-center justify-center gap-[1rem]">
          <img
            className="relative rounded-[200px] w-[3rem] h-[3rem] object-cover"
            alt=""
            src="/james.png"
          />
          <div className="flex flex-row items-center justify-center">
            <div className="relative font-semibold">Hi, James</div>
          </div>
        </div>
        <img
          className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
          alt=""
          src="/bell.svg"
        />
      </div>

      <div className="bg-darkslateblue w-full relative h-[144px] flex-none overflow-hidden rounded-[9px] flex items-center justify-between text-white px-5">
        <div>
          <p className="text-xs">Available Balance</p>
          <p className="text-2xl font-medium">N28,789.90</p>
          <div className="flex gap-6 mt-6">
            <button className=" w-[74px] h-[28px] rounded-md border border-white flex items-center justify-center gap-2 text-[10px]">
              Send{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
              >
                <path
                  d="M2.47955e-05 13.59L1.47825 15L13.6291 3.41L13.6291 10H15.7258L15.7258 0L5.24196 0V2L12.1508 2"
                  fill="white"
                />
              </svg>
            </button>
            <button className=" w-[74px] h-[28px] rounded-md border border-white flex items-center justify-center gap-2 text-[10px]">
              Receive{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
              >
                <path
                  d="M15.7258 1.41L14.2476 0L2.09677 11.59V5H0V15H10.4839V13H3.575"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
        <img
          className="relative w-[5.81rem] h-[8rem] object-cover"
          alt="pple"
          src="/pple.png"
        />
      </div>

      <div className="h-full mt-7 mb-[75px] w-full overflow-hidden overflow-y-auto flex flex-col gap-5 items-start text-[0.67rem]">
        {items.map((item) => (
          <Link
            href={item.link}
            key={item.id}
            className="relative rounded-[12.25px] w-full h-[5.94rem] overflow-hidden shrink-0 bg-[#E4EBFF] flex justify-between items-center pl-4"
          >
            <div>
              <div className="tracking-[-0.01em] leading-[0.86rem] font-semibold flex items-center">
                {item.title}
              </div>
              <div className=" mt-2text-[0.57rem] tracking-[-0.01em] !font-light opacity-80 leading-[0.86rem] flex items-center">
                {item.desc}
              </div>
            </div>
            <img className="object-contain" alt={item.title} src={item.img} />
          </Link>
        ))}
      </div>
      <BottomNav />
    </div>
  );
};

export default Dashboard;
