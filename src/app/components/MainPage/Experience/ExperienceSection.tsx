import { SectionHeader } from "../../core/SectionHeader";
import { ArrowIcon } from "../../icons";
import { Experience } from "./Experience";
import { ImageHeader } from "./SectionComponents/ImageHeader";
export const ExperienceSection = () => {
  return (
    <section
      id="section-exp"
      className="flex flex-col py-[40px] items-center gap-5 min-h-[500px]"
    >
      <SectionHeader text={"Experience"} />
      <div className="flex gap-[200px] items-center">
        {/* <div className="w-[600px] blur-3xl z-[0] relative ">
          <div className="aspect-ratio-square z-[-2] absolute translate-x-20 -translate-y-[200px] bg-[#EA00D930] h-[300px] w-[400px] rounded-full"></div>
        </div> */}
        <div className="flex flex-col gap-[50px] ">
          {Experience.map((item, index) => {
            return (
              <div
                key={index}
                className="from-gray-800 z-[3]  blur-2 bg-gradient-to-b rounded-xl p-[1px]"
              >
                <div className="flex-col flex md:flex-row gap-4 md:gap-[30px]   bg-gradient-to-br from-[#12161e]  from-75% to-[#271029]  rounded-xl py-6 p-6 ">
                  <ImageHeader image={item.image} />

                  <div className=" flex flex-col 6 gap-3">
                    <div>
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex sm:text-xl gap-1 items-center font-bold transition-all duration-200 hover:text-ds-main-accent"
                        >
                          {item.title}
                          <div className="h-7 min-h-7 min-w-7  w-7">
                            <ArrowIcon />
                          </div>
                        </a>
                      ) : (
                        <div className="flex flex-col  gap-1 ">
                          <div className="sm:text-xl font-bold">
                            {item.title}
                          </div>
                          <span className="text-ds-secondary-accent text-sm sm:text-base font-normal">
                            {item.timeFrame}
                          </span>
                          <div className="text-gray-400  backdrop:font-normal">
                            {item.subtitle}
                          </div>
                        </div>
                      )}

                      {item.link && (
                        <span className="text-ds-secondary-accent text-sm sm:text-base">
                          {item.timeFrame}
                        </span>
                      )}
                    </div>

                    {item.points && (
                      <div className="flex flex-col ml-4 text-sm sm:text-base text-gray-400 ">
                        {item.points.map((point, i) => (
                          <div key={i} className="flex gap-2 items-start ">
                            <span className=" inline-block mt-2 min-w-1.5 min-h-1.5 h-1.5 w-1.5 bg-white rounded-full"></span>
                            {point}
                          </div>
                        ))}
                      </div>
                    )}
                    {item.skills && (
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill, i) => (
                          <div
                            key={i}
                            className="bg-ds-main-accent text-xs sm:text-base bg-opacity-5 text-ds-main-accent p-1 px-3 rounded-full"
                          >
                            {skill}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
