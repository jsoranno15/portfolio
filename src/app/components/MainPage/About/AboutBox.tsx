import { GearIcon, MapIcon, PersonIcon, PersonIcon2 } from "../../icons";
import Image from "next/image";

export const AboutBox = () => {
  const className =
    "bg-gradient-to-r    from-ds-main-accent to-ds-cyan text-transparent bg-clip-text   ";
  return (
    <div
      className="transition-all duration-150  overflow-hidden  relative aspect-square size-[400px]
                bg-dark-purple border-[1px] border-gray-800 border-opacity-60 rounded-xl"
      style={{
        backgroundSize: "80px 80px",
        backgroundImage:
          " linear-gradient(to right, #14133A 1px, transparent 1px), linear-gradient(to bottom, #14133A 1px, transparent 1px)",
      }}
    >
      <div
        className="  relative flex gap-4 p-4 h-full flex-col items-center justify-center "
        style={{
          background: "radial-gradient(transparent, #0D0121)",
        }}
      >
        <Image
          src={`/img/deco/deco_gradient.png`}
          height={200}
          width={200}
          alt="Picture of the author"
          className="rotate-90 opacity-50 z-[1] right-0 absolute rounded-t-xl size-[350px] lg:size-[400px]"
        />
        <div className="flex p-[2px]  bg-ds-main-accent rounded-full aspect-square">
          <Image
            src={`/img/deco/profile_pic.png`}
            height={300}
            width={300}
            alt="Picture of the author"
            className="z-[2]   rounded-full aspect-square size-[250px] flex "
          />
        </div>
        <div
          className="flex text-ds-main-accent w-full items-center  text-center z-[2] flex-col 
        text-2xl font-bold  gap-1 justify-center "
        >
          <span className={` items-center flex flex-row gap-2 justify-center`}>
            {/* <div className="size-7 text-ds-main-accent ">
              <PersonIcon2 />
            </div> */}
            Juliana Soranno
          </span>
          <span
            className={`font-normal text-ds-cyan flex flex-row gap-2 justify-center items-center text-base bg-ds-cyan bg-opacity-5 px-3 py-1 rounded-full`}
          >
            <div className="size-5  ">
              <MapIcon />
            </div>
            New York, NY
          </span>
        </div>
      </div>
    </div>
  );
};
