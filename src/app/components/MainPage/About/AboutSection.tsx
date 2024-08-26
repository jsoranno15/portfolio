import { useEffect } from "react";
import { SectionHeader } from "../../core/SectionHeader";
import { useRouter } from "next/router";
import { ArrowIcon, GearIcon, MapIcon, PersonIcon2 } from "../../icons";
import { AboutBox } from "./AboutBox";

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

  const className =
    "bg-gradient-to-r from-ds-cyan  to-ds-main-accent text-transparent bg-clip-text w-fit flex flex-row gap-2 justify-center  ";

  return (
    <section
      id="section-about"
      className="flex  w-full flex-col py-[40px] sm:py-[40px] sm:pb-[80px] p-4 sm:min-h-[calc(100vh-104px)] 
      sm:px-[48px] text-sm sm:text-base  justify-center items-center gap-14  "
    >
      {/* <span
        className="hidden md:inline text-[72px] lg:text-[72px] lg:leading-[72px] w-full 
      text-center bg-gradient-to-r from-ds-cyan  to-ds-main-accent text-transparent bg-clip-text font-black  transition-all duration-150"
      >
        Juliana Soranno
      </span> */}
      <div className="w-full flex gap-8 xl:max-w-[85%] text-ds-grey flex-col justify-center ">
        <div className="flex flex-row gap-8">
          <div className="flex relative flex-col font-medium gap-5 lg:w-1/2 ">
            <div className="size-full md:size-[500px] absolute z-[-1]  bg-ds-main-accent opacity-10 rounded-full blur-[100px]"></div>

            <div className="w-full  justify-center gap-2 flex flex-col">
              <div className="text-ds-grey font-bold text-lg   lg:hidden flex justify-start ">
                Juliana Soranno
              </div>
              <SectionHeader one={"About"} two={"Me"} />
            </div>

            <span className="">
              As a{" "}
              <span className="text-ds-main-accent font-bold">
                Full Stack Engineer
              </span>{" "}
              with a unique background in video games and technical design,
              I&apos;ve spent four years refining my skills in{" "}
              <span className="text-ds-main-accent font-bold"> Web3 </span> and
              AI technologies. Based in New York City, I specialize in building
              responsive user interfaces with{" "}
              <span className="text-ds-main-accent font-bold">
                {" "}
                Next.js, React, TypeScript, Zustand, and Tailwind CSS.
              </span>{" "}
            </span>
            <span>
              I played a key role in developing a cutting-edge
              <span className="text-ds-main-accent font-bold">
                {" "}
                blockchain{" "}
              </span>
              application that scaled to 30,000 users. This sharpened my ability
              to quickly master new technologies and
              <span className="text-ds-main-accent font-bold">
                {" "}
                deliver under pressure.{" "}
              </span>
              I thrive in dynamic teams, optimizing user experiences and driving
              success.
            </span>
            <span>
              If you&apos;re interested in collaborating on challenging projects
              or discussing the latest in technology, I&apos;d be happy to
              connect.
            </span>
            <div className="flex flex-row w-full items-center gap-5">
              <button
                className=" w-fit flex gap-2 items-center bg-dark-purple justify-centers border border-gray-800 py-2 px-4 rounded-xl
            hover:text-ds-main-accent hover:border-ds-main-accent hover:border-opacity-50 transition-all duration-300"
                onClick={(e) => handleScroll(e, "contact-section")}
              >
                Contact me
                <span className="size-5 flex">
                  <PersonIcon2 />
                </span>
              </button>

              <a
                href="/docs/soranno_resume2024.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit flex gap-2 items-center justify-centers  bg-ds-main-accent text-darkest-purple py-2 px-4 rounded-xl
             transition-all duration-300 hover:scale-110"
              >
                Resume
                <div className="size-6">
                  <ArrowIcon />
                </div>
              </a>
            </div>
          </div>

          <div className=" sm:justify-end  sm:w-1/2 sm:items-center hidden lg:flex">
            <AboutBox />
          </div>
        </div>
      </div>
    </section>
  );
};
