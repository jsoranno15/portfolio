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
      <main className=" items-center flex flex-col justify-center ">
        <div className="flex flex-col w-full  ">
          <div className="">
            <AboutSection />
          </div>
          <div className="">
            <ExperienceSection />
          </div>
          <div className="">
            <SkillsSection />
          </div>
          <div className="">
            <ProjectSection />
          </div>
          <div className="">
            <TestimonialSection />
          </div>
        </div>
      </main>
    </PrimaryLayout>
  );
};

export default MainPage;
