import Image from "next/image";
import { SkillObj } from "./SkillSection";

export const SkillsSection = () => {
  return (
    <section
      id="section-skills"
      className="flex py-[40px] w-full flex-col gap-5 "
    >
      <div className="text-6xl">Skills</div>
      <div className="w-full  grid md:flex md:flex-col gap-12">
        {SkillObj.map((item, i) => {
          return (
            <div key={i} className="flex flex-col gap-3">
              <div className="text-[20px]">{item.title}</div>
              <div className={`flex flex-wrap gap-3 `}>
                {item.skills.map((skill, i) => {
                  return (
                    <div
                      key={i}
                      className="flex flex-col gap-2 items-center w-[100px] md:w-[120px] text-center "
                    >
                      <div
                        className={`flex items-center justify-center p-2 rounded-xl  bg-opacity-40 h-[100px] w-[100px]`}
                        style={{
                          backgroundColor: `#${skill.color}50`,
                        }}
                      >
                        {skill.image ? (
                          <Image
                            src={`/img/skills/${skill.image}`}
                            width={500}
                            height={500}
                            alt=""
                            className=""
                          ></Image>
                        ) : (
                          <div className="h-[100px] w-[100px] flex items-center justify-center">
                            {skill.icon}
                          </div>
                        )}
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
