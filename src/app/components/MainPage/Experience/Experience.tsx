export const ExperienceSection = () => {
  return (
    <section id="section-exp" className="flex flex-col gap-5 min-h-[500px]">
      <div className="text-6xl">Experience</div>
      <div className="flex flex-col gap-5">
        {Experience.map((item, index) => {
          return (
            <div key={index} className="flex gap-[40px] md:gap-[100px]">
              <div className="whitespace-nowrap">{item.timeFrame}</div>
              <div className=" flex flex-col">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold hover:text-red-500"
                >
                  {item.title}
                </a>
                <div className="flex flex-col ml-4">
                  {item.points.map((point, i) => (
                    <div key={i} className="flex gap-2 items-start ">
                      <span className="inline-block mt-2 min-w-1.5 min-h-1.5 h-1.5 w-1.5 bg-black rounded-full"></span>
                      {point}
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  {item.skills.map((skill, i) => (
                    <div key={i} className="bg-gray-300 p-1 px-3 rounded-full">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const Experience = [
  {
    timeFrame: "Jan 2024 - July 2024",
    title: "Frontend Engineer - Everyrealm",
    points: [
      "Architected and maintained the front end of Everyworld, a high-performance Web3 application serving 30,000 active users, using React.js, Next.js, TypeScript, Zustand, and Tailwind CSS.",
      "Executed comprehensive testing, debugging, and deployment of a dynamic codebase with numerous evolving features, ensuring seamless adaptation and continuous improvement using GitHub for version control and Vercel for deployment.",
      "Translated complex Figma designs into responsive, reusable React.js components, integrating features like account settings, crypto wallet connection, home pages, landing pages, profile pages, pop ups, and player tier/badge systems.",
      "Collaborated with backend developers to integrate AWS Lambda, DynamoDB, and API Gateway, significantly boosting application performance and scalability.",
    ],
    skills: ["React.js ", "Next.js", "TypeScript"],
    link: "https://www.everyworld.com/",
  },
  {
    timeFrame: "Aug 2022 - April 2023",
    title: "Coding Teacher - Penguin Coding School",
    points: [
      "Instructed classes of 2-25 students at 4 different expertise levels in Python, Roblox, Scratch, and JavaScript",
      "Created custom lesson plans at varying experience levels based on student interests",
    ],
    skills: ["Management ", "Leadership", "skill3"],
    link: "https://penguincodingschool.com/",
  },
];
