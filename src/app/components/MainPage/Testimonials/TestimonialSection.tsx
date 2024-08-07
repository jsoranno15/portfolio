import { Testimonials } from "./Testimonial";

export const TestimonialSection = () => {
  return (
    <section
      id="section-testimonials"
      className="flex py-[40px] flex-col gap-8 "
    >
      <div className="text-6xl">Testimonials</div>
      <div className="flex flex-col gap-5">
        {Testimonials.map((item, i) => {
          return (
            <div key={i} className="flex flex-col gap-2">
              <div className="flex gap-2">
                <div
                  className="aspect-square rounded-full h-[60px] w-[60px]
              min-h-[60px] min-w-[60px]
              bg-gray-400"
                />
                <div className="flex flex-col">
                  <div className="font-bold">{item.name}</div>
                  <div
                    className="text-sm text-ds-main-accent bg-ds-main-accent bg-opacity-5
                w-fit rounded-full py-1 px-3"
                  >
                    {item.company}
                  </div>
                </div>
              </div>
              {item.paragraphs}
            </div>
          );
        })}
      </div>
    </section>
  );
};
