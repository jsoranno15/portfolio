import { useRouter } from "next/router";
import { ArrowIcon } from "../icons";
import DarkModeToggle from "./DarkmodeToggle";
import { useEffect } from "react";
const Navbar = () => {
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
    <nav className="p-4 pt-8 md:pt-16 absolute w-full  flex items-center justify-center">
      <div
        className="flex flex-wrap items-center justify-center w-fit  bg-ds-main-accent bg-opacity-10 rounded-full px-5 py-3 sm:py-1 gap-2 md:gap-8 text-sm md:text-base
      0"
      >
        {NavItems.map((item, i) => (
          <a
            key={i}
            href={item.section}
            onClick={(e) => handleScroll(e, item.section)}
            className="hover:text-ds-main-accent transition-all duration-300"
          >
            {item.name}
          </a>
        ))}
        <div className="from-gray-800 bg-gradient-to-b 0 p-[1.5px] rounded-full">
          <a
            href="/docs/soranno_resume2024.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-1 items-center hover:scale-110 transition-all duration-200 
            bg-ds-main-accent text-[#0b0c10] p-1 px-4 rounded-full"
          >
            Resume
            <div className="h-5 w-5">
              <ArrowIcon />
            </div>
          </a>
        </div>
        {/* <DarkModeToggle /> */}
      </div>
    </nav>
  );
};

const NavItems = [
  {
    name: "Home",
    section: "section-splash",
  },
  {
    name: "About",
    section: "section-about",
  },
  {
    name: "Experience",
    section: "section-exp",
  },
  {
    name: "Skills",
    section: "section-skills",
  },

  {
    name: "Projects",
    section: "section-projects",
  },
  {
    name: "Testimonials",
    section: "section-testimonials",
  },
];

export default Navbar;
