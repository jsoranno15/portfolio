import { PrimaryLayout } from "../core/PrimaryLayout";
import { SplashBlurb } from "./SplashBlurb/SplashBlurb";
import { AboutSection } from "./About/About";
import { ProjectSection } from "./Projects/ProjectSection";
import { ExperienceSection } from "./Experience/ExperienceSection";
import { TestimonialSection } from "./Testimonials/TestimonialSection";
import { SkillsSection } from "./Skills/Skills";

const MainPage = () => {
  return (
    <PrimaryLayout>
      <main className="">
        <div className="flex flex-col p-4 sm:px-[48px] ">
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
