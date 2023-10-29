import Link from "next/link";

const BottomNav = () => {
  return (
    <div className="absolute top-[44.81rem] left-[0rem] bg-white shadow-[0px_-4px_5px_rgba(0,_0,_0,_0.1)] w-[23.44rem] h-[3.81rem] overflow-hidden text-[0.57rem] text-darkslateblue">
      <div className="absolute top-[0.75rem] left-[1.69rem] flex flex-row items-center justify-start gap-[3.75rem]">
        <Link
          href={"/"}
          className="flex flex-col items-center justify-center gap-[0.31rem]"
        >
          <img
            className="relative w-[1.5rem] h-[1.5rem]"
            alt=""
            src="/vector3.svg"
          />
          <div className="relative tracking-[-0.01em] leading-[0.86rem] font-medium flex items-center w-[1.69rem] h-[0.56rem] shrink-0">
            Home
          </div>
        </Link>
        <Link
          href={"/"}
          className="flex flex-col items-center justify-center gap-[0.31rem]"
        >
          <img
            className="relative w-[1.5rem] h-[1.5rem]"
            alt=""
            src="/vector2.svg"
          />
          <div className="relative tracking-[-0.01em] leading-[0.86rem] flex items-center w-[2.19rem] h-[0.56rem] shrink-0">
            Finance
          </div>
        </Link>
        <Link
          href={"/"}
          className="flex flex-col items-center justify-start gap-[0.31rem]"
        >
          <img
            className="relative w-[1.63rem] h-[1.63rem]"
            alt=""
            src="/group.svg"
          />
          <div className="relative tracking-[-0.01em] leading-[0.86rem] flex items-center w-[3.56rem] h-[0.56rem] shrink-0">
            Transactions
          </div>
        </Link>
        <Link
          href={"/"}
          className="flex flex-col items-center justify-start gap-[0.31rem]"
        >
          <img
            className="relative w-[1.5rem] h-[1.5rem]"
            alt=""
            src="/vector4.svg"
          />
          <div className="relative tracking-[-0.01em] leading-[0.86rem] flex items-center w-[1rem] h-[0.44rem] shrink-0">
            Me
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BottomNav;
