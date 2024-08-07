import { ArrowIcon } from "../icons";
import DarkModeToggle from "./DarkmodeToggle";

const Navbar = () => {
  const handleScroll = (event: any, targetId: string) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav className="p-4 pt-8 md:pt-16 absolute w-full">
      <div className="flex items-center justify-center w-full gap-8">
        <a
          href="section-splash"
          onClick={(e) => handleScroll(e, "section-splah")}
        >
          Home
        </a>
        <a
          href="section-about"
          onClick={(e) => handleScroll(e, "section-about")}
        >
          About
        </a>
        <a href="section-exp" onClick={(e) => handleScroll(e, "section-exp")}>
          Experience
        </a>
        {/* <a
          href="section-skills"
          onClick={(e) => handleScroll(e, "section-skills")}
        >
          Skills
        </a> */}
        <a
          href="section-projects"
          onClick={(e) => handleScroll(e, "section-projects")}
        >
          Projects
        </a>
        <a
          href="section-testimonials"
          onClick={(e) => handleScroll(e, "section-testimonials")}
        >
          Testimonials
        </a>
        <a
          href="/docs/soranno_resume2024.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-1 items-center"
        >
          Resume
          <div className="h-5 w-5">
            <ArrowIcon />
          </div>
        </a>
        <DarkModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
