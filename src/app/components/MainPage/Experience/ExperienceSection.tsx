import { ArrowIcon } from "../../icons";
import { Experience } from "./Experience";
import Image from "next/image";
export const ExperienceSection = () => {
  return (
    <section
      id="section-exp"
      className="flex flex-col py-[40px] gap-5 min-h-[500px]"
    >
      <div className="text-xl md:text-6xl">Experience</div>
      <div className="flex gap-[200px] items-center">
        {/* <div className="w-[600px] blur-3xl z-[0] relative ">
          <div className="aspect-ratio-square z-[-2] absolute translate-x-20 -translate-y-[200px] bg-[#EA00D930] h-[300px] w-[400px] rounded-full"></div>
        </div> */}
        <div className="flex flex-col gap-[50px] ">
          {Experience.map((item, index) => {
            return (
              <div
                key={index}
                className="from-gray-800 z-[3] blur-2 bg-gradient-to-b rounded-xl p-[1px]"
              >
                <div className=" md:flex gap-[10px]   bg-gradient-to-br from-[#12161e]  from-75% to-[#271029]  rounded-xl py-6 p-4 ">
                  <div className="whitespace-nowrap flex flex-col  md:w-1/6  text-ds-secondary-accent uppercase font-bold">
                    <div className="w-full h-full rounded-full items-center flex justify-center">
                      <div className="bg-white p-1 rounded-full bg-gradient-to-b from-ds-main-accent to-[#EA00D9]">
                        <Image
                          src={`/img/experience/${item.image}`}
                          width={500}
                          height={500}
                          alt=""
                          className="object-contain min-h-40 min-w-40 max-w-40 max-h-40 rounded-full "
                        />
                      </div>
                    </div>
                  </div>

                  <div className=" flex flex-col md:w-5/6 gap-3">
                    <div>
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex text-xl gap-1 items-center font-bold transition-all duration-200 hover:text-ds-main-accent"
                        >
                          {item.title}
                          <div className="h-5 w-5">
                            <ArrowIcon />
                          </div>
                        </a>
                      ) : (
                        <div className="flex flex-col text-xl font-bold  ">
                          {item.title}
                          <span className="text-ds-secondary-accent text-base font-normal">
                            {item.timeFrame}
                          </span>
                          <div className="text-gray-400 text-base backdrop:font-normal">
                            {item.subtitle}
                          </div>
                        </div>
                      )}

                      {item.link && (
                        <span className="text-ds-secondary-accent">
                          {item.timeFrame}
                        </span>
                      )}
                    </div>

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
                      <div className="flex flex-wrap gap-2">
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
