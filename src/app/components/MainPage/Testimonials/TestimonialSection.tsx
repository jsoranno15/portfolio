import { QuoteIcon } from "../../icons";
import { Testimonials } from "./Testimonial";
import Image from "next/image";

export const TestimonialSection = () => {
  return (
    <section
      id="section-testimonials"
      className="flex py-[40px]  flex-col gap-8 "
    >
      <div className="text-xl md:text-6xl">Testimonials</div>
      <div className="flex flex-col gap-20 ">
        {Testimonials.map((item, i) => {
          return (
            <div
              key={i}
              className="flex flex-col bg-cyan-500 bg-opacity-20 p-4 rounded-xl md:w-2/3 gap-5"
            >
              <div className="flex gap-4 items-center">
                <div
                  className="aspect-square rounded-full h-[60px] w-[60px]
                  min-h-[60px] min-w-[60px]
                   bg-gray-400"
                >
                  <Image
                    src={`/img/${item.image}.jpg`}
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    className="border object-contain rounded-full"
                  ></Image>
                </div>
                <div className="flex flex-col">
                  <div className="font-bold text-lg">{item.name}</div>
                  <div
                    className="text-sm text-ds-main-accent bg-ds-main-accent bg-opacity-5
                w-fit rounded-full py-1 px-3"
                  >
                    {item.company}
                  </div>
                </div>
              </div>

              <div className="flex gap-3 h-full">
                <div className="flex h-4 w-4">
                  <QuoteIcon />
                </div>
                {item.paragraphs}
                <div className="flex items-end">
                  <div className="flex h-4 w-4 rotate-180 ">
                    <QuoteIcon />
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
