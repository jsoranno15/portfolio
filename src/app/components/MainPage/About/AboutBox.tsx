import { GearIcon, MapIcon, PersonIcon, PersonIcon2 } from "../../icons";
import Image from "next/image";

export const AboutBox = () => {
  const className =
    "bg-gradient-to-r from-ds-main-accent to-ds-cyan text-transparent bg-clip-text w-fit flex flex-row gap-2 justify-center  ";
  return (
    <div
      className="aspect-square transition-all duration-150 size-[350px] overflow-hidden 
               lg:size-[400px] bg-dark-purple border-[1px] border-gray-800 border-opacity-60 rounded-xl"
      style={{
        backgroundSize: "80px 80px",
        backgroundImage:
          " linear-gradient(to right, #14133A 1px, transparent 1px), linear-gradient(to bottom, #14133A 1px, transparent 1px)",
      }}
    >
      <div
        className="w-full h-full  "
        style={{
          background: "radial-gradient(transparent, #0D0121)",
        }}
      >
        <Image
          src={`/img/deco/deco_gradient.png`}
          height={200}
          width={200}
          alt="Picture of the author"
          className="rotate-90 opacity-50 z-[1] object-cover absolute rounded-t-xl size-[350px] lg:size-[400px]"
        />
        <div className="flex  w-full items-center  text-center z-[2] flex-col p-8 text-4xl font-bold gap-[50px]  justify-center h-full">
          <span className={`${className} `}>
            <div className="size-9 text-ds-main-accent ">
              <PersonIcon2 />
            </div>
            Juliana Soranno
          </span>
          <span className={`${className} text-xl`}>
            <div className="size-6 text-ds-main-accent ">
              <GearIcon />
            </div>
            Full Stack Engineer
          </span>
          <span className={`${className} text-xl`}>
            <div className="size-6 text-ds-main-accent ">
              <MapIcon />
            </div>
            Based in New York
          </span>
        </div>
      </div>
    </div>
  );
};
