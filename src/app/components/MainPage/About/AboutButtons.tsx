import { useRouter } from "next/router";
import { ArrowIcon, PersonIcon2 } from "../../icons";
import { useEffect } from "react";

export const AboutButtons = () => {
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
    <>
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
    </>
  );
};
