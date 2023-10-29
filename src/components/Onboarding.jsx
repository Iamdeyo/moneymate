const Onboarding = () => {
  return (
    <div className="relative bg-darkslateblue w-full h-[50.75rem] overflow-hidden text-left text-[2.19rem] text-whitesmoke font-inter">
      <div className="absolute top-[0rem] left-[0.38rem] w-[22.69rem] h-[27.74rem]">
        <img
          className="absolute top-[11.77rem] left-[10.43rem] w-[12.26rem] h-[15.96rem] object-cover"
          alt=""
          src="/card-16@2x.png"
        />
        <img
          className="absolute top-[5.56rem] left-[4.35rem] w-[12.26rem] h-[15.96rem] object-cover"
          alt=""
          src="/card-15@2x.png"
        />
        <img
          className="absolute top-[0rem] left-[0rem] w-[10.22rem] h-[13.32rem] object-cover"
          alt=""
          src="/card-13@2x.png"
        />
      </div>
      <div className="absolute top-[26.5rem] left-[1.63rem] flex flex-col items-start justify-start gap-[0.31rem]">
        <div className="relative leading-[136.5%] inline-block w-[15.94rem]">
          <p className="m-0">Manage and Track Your</p>
          <p className="m-0">Payments with mobile banking</p>
        </div>
        <div className="relative text-[1.13rem] leading-[146.5%] text-gray-200 inline-block w-[18.81rem]">
          A convenient way to save money securely from mobile device.
        </div>
      </div>
      <img
        className="absolute top-[45.22rem] left-[1.97rem] w-[6.22rem] h-[0.31rem]"
        alt=""
        src="/group-2218.svg"
      />
      <div className="absolute top-[43.63rem] left-[15.06rem] rounded-[10px] bg-orange w-[6.31rem] h-[3.44rem] flex flex-row items-center justify-center p-[0.5rem] box-border text-center text-[1rem] text-gray-100">
        <b className="relative">Skip</b>
      </div>
      <div className="absolute bottom-[0rem] left-[0rem] w-[23.44rem] h-[2.13rem]">
        <div className="absolute bottom-[0.5rem] left-[calc(50%_-_66.5px)] rounded-81xl bg-gray-300 w-[8.38rem] h-[0.31rem]" />
      </div>
    </div>
  );
};

export default Onboarding;
