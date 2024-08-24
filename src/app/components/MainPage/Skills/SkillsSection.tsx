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
      <SectionHeader text={"Skills"} />
      <div className="w-full relative grid md:flex md:flex-col gap-12">
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
                        className={`flex items-center  justify-center p-2 rounded-xl  bg-opacity-40 h-[60px] w-[60px] sm:h-[100px] sm:w-[100px]`}
                        style={{
                          // backgroundColor: `#${skill.color}70`,
                          background: `linear-gradient( #${skill.color}80, #${skill.color}70);`,
                        }}
                      >
                        <Image
                          src={`/img/skills/${skill.image}`}
                          width={500}
                          height={500}
                          alt=""
                          className=""
                        ></Image>
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
