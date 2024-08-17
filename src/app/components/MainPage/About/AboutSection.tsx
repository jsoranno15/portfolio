import { SectionHeader } from "../../core/SectionHeader";

export const AboutSection = () => {
  return (
    <section
      id="section-about"
      className="flex py-[40px] flex-col items-center gap-5 min-h-[500px]"
    >
      <SectionHeader text={"About"} />
      <div className="w-full flex">
        <div className="flex flex-col gap-3 md:w-2/3">
          <span>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Neque turpis
            magna ligula sit lacus nostra. Placerat purus interdum vitae laoreet
            ad placerat conubia. Dignissim curae tristique proin; magnis blandit
            ante.
          </span>
          <span>
            Sollicitudin dapibus eleifend aliquam primis proin. Urna volutpat
            lacus eros elementum cras nisi augue sed. Facilisi accumsan praesent
            consectetur nibh senectus magna.
          </span>
        </div>
      </div>
    </section>
  );
};
