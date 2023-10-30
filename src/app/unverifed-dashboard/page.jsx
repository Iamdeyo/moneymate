import BottomNav from "@/components/BottomNav";

const DashboardUnPage = () => {
  const items = [
    {
      id: 1,
      title: "Verify your email address",
      desc: "Verify emails to ensure seamless banking services.",
      img: "/email.png",
    },
    {
      id: 2,
      title: "Link your BVN",
      desc: "Kindly link your BVN (bank Verification Number) for enhanced security and seamless banking experience.",
      img: "/house.png",
    },
    {
      id: 3,
      title: "Setup a security pin",
      desc: " Your security pin is a confidential code. please do not share it with anyone for your safety and security.",
      img: "/padlock.png",
    },
  ];
  return (
    <div className="relative bg-white w-full h-[50.75rem] overflow-hidden text-left text-[0.94rem] text-black font-inter">
      <div className="absolute top-[19.75rem] left-[2.13rem] h-[20.19rem] overflow-hidden flex flex-col items-start justify-between text-[0.67rem]">
        {items.map((item, i) => (
          <div
            key={item.id}
            className="relative rounded-[12.25px] w-[19.63rem] h-[5.94rem] overflow-hidden shrink-0 bg-[#E4EBFF]"
          >
            <div className="absolute h-[14.74%] w-[56.12%] top-[25%] left-[3.58%] tracking-[-0.01em] leading-[0.86rem] font-semibold flex items-center">
              {item.title}
            </div>
            <div className="absolute h-[29.48%] w-[57.61%] top-[45.97%] left-[3.58%] text-[0.57rem] tracking-[-0.01em] !font-light opacity-80 leading-[0.86rem] flex items-center">
              {item.desc}
            </div>
            <img
              className="absolute h-[55.28%] w-[18.02%] top-[20.72%] right-[6.75%] bottom-[24%] left-[75.23%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src={item.img}
            />
          </div>
        ))}
        {/* <div className="relative rounded-[12.25px] w-[18.56rem] h-[5.94rem] overflow-hidden shrink-0">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[12.25px] bg-lavender" />
              <div className="absolute h-[116.74%] w-[42.29%] top-[26.25%] right-[-5.58%] bottom-[-42.99%] left-[63.28%] [transform:_rotate(-13.6deg)] [transform-origin:0_0]">
                <img
                  className="absolute h-[64.34%] w-[65.74%] top-[-12.3%] right-[19.12%] bottom-[47.95%] left-[15.14%] max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/img@2x.png"
                />
              </div>
              <div className="absolute h-[14.74%] w-[24.24%] top-[25.26%] left-[3.7%] tracking-[-0.01em] leading-[0.86rem] font-semibold flex items-center">
                Link your BVN
              </div>
              <div className="absolute h-[52.63%] w-[57.58%] top-[42.11%] left-[3.7%] text-[0.57rem] tracking-[-0.01em] leading-[0.86rem] flex items-center">
                Kindly link your BVN (bank Verification Number) for enhanced
                security and seamless banking experience.
              </div>
            </div>
            <div className="relative rounded-[12.25px] w-[18.56rem] h-[5.94rem] overflow-hidden shrink-0">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[12.25px] bg-lavender" />
              <div className="absolute h-[14.74%] w-[56.12%] top-[25%] left-[3.58%] tracking-[-0.01em] leading-[0.86rem] font-semibold flex items-center">
                Setup a security pin
              </div>
              <div className="absolute h-[38.95%] w-[57.58%] top-[46.32%] left-[3.7%] text-[0.57rem] tracking-[-0.01em] leading-[0.86rem] flex items-center">
                Your security pin is a confidential code. please do not share it
                with anyone for your safety and security.
              </div>
              <img
                className="absolute h-[58.42%] w-[19.46%] top-[17.33%] right-[7.94%] bottom-[24.25%] left-[72.6%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/padlock-perspective-matte-1@2x.png"
              />
            </div> */}
      </div>

      <div className="bg-darkslateblue w-[314px] absolute top-[8.63rem] left-[2.13rem] h-[144px] overflow-hidden rounded-[9px]">
        <div className=" flex flex-col items-start justify-start gap-[0.63rem] text-[0.75rem] text-white rounded-[8.75px] w-[19.63rem]">
          <div className="my-0 mx-[!important] absolute top-[0.31rem] left-[1.13rem] flex flex-row items-center justify-center gap-[0.94rem] z-[1] ">
            <div className="flex flex-col items-start justify-start gap-[1.5rem]">
              <div className="flex flex-col items-start justify-start gap-[0.31rem]">
                <div className="relative tracking-[0.02em] font-semibold inline-block w-[6.63rem]">
                  Available Balance
                </div>
                <div className="relative tracking-[-0.03em] inline-block w-[4.75rem] h-[1.94rem] shrink-0 text-[1.53rem]">
                  <span className="[text-decoration:line-through]">N</span>
                  <span className="text-[1.5rem] font-medium">0.00</span>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[1.44rem] text-[0.63rem]">
                <div className="relative rounded-8xs box-border w-[4.38rem] h-[1.56rem] overflow-hidden shrink-0 border-[0.5px] border-solid border-white">
                  <div className="absolute top-[0.31rem] left-[0.75rem] flex flex-row items-center justify-start gap-[0.31rem]">
                    <div className="relative tracking-[-0.01em] font-medium inline-block w-[1.56rem] h-[0.63rem] shrink-0">
                      Send
                    </div>
                    <img
                      className="relative w-[0.98rem] h-[0.94rem]"
                      alt=""
                      src="/diArrowUp.svg"
                    />
                  </div>
                </div>
                <div className="relative rounded-8xs box-border w-[4.38rem] h-[1.56rem] overflow-hidden shrink-0 border-[0.5px] border-solid border-white">
                  <div className="absolute top-[0.31rem] left-[0.31rem] flex flex-row items-center justify-start gap-[0.31rem]">
                    <div className="relative tracking-[-0.01em] font-medium inline-block w-[2.5rem] h-[0.69rem] shrink-0">
                      Receive
                    </div>
                    <img
                      className="relative w-[0.98rem] h-[0.94rem]"
                      alt=""
                      src="/diArrowDown.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <img
              className="relative w-[5.81rem] h-[8rem] object-cover"
              alt="pple"
              src="/pple.png"
            />
          </div>
        </div>
      </div>

      <div className="absolute top-[4.19rem] left-[1.56rem] flex flex-row items-center justify-start gap-[9.19rem] text-[1rem] text-darkslategray">
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
      <BottomNav />
    </div>
  );
};

export default DashboardUnPage;
