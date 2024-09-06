import { SectionHeader } from "../../core/SectionHeader";
import { QuoteIcon } from "../../icons";
import { Testimonials } from "./Testimonial";
import Image from "next/image";

export const TestimonialSection = () => {
  return (
    <section
      id="section-testimonials"
      className="flex py-[40px] items-center w-full   flex-col gap-8 "
    >
      <div className="flex flex-col xl:max-w-[85%]  px-4 xl:px-0 items-center gap-5">
        <SectionHeader one={"Testimonials"} />
        <div className="flex flex-col  gap-8 sm:gap-10 ">
          {Testimonials.map((item, i) => {
            return (
              <div
                key={i}
                className="relative rounded-xl"
                style={{
                  backgroundSize: "80px 80px",
                  backgroundImage:
                    " linear-gradient(to right, #14133A 1px, transparent 1px), linear-gradient(to bottom, #14133A 1px, transparent 1px)",
                }}
              >
                <Image
                  src={`/img/deco/deco_gradient.png`}
                  height={200}
                  width={200}
                  alt="Picture of the author"
                  className="rotate-90 opacity-50 z-[1] right-0 absolute rounded-t-xl size-[350px] lg:size-[400px]"
                />
                <div
                  className="flex flex-col bg-dark-purple  py-6 p-4 rounded-xl  gap-5
              border-[1px] border-gray-800 border-opacity-60 "
                  style={{
                    background: "radial-gradient(transparent, #0D0121)",
                  }}
                >
                  <div className="flex gap-4 items-center">
                    <div className="aspect-square rounded-full size-[60px] p-[1.75px] bg-gradient-to-b from-ds-main-accent to-neon-purple">
                      <Image
                        src={`/img/testimonials/${item.image}.jpg`}
                        width={500}
                        height={500}
                        alt="Picture of the author"
                        className=" object-contain rounded-full"
                      ></Image>
                    </div>
                    <div className="flex flex-col">
                      <div className="font-bold text-lg">{item.name}</div>
                      <div className="text-base text-ds-cyan">
                        {item.company}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 h-full">
                    <div className="flex h-4 w-4 min-w-4 max-w-4 min-h-4 max-h-4">
                      <QuoteIcon />
                    </div>
                    {item.paragraphs}
                    <div className="flex items-end">
                      <div className="flex h-4 w-4 min-w-4 max-w-4 min-h-4 max-h-4 rotate-180 ">
                        <QuoteIcon />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
