import { SectionHeader } from "../../core/SectionHeader";
import { ArrowIcon, CalendarIcon } from "../../icons";
import { Experience } from "./Experience";
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
              return (
                <div
                  key={index}
                  className="w-full h-full relative overflow-hidden rounded-xl"
                  style={{
                    backgroundSize: "80px 80px",
                    backgroundImage:
                      " linear-gradient(to right, #14133A 1px, transparent 1px), linear-gradient(to bottom, #14133A 1px, transparent 1px)",
                  }}
                >
                  <Image
                    src={`/img/deco/deco_gradient.png`}
                    height={200}
                    width={200}
                    alt="Picture of the author"
                    className="rotate-90 opacity-50 z-[1] right-0 absolute rounded-t-xl size-[350px] lg:size-[400px]"
                  />
                  <div
                    style={{
                      background: "radial-gradient(transparent, #0D0121)",
                    }}
                    className="flex-col flex md:flex-row gap-4 md:gap-[30px] rounded-xl  bg-dark-purple p-6 
                border-[1px] border-gray-800 border-opacity-60 "
                  >
                    <ImageHeader image={item.image} />

                    <div className=" flex justify-center flex-col 6 gap-3 ">
                      <div>
                        {item.link ? (
                          <div className="flex flex-col gap-1">
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex text-white sm:text-xl gap-1 items-center font-bold transition-all duration-200 hover:text-ds-main-accent"
                            >
                              {item.title}
                              <div className="h-7 min-h-7 min-w-7  w-7">
                                <ArrowIcon />
                              </div>
                            </a>
                            <span className="text-ds-secondary-accent flex gap-1 items-center text-sm sm:text-base font-normal">
                              <div className="flex h-4 w-4">
                                <CalendarIcon />
                              </div>
                              {item.timeFrame}
                            </span>
                          </div>
                        ) : (
                          <div className="flex flex-col  gap-1 ">
                            <div className="text-white sm:text-xl font-bold">
                              {item.title}
                            </div>
                            <span className="text-ds-secondary-accent flex gap-1 items-center text-sm sm:text-base font-normal">
                              <div className="flex h-4 w-4">
                                <CalendarIcon />
                              </div>
                              {item.timeFrame}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="flex flex-col ml-4 text-sm sm:text-base text-ds-grey ">
                        {item.points.map((point, i) => (
                          <div key={i} className="flex gap-2 items-start ">
                            <span className=" inline-block mt-2 min-w-1.5 min-h-1.5 h-1.5 w-1.5 bg-white rounded-full"></span>
                            {point}
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill, i) => (
                          <div
                            key={i}
                            className="bg-ds-cyan text-xs sm:text-base bg-opacity-5 text-ds-cyan p-1 px-3 rounded-full"
                          >
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
