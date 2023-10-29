import Image from "next/image";

const Login = () => {
  return (
    <div className="relative bg-darkslateblue w-full h-[50.75rem] overflow-hidden text-center text-[1.25rem] text-white font-inter">
      <div className="absolute bottom-[0rem] left-[0rem] w-[23.44rem] h-[2.13rem]">
        <div className="absolute bottom-[0.5rem] left-[calc(50%_-_66.5px)] rounded-81xl bg-darkslateblue w-[8.38rem] h-[0.31rem]" />
      </div>
      <div className="absolute top-[2.75rem] left-[0rem] flex flex-col items-center justify-start gap-[2.5rem]">
        <div className="relative w-[23.44rem] h-[4.31rem]">
          <div className="absolute top-[0rem] left-[0rem] bg-darkslateblue w-[23.44rem] h-[2.75rem] opacity-[0]" />
          <div className="absolute top-[2.19rem] left-[5.25rem] leading-[1.25rem] font-medium">
            Sign in
          </div>
          <div className="absolute top-[1.56rem] left-[0.13rem] w-[4rem] h-[2.75rem] overflow-hidden">
            <Image src={"/back.png"} width={64} height={44} alt="back" />
          </div>
        </div>
        <div className="flex flex-col items-end justify-start gap-[1.5rem] text-left text-[1.5rem]">
          <div className="flex flex-col items-start justify-start gap-[1rem]">
            <div className="flex flex-col items-start justify-start gap-[2rem]">
              <div className="flex flex-col items-start justify-start">
                <p className="relative">Welcome back</p>
              </div>
            </div>
            <div className="text-sm font-medium w-[20.94rem] flex flex-col gap-8">
              <div className="w-full relative p h-[3.81rem] rounded-[24px] overflow-hidden">
                <div className="absolute top-[0.75rem] left-[1.25rem] text-[0.63rem] tracking-[-0.12px] font-semibold text-lightslategray">
                  Email
                </div>
                <input
                  type="text"
                  className="w-full h-full outline-none px-[1.25rem] pt-[1rem] font-medium text-gray-900 placeholder:text-gray-200"
                  placeholder="Louis04real@gmail.com"
                />
              </div>
              <div className="w-full relative p h-[3.81rem] rounded-[24px] overflow-hidden">
                <div className="absolute top-[0.75rem] left-[1.25rem] text-[0.63rem] tracking-[-0.12px] font-semibold text-lightslategray">
                  Password
                </div>
                <input
                  type="text"
                  className="w-full h-full outline-none px-[1.25rem] pt-[1rem] font-medium text-gray-900 placeholder:text-gray-200"
                  placeholder="••••••••••••"
                />
              </div>
            </div>
          </div>
          <div className="relative text-[0.88rem] font-medium text-orange">
            Forgot Password?
          </div>
        </div>
      </div>
      <div className="absolute top-[28.94rem] left-[1rem] rounded-81xl bg-orange w-[20.94rem] h-[3.19rem] flex flex-row items-center justify-center p-[0.5rem] box-border text-[1rem] text-gray-100">
        <b className="relative">Login</b>
      </div>
      <div className="absolute top-[36.5rem] left-[6.63rem] w-[11.38rem] flex flex-col items-center justify-start gap-[0.88rem] text-[1rem]">
        <div className="relative leading-[146.5%]">Login with fingerprint</div>
        <img
          className="relative w-[4rem] h-[4rem]"
          alt="fingerprint"
          src="/fingerprint.png"
        />
      </div>
    </div>
  );
};

export default Login;
