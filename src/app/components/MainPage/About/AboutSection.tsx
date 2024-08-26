import { useEffect } from "react";
import { SectionHeader } from "../../core/SectionHeader";
import { useRouter } from "next/router";
import { NormalArrowIcon } from "../../icons";

export const AboutSection = () => {
  const router = useRouter();

  const handleScroll = (event: any, targetId: string) => {
    event.preventDefault();

    if (router.pathname !== "/") {
      sessionStorage.setItem("scrollTarget", targetId);
      router.push("/");
    } else {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const scrollTarget = sessionStorage.getItem("scrollTarget");
    if (scrollTarget) {
      const targetElement = document.getElementById(scrollTarget);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
      sessionStorage.removeItem("scrollTarget");
    }
  }, [router.pathname]);

  return (
    <section
      id="section-about"
      className="flex py-[40px] w-full flex-col pt-[150px]  p-4 min-h-[100vh]
      sm:px-[48px] text-sm sm:text-base  justify-center items-center gap-5  "
    >
      <div className="w-full flex gap-8 xl:max-w-[85%]">
        <div className="flex relative flex-col font-medium gap-5 md:w-1/2 ">
          <div className="size-full md:size-[500px]  absolute bg-ds-main-accent opacity-20 rounded-full blur-[100px]"></div>
          <div className="w-full  justify-center ">
            <SectionHeader one={"About"} two={"Me"} />
          </div>
          <span className="">
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
            If you&apos;re interested in collaborating on challenging projects
            or discussing the latest in front-end development, I&apos;d be happy
            to connect.
          </span>
          <button
            className=" w-fit flex gap-2 items-center justify-centers border border-gray-800 py-2 px-4 rounded-xl
            hover:text-ds-main-accent hover:border-ds-main-accent hover:border-opacity-50 transition-all duration-300"
            onClick={(e) => handleScroll(e, "contact-section")}
          >
            Contact me
            <span className="size-6 flex rotate-90">
              <NormalArrowIcon />
            </span>
          </button>
        </div>
        <div className=" sm:justify-end  sm:w-1/2 sm:items-center hidden md:flex">
          <div className="aspect-square h-[400px] w-[400px] bg-purple-300"></div>
        </div>
      </div>
    </section>
  );
};
