import { SectionHeader } from "../../core/SectionHeader";
import { QuoteIcon } from "../../icons";
import { Testimonials } from "./Testimonial";
import Image from "next/image";

export const TestimonialSection = () => {
  return (
    <section
      id="section-testimonials"
      className="flex py-[40px] items-center w-full  flex-col gap-8 "
    >
      <SectionHeader text={"Testimonials"} />
      <div className="flex flex-col  gap-8 sm:gap-20 ">
        {Testimonials.map((item, i) => {
          return (
            <div
              key={i}
              className="from-gray-800 z-[3]  blur-2 bg-gradient-to-b rounded-xl p-[1px]"
            >
              <div className="flex flex-col bg-[#12161e]  py-6 p-4 rounded-xl  gap-5">
                <div className="flex gap-4 items-center ">
                  <div
                    className="aspect-square rounded-full h-[60px] w-[60px]
                  min-h-[60px] min-w-[60px] p-[1.5px] bg-gradient-to-b from-ds-main-accent to-[#EA00D9]"
                  >
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
                    <div className="text-base text-ds-secondary-accent">
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
    </section>
  );
};
