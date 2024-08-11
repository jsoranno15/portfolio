import Image from "next/image";
import { Arrow2Icon } from "../../icons";

export const ProjectCard = ({
  title,
  link,
  engine,
  role,
  tags,
  blurb,
  type,
  year,
  coverImage,
}: {
  title: string;
  link: string;
  engine: string;
  role: string;
  blurb: string;
  type: string;
  tags?: string[];
  year?: string;
  coverImage?: string;
}) => {
  return (
    <div
      className="bg-[#12161e] border-[1px] hover:scale-105  transition-all duration-100  border-white border-opacity-20 flex flex-col rounded-xl"
      // style={{ boxShadow: "2px 2px 2px 2px rgb(0 0 0 / 20%)" }}
    >
      {coverImage && (
        <div className="relative">
          <div className="items-center absolute bottom-2 left-4 z-[3] flex gap-3 ">
            <div className="h-[55px] w-[55px] border-[1px] border-black  bg-gray-400 aspect-square rounded-full"></div>
            <div className="flex flex-col">
              <span className="text-lg font-bold">{title}</span>
              <div className="text-sm  text-ds-secondary-accent">
                {type} {year}
              </div>
            </div>
          </div>

          <Image
            src={`/img/${coverImage}.webp`}
            height={200}
            width={200}
            alt="Picture of the author"
            className=" object-cover w-full h-[200px] rounded-t-xl"
          ></Image>
          <div className="absolute bg-gradient-to-t from-[#12161e] from-15% to-75%  w-full top-0 h-[200px]"></div>
        </div>
      )}
      {/* Bottom ------------- Section */}
      <section className="flex  flex-col gap-1  justify-between h-full p-4 rounded-b-xl bg-opacity-15">
        <div className="flex flex-col gap-2 mb-4">
          <div className="text-gray-400 text-sm">{blurb}</div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-3">
            <InfoBox text={"Duration"} data={"9 months"} />
            <InfoBox text={"Team Size"} data={"11"} />
          </div>
          <div className="flex flex-wrap gap-2">
            {tags &&
              tags.map((tag, i) => (
                <div
                  key={i}
                  className=" whitespace-nowrap bg-ds-main-accent bg-opacity-5 text-ds-main-accent text-xs p-1 px-3 rounded-full"
                >
                  {tag}
                </div>
              ))}
          </div>
          <div className="text-ds-main-accent flex uppercase gap-2 items-center text-sm mt-4">
            see project
            <div className=" h-6 w-6 max-h-6 max-w-6 min-h-6 min-w-6">
              <Arrow2Icon />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const InfoBox = ({ text, data }: { text: string; data: string }) => {
  return (
    <div className="flex flex-col whitespace-nowrap text-sm w-1/3">
      <span className="text-gray-400">{text}</span>
      <span className="">{data}</span>
    </div>
  );
};
