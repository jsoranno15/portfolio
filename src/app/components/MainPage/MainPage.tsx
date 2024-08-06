import { PrimaryLayout } from "../core/PrimaryLayout";
import { SplashBlurb } from "./SplashBlurb/SplashBlurb";
import { SkillsSection } from "./Skills/Skills";
import { AboutSection } from "./About/About";
import { ProjectSection } from "./Projects/Projects";
import { ExperienceSection } from "./Experience/Experience";
import { TestimonialSection } from "./Testimonials/Testimonials";

const MainPage = () => {
  return (
    <PrimaryLayout>
      <main className="flex flex-col px-[48px] ">
        <SplashBlurb />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectSection />
        <TestimonialSection />
      </main>
    </PrimaryLayout>
  );
};

export default MainPage;
