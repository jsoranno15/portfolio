import Image from "next/image";
import { TailwindCSSIcon } from "../../icons";

export const SkillsSection = () => {
  return (
    <section id="section-skills" className="flex py-[40px] flex-col gap-5 ">
      <div className="text-6xl">Skills</div>
      <div className="flex flex-col gap-12">
        {SkillObj.map((item, i) => {
          return (
            <div key={i} className="flex flex-col gap-3">
              <div className="text-[20px]">{item.title}</div>
              <div className={`flex flex-wrap gap-3 `}>
                {item.skills.map((skill, i) => {
                  return (
                    <div
                      key={i}
                      className="flex flex-col gap-2 items-center w-[120px] text-center "
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

const SkillObj = [
  {
    title: "< Web Development /> ",
    skills: [
      { image: "react.webp", name: "React", color: "61dbfb" },
      { image: "typescript.webp", name: "TypeScript", color: "3178c6" },
      { icon: <TailwindCSSIcon />, name: "TailwindCSS", color: "38BDF9" },
      { image: "javascript.png", name: "JavaScript", color: "FED141" },
      { image: "html.webp", name: "HTML 5", color: "F3662B" },
      { image: "python.webp", name: "Python", color: "FED141" },
      { image: "c++.png", name: "C++", color: "0C6AC3" },
    ],
  },
  {
    title: "< Game Engineering />",
    skills: [
      { image: "unity.png", name: "Unity 2D/3D", color: "222c37" },
      { image: "ue.png", name: "Unreal Engine", color: "C124FC" },
      { image: "godot.png", name: "Godot", color: "468BBE" },
      { image: "photoshop.png", name: "Adobe PhotoShop", color: "2FA8FF" },
    ],
  },
  {
    title: "< Motion Capture />",
    skills: [
      {
        image: "motionbuilder.png",
        name: "Autodesk MotionBuilder",
        color: "85A442",
      },
      {
        image: "optitrack.png",
        name: "OptiTrack",
        color: "00AEF7",
      },
      {
        image: "motive.png",
        name: "Motive",
        color: "CF7928",
      },
    ],
  },
];
