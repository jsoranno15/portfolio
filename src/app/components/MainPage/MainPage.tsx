import { PrimaryLayout } from "../core/PrimaryLayout";
import { SplashBlurb } from "./SplashBlurb/SplashBlurb";
import { AboutSection } from "./About/AboutSection";
import { ProjectSection } from "./Projects/ProjectSection";
import { ExperienceSection } from "./Experience/ExperienceSection";
import { TestimonialSection } from "./Testimonials/TestimonialSection";
import { SkillsSection } from "./Skills/SkillsSection";

const MainPage = () => {
  return (
    <PrimaryLayout>
      <main className="w-full items-center flex flex-col ">
        {/* <div
          className="w-full h-full items-center flex justify-center "
          style={{
            backgroundImage: "url(/img/background.png) ",
            backgroundSize: "100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <SplashBlurb />
        </div> */}
        <div className="flex flex-col xl:max-w-[85%]  p-4 sm:px-[48px] ">
          <SplashBlurb />
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <ProjectSection />
          <TestimonialSection />
        </div>
      </main>
    </PrimaryLayout>
  );
};

export default MainPage;
