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
    <nav className="p-4 pt-8 md:pt-16 absolute w-full">
      <div className="flex flex-wrap items-center justify-center w-full gap-2 md:gap-8 text-sm md:text-base">
        {NavItems.map((item, i) => (
          <a
            key={i}
            href={item.section}
            onClick={(e) => handleScroll(e, item.section)}
            className=""
          >
            {item.name}
          </a>
        ))}
        <a
          href="/docs/soranno_resume2024.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-1 items-center  bg-ds-main-accent bg-opacity-5 text-ds-main-accent p-1 px-3 rounded-full"
        >
          Resume
          <div className="h-5 w-5">
            <ArrowIcon />
          </div>
        </a>
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
    name: "Skills",
    section: "section-skills",
  },
  {
    name: "Experience",
    section: "section-exp",
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
