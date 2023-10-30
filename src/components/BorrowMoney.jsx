import Link from "next/link";

const BorrowMoney = () => {
  const beneficiaries = [
    { id: 220, name: "Jane Doe", accountNumber: 8728009004, rate: "3%" },
    {
      id: 744,
      name: "Mary Jane Watson",
      accountNumber: 4174324206,
      rate: "6%",
    },
    { id: 567, name: "Peter Parker", accountNumber: 1675272995, rate: "9%" },
    { id: 952, name: "Peter Parker", accountNumber: 1439157136, rate: "6%" },
    { id: 573, name: "Peter Parker", accountNumber: 9636139411, rate: "6%" },
    { id: 170, name: "John Doe", accountNumber: 1813429029, rate: "10%" },
    { id: 460, name: "John Doe", accountNumber: 7972398405, rate: "2%" },
    { id: 683, name: "Jane Doe", accountNumber: 9862303834, rate: "1%" },
    { id: 713, name: "Peter Parker", accountNumber: 1115939300, rate: "9%" },
    { id: 180, name: "Jane Doe", accountNumber: 1646337776, rate: "7%" },
  ];
  return (
    <>
      <div className="h-[50px] rounded-full bg-[#F0E1BB] w-full p-2 flex items-center text-center text-sm font-semibold mt-10 flex-none">
        <div className="w-full h-full bg-darkslateblue text-white flex items-center justify-center rounded-full">
          Borrow Money
        </div>
        <Link
          href={"/loans/lend-money"}
          className="w-full h-full flex items-center justify-center text-darkslateblue"
        >
          Lend Money
        </Link>
      </div>
      <div className="text-center flex-none text-darkslateblue flex w-full h-10 gap-[14px] mt-8">
        <div className="w-full flex flex-col items-center justify-center">
          <p className="text-[10px]">Borrowed</p>
          <p className="text-xs font-medium">&#8358;10,000.00</p>
        </div>
        <div className="w-full rounded-md bg-[#D3E9E2] flex flex-col items-center justify-center">
          <p className="text-[10px]">Paid</p>
          <p className="text-xs font-medium">&#8358;8,000.00</p>
        </div>
        <div className="w-full rounded-md bg-[#F6DADA] flex flex-col items-center justify-center">
          <p className="text-[10px]">Payback</p>
          <p className="text-xs font-medium">&#8358;2,050.00</p>
        </div>
      </div>
      <div className="w-full border-b-2 flex-none border-b-orange pb-[10px] my-[30px]">
        <p className="text-sm">Beneficiaries</p>
      </div>
      <div className="w-full overflow-hidden overflow-y-auto h-full flex flex-col gap-5">
        {beneficiaries.map((beneficiary) => (
          <Link
            href={"/loans/borrow-request"}
            className="h-[60px] flex items-center justify-between px-[12px] py-[15px] shadow-[0px_1px_4px_0px_rgba(0,_0,_0,_0.25)] text-darkslateblue flex-none"
            key={beneficiary.id}
          >
            <div className="flex items-center gap-[10px]">
              <div className="p-[6px] bg-[#F0E1BB] w-fit rounded-full">
                <img src="/fcmb-logo-2.png" alt="fcmb" />
              </div>
              <div>
                <p className="text-sm">{beneficiary.name}</p>
                <p className="text-[8px]">{beneficiary.rate} Daily Rate</p>
              </div>
            </div>
            <p className="text-xs font-semibold">{beneficiary.accountNumber}</p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default BorrowMoney;
