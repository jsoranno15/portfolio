import Image from "next/image";
import { SkillObj } from "./SkillsObj";
import { SectionHeader } from "../../core/SectionHeader";

export const SkillsSection = () => {
  return (
    <section
      id="section-skills"
      className="flex relative items-center min-h-[100vh] justify-center w-full flex-col gap-5 "
    >
      {/* <div className="absolute bg-[#12161e]  aspect-square w-[90vh] rounded-full blur-3xl z-[-2]" /> */}
      <SectionHeader one={"My"} two={"Skills"} />
      <div className="w-full relative grid md:flex md:flex-col gap-4 md:gap-12">
        {SkillObj.map((item, i) => {
          return (
            <div
              key={i}
              className="flex flex-col  gap-3 items-center justify-center"
            >
              <div className="text-lg text-ds-secondary-accent sm:text-[20px] font-semibold">
                {item.title}
              </div>
              <div className={`flex justify-center flex-wrap gap-3 `}>
                {item.skills.map((skill, i) => {
                  return (
                    <div
                      key={i}
                      className="flex flex-col text-gray-400 gap-2 items-center w-[90px] sm:w-[120px] text-center text-sm sm:text-base "
                    >
                      <div
                        className={`flex relative border rounded-xl border-gray-800  justify-center p-3  size-[60px] md:size-[100px]`}
                      >
                        <div
                          className="absolute z-[-1] items-center apsect-square rounded-full size-[40px] md:size-[60px]  blur-lg
                          top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                          style={{
                            background: `linear-gradient( #${skill.color}80, #${skill.color}70);`,
                          }}
                        ></div>
                        <Image
                          src={`/img/skills/${skill.image}`}
                          width={500}
                          height={500}
                          alt=""
                          className="w-fit object-contain"
                        />
                      </div>
                      {skill.name}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
