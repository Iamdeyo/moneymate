const Loading = () => {
  return (
    <div className="bg-darkslateblue relative w-full h-screen">
      <h1 className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  text-[48px] text-center text-white font-semibold">
        MoneyMate
      </h1>
      <img
        src="ellipse.svg"
        alt="ellipse"
        className="absolute animate-pulse top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 "
      />
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 mt-32">
        <img
          src="spinner.svg"
          alt="ellipse"
          className="w-28 h-28 animate-spin"
        />
      </div>
    </div>
  );
};

export default Loading;
