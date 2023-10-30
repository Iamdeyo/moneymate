import Link from "next/link";

const GetStarted = () => {
  return (
    <div className="flex px-4 flex-col h-screen bg-darkslateblue items-center text-white min-h-[800px] relative">
      <div className="flex font-bold flex-col items-center text-center mt-60">
        <p className="text-[24px]">Welcome to MoneyMate</p>
        <p className="text-[10px]  mb-[10px]">Powered by</p>
        <img src="/fcmb-logo.png" alt="fcmb" />
      </div>
      <Link href={"/signup"} className="btn-main mt-40">
        Let’s get started
      </Link>
    </div>
  );
};

export default GetStarted;
