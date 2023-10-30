import Link from "next/link";

const VerifyBVN = () => {
  return (
    <div className="px-4">
      <div className="text-center mt-20">
        <p className="text-[24px] font-semibold">Enter your BVN</p>
        <p className="text-[10px] font-normal pt-8">
          Inter your BVN to quickly set up your account
        </p>
      </div>
      <div className="h-[61px] rounded-[24px] border-[0.5px] border-orange mt-20">
        <input
          className="outline-none w-full h-full rounded-[24px] px-8"
          type="text"
          placeholder="Enter your BVN"
        />
      </div>
      <Link href={"/dashboard"} className="btn-main mt-64">
        Submit
      </Link>
    </div>
  );
};

export default VerifyBVN;
