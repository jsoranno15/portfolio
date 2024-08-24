import { SectionHeader } from "../../core/SectionHeader";

export const AboutSection = () => {
  return (
    <section
      id="section-about"
      className="flex py-[40px] flex-col items-center justify-center  gap-5 min-h-[500px]"
    >
      <SectionHeader text={"About"} />
      <div className="w-full  justify-center flex">
        <div className="flex flex-col font-medium text-gray-400 text-justify gap-3 md:w-2/3">
          <span>
            As a{" "}
            <span className="text-ds-main-accent font-bold">
              Full Stack Engineer
            </span>{" "}
            with a unique background in video games and technical design,
            I&apos;ve spent the last four years honing my skills in Web3 and AI
            technologies. Based in New York City, I specialize in crafting
            responsive and intuitive user interfaces using{" "}
            <span className="text-ds-main-accent font-bold">
              {" "}
              Next.js, React, TypeScript, Zustand, and Tailwind CSS.
            </span>{" "}
            My journey in software engineering has been driven by a passion for
            innovation and a relentless commitment to excellence.
          </span>
          <span>
            With experience contributing to a Web3 application that served over
            30,000 users, I&apos;m known for my ability to rapidly adapt to new
            technologies and optimize user experiences under tight deadlines. I
            excel in{" "}
            <span className="font-bold text-ds-main-accent">
              cross-functional environments,
            </span>{" "}
            where I can mentor and learn from colleagues and drive team success
            across all project stages—from initial onboarding to complex
            integrations.
          </span>
          <span>
            I&apos;m committed to building robust, user-centered digital
            experiences and continually refining my craft. If you&apos;re
            interested in collaborating on challenging projects or discussing
            the latest in front-end development, I&apos;d be happy to connect.
          </span>
        </div>
      </div>
    </section>
  );
};
