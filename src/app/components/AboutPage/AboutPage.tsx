import { PrimaryLayout } from "../core/PrimaryLayout";
import { SplashBlurb } from "./SplashBlurb/SplashBlurb";

const AboutPage = () => {
  return (
    <PrimaryLayout>
      <main className="flex flex-col p-4 min-h-[calc(100vh)] justify-center">
        <SplashBlurb />
      </main>
    </PrimaryLayout>
  );
};

export default AboutPage;
