import Image from "next/image";

export const SkillsSection = () => {
  return (
    <section
      id="section-skills"
      className="flex py-[40px] flex-col gap-5 min-h-[500px]"
    >
      <div className="text-6xl">Skills</div>
      <div className="flex flex-col gap-4">
        {SkillObj.map((item, i) => {
          return (
            <div key={i} className="">
              <div className="text-[20px]">{item.title}</div>
              <div className={`flex gap-2 `}>
                {item.skills.map((skill, i) => {
                  return (
                    <div key={i} className="flex flex-col gap-2 items-center">
                      <div
                        className={`flex items-center justify-center p-2 rounded-xl bg-[#${skill.color}] bg-opacity-40 h-20 w-20`}
                      >
                        <Image
                          src={`/img/skills/${skill.image}.webp`}
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

const SkillObj = [
  {
    title: "Web Development",
    skills: [
      { image: "react", name: "React", color: "61dbfb" },
      { image: "typescript", name: "TypeScript", color: "3178c6" },
    ],
  },
];
