import { SectionHeader } from "../../core/SectionHeader";
import { AboutBox } from "./AboutBox";
import Image from "next/image";
import { AboutParagraphs } from "./AboutParagraphs";
import { AboutButtons } from "./AboutButtons";
import { AboutSmallIcons } from "./AboutSmallIcons";

export const AboutSection = () => {
  return (
    <section
      id="section-about"
      className="flex  w-full flex-col py-[40px] sm:py-[40px] sm:pb-[80px] p-4 sm:min-h-[calc(100vh-104px)] 
      sm:px-[48px] text-sm sm:text-base  justify-center items-center gap-14  "
    >
      <div className="w-full flex gap-8 xl:max-w-[85%] text-ds-grey flex-col justify-center ">
        <div className="flex flex-row gap-8">
          <div className="flex relative flex-col font-medium gap-5 lg:w-1/2 ">
            <div className="size-full md:size-[500px] absolute z-[-1]  bg-ds-main-accent opacity-10 rounded-full blur-[100px]"></div>
            <div className="w-full  justify-center gap-2 flex flex-col">
              <div className="hidden lg:flex">
                <SectionHeader one={"About"} two={"Me"} />
              </div>

              <div className="text-ds-grey font-bold text-lg items-center gap-3 lg:hidden flex justify-start ">
                <div className="flex p-[1.5px]  bg-gradient-to-b    from-ds-main-accent to-ds-cyan rounded-full aspect-square">
                  <Image
                    src={`/img/deco/profile_pic.png`}
                    height={300}
                    width={300}
                    alt="Picture of the author"
                    className="z-[1]  rounded-full aspect-square size-[68px] flex "
                  />
                </div>
                <div className="text-ds-main-accent">
                  <SectionHeader one={"About"} two={"Me"} />
                  Juliana Soranno
                </div>
              </div>
            </div>
            <AboutParagraphs />
            {/* <AboutSmallIcons /> */}
            <AboutButtons />
          </div>

          <div className="sm:w-1/2 items-end justify-center hidden lg:flex lg:flex-col gap-2">
            <AboutBox />
          </div>
        </div>
      </div>
    </section>
  );
};
