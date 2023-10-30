import Link from "next/link";

const Loan = () => {
  return (
    <div className="flex flex-col items-center w-[90%] gap-5 mt-10">
      <Link
        href={"/loans/borrow-money"}
        className="h-[195px] w-full bg-darkslateblue text-white rounded-xl flex items-center gap-5 px-4"
      >
        <div>
          <p className="text-sm font-semibold text-orange">Borrow Money</p>
          <p className="text-[10px] mt-[10px]">
            Easily borrow money from loved ones and pay back with little
            interest.
          </p>
        </div>

        <img
          src="/pple.png"
          width="93px"
          height="128px"
          alt="people"
          className="flex-none"
        />
      </Link>
      <Link
        href={"/loans/lend-money"}
        className="h-[195px] w-full bg-darkslateblue text-white rounded-xl flex items-center gap-5 px-4"
      >
        <div>
          <p className="text-sm font-semibold text-orange">Lend Money</p>
          <p className="text-[10px] mt-[10px]">
            Easily lend money to loved ones and gain interest on every return.
          </p>
        </div>

        <img
          src="/pple.png"
          width="93px"
          height="128px"
          alt="people"
          className="flex-none"
        />
      </Link>
    </div>
  );
};

export default Loan;
