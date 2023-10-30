import Link from "next/link";

const BottomNav = () => {
  const items = [
    {
      id: 1,
      title: "Home",
      link: "/dashboard",
      img: "/vector3.svg",
    },
    {
      id: 2,
      title: "Finance",
      link: "/",
      img: "/vector2.svg",
    },
    {
      id: 3,
      title: "Transactions",
      link: "/",
      img: "/group.svg",
    },
    {
      id: 4,
      title: "Me",
      link: "/",
      img: "/vector4.svg",
    },
  ];
  return (
    <div className="fixed bottom-0 left-[0rem] shadow-[0px_-4px_5px_rgba(0,_0,_0,_0.1)] w-full h-[3.81rem] overflow-hidden text-[0.57rem] text-darkslateblue bg-white z-50">
      <div className="flex h-full items-center justify-between w-full">
        {items.map((item) => (
          <Link
            key={item.id}
            href={item.link}
            className="flex flex-col items-center justify-center gap-[0.31rem] h-full w-full hover:bg-gray-200"
          >
            <img
              className="relative aspect-square w-[1.5rem] md:w-[2rem]"
              alt=""
              src={item.img}
            />
            <div className="relative tracking-[-0.01em] leading-[0.86rem] font-medium flex items-center shrink-0">
              {item.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BottomNav;
