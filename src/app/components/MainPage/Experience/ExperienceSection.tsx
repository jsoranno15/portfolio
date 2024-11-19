import { SectionHeader } from "../../core/SectionHeader";
import { ArrowIcon, CalendarIcon } from "../../icons";
import { Experience } from "./Experience";
import { ExperienceCard } from "./ExperienceCard";
import { ImageHeader } from "./SectionComponents/ImageHeader";
import Image from "next/image";
export const ExperienceSection = () => {
  return (
    <section
      id="section-exp"
      className="flex flex-col py-[40px] p-4  items-center 
      justify-center gap-5 md:gap-10 min-h-[500px]"
    >
      <div className="flex flex-col gap-5 items-center justify-center xl:max-w-[85%]">
        <SectionHeader one={"Work"} two={"Experience"} />
        <div className="flex gap-[200px] items-center xl:max-w-[95%]">
          {/* <div className="w-[600px] blur-3xl z-[0] relative ">
          <div className="aspect-ratio-square z-[-2] absolute translate-x-20 -translate-y-[200px] bg-[#EA00D930] h-[300px] w-[400px] rounded-full"></div>
        </div> */}
          <div className="flex flex-col gap-[50px]  ">
            {Experience.map((item, index) => {
              return <ExperienceCard item={item} key={index} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
