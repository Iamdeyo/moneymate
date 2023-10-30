import Link from "next/link";

const LoanApproval = () => {
  return (
    <>
      <div className="w-full text-darkslateblue flex flex-col items-center gap-[50px] justify-between border-b-2 flex-none border-b-orange pb-[10px] my-[20px]">
        <div className="flex flex-col gap-1 text-darkslateblue w-full">
          <p className="text-xs">Beneficiary Name</p>
          <input
            type="text"
            className=" px-4 text-darkslateblue outline-none h-10 rounded-md bg-[#F0E1BB]"
            placeholder="Name"
          />
        </div>
        <div className="flex gap-20">
          <button
            className="text-black font-semibold h-[31px] w-[90px] flex items-center
           justify-center rounded-md bg-[#f0e1bb] text-xs"
          >
            Accept &nbsp; &#10003;
          </button>
          <button
            className="text-white font-semibold h-[31px] w-[90px] flex items-center
           justify-center rounded-md bg-darkslateblue text-xs"
          >
            Reject &nbsp; X
          </button>
        </div>
      </div>
      <div className="flex w-full flex-col gap-8">
        <div className="flex flex-col gap-1 text-darkslateblue">
          <p className="text-xs">Account Number</p>
          <input
            type="text"
            className=" px-4 text-darkslateblue outline-none h-10 rounded-md bg-[#F0E1BB]"
            placeholder="1234567890"
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
          <p className="text-xs">Narration</p>
          <input
            type="text"
            className=" px-4 text-darkslateblue outline-none h-10 rounded-md bg-[#F0E1BB]"
            placeholder="Message"
          />
        </div>
      </div>

      <Link
        href={"/loans"}
        className="btn-main mt-16 !w-[150px] !h-[40px] !text-darkslateblue !text-sm"
      >
        Send Money
      </Link>
    </>
  );
};

export default LoanApproval;
