const Splash = () => {
  return (
    <div className="relative bg-darkslateblue w-full h-[50.75rem] overflow-hidden text-center text-[0.94rem] text-white font-inter">
      <div className="absolute top-[0rem] left-[0rem] bg-darkslateblue w-[23.5rem] h-[50.75rem]" />
      <div className="absolute top-[0rem] left-[0rem] w-[23.44rem] h-[2.75rem]">
        <div className="absolute top-[0.88rem] left-[1.24rem] w-[3.38rem] h-[1.13rem]">
          <div className="absolute top-[0rem] left-[0rem] tracking-[-0.17px] leading-[1.13rem] font-semibold inline-block w-[3.38rem]">
            9:41
          </div>
        </div>
        <img
          className="absolute top-[calc(50%_-_5.84px)] right-[0.91rem] w-[4.19rem] h-[0.72rem]"
          alt=""
          src="/container.svg"
        />
      </div>
      <div className="absolute top-[22.63rem] left-[3.13rem] text-[3rem] font-semibold flex items-center justify-center w-[17.31rem] h-[4.13rem]">
        MoneyMate
      </div>
      <div className="absolute top-[22.06rem] left-[13.69rem] rounded-[50%] bg-ghostwhite [filter:blur(150px)] w-[5.63rem] h-[5.94rem] [transform:_rotate(180deg)] [transform-origin:0_0] mix-blend-overlay" />
      <div className="absolute bottom-[0rem] left-[0rem] w-[23.44rem] h-[2.13rem]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
          <div className="absolute bottom-[0.5rem] left-[calc(50%_-_66.5px)] rounded-[100px] bg-white w-[8.38rem] h-[0.31rem]" />
        </div>
      </div>
    </div>
  );
};

export default Splash;
