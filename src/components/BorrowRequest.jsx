import Link from "next/link";

const BorrowRequest = () => {
  return (
    <>
      <div className="w-full text-darkslateblue flex justify-between border-b-2 flex-none border-b-orange pb-[10px] my-[20px]">
        <p className="text-sm">Borrow Request</p>
      </div>
      <div className="flex w-full flex-col gap-8">
        <div className="flex flex-col gap-1 text-darkslateblue">
          <p className="text-xs">Beneficiary Name</p>
          <input
            type="text"
            className=" px-4 text-darkslateblue outline-none h-10 rounded-md bg-[#F0E1BB]"
            placeholder="Name"
          />
        </div>
        <div className="flex flex-col gap-1 text-darkslateblue">
          <p className="text-xs">Duration</p>
          <input
            type="text"
            className=" px-4 text-darkslateblue outline-none h-10 rounded-md bg-[#F0E1BB]"
            placeholder="Duration it take to pay off loan?"
          />
        </div>
        <div className="flex flex-col gap-1 text-darkslateblue">
          <p className="text-xs">Amount</p>
          <input
            type="text"
            className=" px-4 text-darkslateblue outline-none h-10 rounded-md bg-[#F0E1BB]"
            placeholder="&#8358; How much do you need?"
          />
        </div>
        <div className="flex flex-col gap-1 text-darkslateblue">
          <p className="text-xs">Message</p>
          <input
            type="text"
            className=" px-4 text-darkslateblue outline-none h-10 rounded-md bg-[#F0E1BB]"
            placeholder="Message"
          />
        </div>
      </div>
      <div className="flex gap-4 w-full text-xs mt-4 items-center">
        <input type="checkbox" className="w-[22px] h-[22px]" name="" id="" />
        <p>You agree to our Terms and Conditions.</p>
      </div>

      <Link
        href={"/"}
        className="btn-main mt-16 !w-[150px] !h-[40px] !text-darkslateblue !text-sm"
      >
        Send Request
      </Link>
    </>
  );
};

export default BorrowRequest;
