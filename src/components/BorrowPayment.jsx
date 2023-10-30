import Link from "next/link";

const BorrowPayment = () => {
  return (
    <>
      <div className="w-full text-darkslateblue flex justify-between border-b-2 flex-none border-b-orange pb-[10px] my-[20px]">
        <p className="text-sm">Borrow Payment</p>
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
        <p className="w-full text-xs text-darkslateblue">
          You owe Courage Charly <strong>&#8358;2,050.00</strong>
        </p>
      </div>
    </>
  );
};

export default BorrowPayment;
