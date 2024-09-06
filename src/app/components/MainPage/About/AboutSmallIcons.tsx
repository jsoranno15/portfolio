import { FooterComponents } from "../../core/Footer/FooterComponents";
import Image from "next/image";
export const AboutSmallIcons = () => {
  return (
    <>
      <div className=" flex gap-3 w-fit">
        {FooterComponents.map((item, i) => {
          if (item.name !== "ArtStation" && item.name !== "Itch.io")
            return (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className=" w-full flex flex-col items-center p-[1.5px] rounded-full
                transition-all duration-200 hover:scale-110 bg-ds-cyan font-semibold gap-2  
               active:opacity-80"
              >
                <Image
                  src={`/img/misc/${item.logo}`}
                  height={200}
                  width={200}
                  alt="Picture of the author"
                  className=" object-cover  size-[40px] rounded-t-xl"
                ></Image>
              </a>
            );
        })}
      </div>
    </>
  );
};
