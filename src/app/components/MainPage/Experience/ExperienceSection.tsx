import { ArrowIcon } from "../../icons";
import { Experience } from "./Experience";

export const ExperienceSection = () => {
  return (
    <section
      id="section-exp"
      className="flex flex-col py-[40px] gap-5 min-h-[500px]"
    >
      <div className="text-6xl">Experience</div>
      <div className="flex flex-col gap-[50px] ">
        {Experience.map((item, index) => {
          return (
            <div key={index} className="md:flex   gap-[10px] md:gap-[100px] ">
              <div className="whitespace-nowrap uppercase font-bold">
                {item.timeFrame}
              </div>
              <div className=" flex flex-col  gap-3">
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-1 items-center font-bold transition-all duration-200 hover:text-ds-main-accent"
                  >
                    {item.title}
                    <div className="h-5 w-5">
                      <ArrowIcon />
                    </div>
                  </a>
                ) : (
                  <div className="flex flex-col font-bold  ">
                    {item.title}
                    <div className="text-gray-400 font-normal">
                      {item.subtitle}
                    </div>
                  </div>
                )}
                {item.points && (
                  <div className="flex flex-col ml-4">
                    {item.points.map((point, i) => (
                      <div key={i} className="flex gap-2 items-start ">
                        <span className="inline-block mt-2 min-w-1.5 min-h-1.5 h-1.5 w-1.5 bg-white rounded-full"></span>
                        {point}
                      </div>
                    ))}
                  </div>
                )}
                {item.skills && (
                  <div className="flex gap-2">
                    {item.skills.map((skill, i) => (
                      <div
                        key={i}
                        className="bg-ds-main-accent bg-opacity-5 text-ds-main-accent p-1 px-3 rounded-full"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
