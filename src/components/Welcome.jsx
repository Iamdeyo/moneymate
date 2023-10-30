const Welcome = () => {
  return (
    <div className="bg-darkslateblue relative w-full h-screen">
      <h1 className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  text-[48px] text-center text-white font-semibold">
        MoneyMate
      </h1>
      <img
        src="ellipse.svg"
        alt="ellipse"
        className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 "
      />
    </div>
  );
};

export default Welcome;
