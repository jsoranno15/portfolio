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
              <div>{item.subtitle}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const SkillObj = [
  {
    title: "Web Devevelopment",
    subtitle: "React.js, Next.js, TypeScript, TailwindCSS",
    description: "",
  },
  {
    title: "Software Engineering",
    subtitle: "React.js, Next.js, TypeScript, TailwindCSS",
    description: "",
  },
  {
    title: "Game Development",
    subtitle: "Unreal Engine 4/5, Unity 2D/3D",
    description: "",
  },
];
