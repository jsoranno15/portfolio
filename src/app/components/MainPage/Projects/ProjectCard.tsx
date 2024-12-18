import Image from "next/image";
import { useRouter } from "next/router";
import { resolve } from "node:path/posix";
import { ReactElement } from "react";

export const ProjectCard = ({
  title,
  link,
  engine,
  role,
  teamSize,
  tags,
  icon,
  blurb,
  type,
  year,
  coverImage,
}: {
  title: string;
  link: string;
  engine: string;
  teamSize: string;
  role: string;
  blurb: string;
  icon?: string;
  type: string;
  tags?: string[];
  year: string;
  coverImage?: string;
}) => {
  return (
    <a
      className="bg-dark-purple hover:scale-105 flex flex-col rounded-xl transition-all duration-200 
        border-[1px] border-gray-800 border-opacity-60 
        hover:border-[1px] hover:border-ds-main-accent hover:shadow-md hover:shadow-ds-main-accent "
      // style={{ boxShadow: "2px 2px 2px 2px rgb(0 0 0 / 20%)" }}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {coverImage && (
        <div className="relative">
          <div className="items-center absolute bottom-2 left-4 z-[3] flex gap-3 ">
            <div className="flex  items-center justify-center p-[2px] bg-ds-cyan rounded-full">
              <div className="h-[55px] w-[55px] bg-black items-center flex justify-center  aspect-square rounded-full">
                <div className="w-[40px] h-[40px] ">{icon}</div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-[22px] font-bold break">{title}</span>
              <div className="text-sm  text-ds-main-accent">{role}</div>
            </div>
          </div>

          <Image
            src={`/img/projects/${coverImage}.webp`}
            height={200}
            width={200}
            alt=""
            className=" object-cover  h-[200px] w-full rounded-t-xl"
          ></Image>
          <div className="absolute bg-gradient-to-t from-dark-purple from-15% to-45%  w-full top-0 h-[200px]"></div>
        </div>
      )}
      {/* Bottom ------------- Section */}
      <section className="flex  flex-col gap-1  justify-between h-full p-4 rounded-b-xl bg-opacity-15">
        <div className="flex flex-col gap-2 mb-4">
          <div className="text-ds-grey text-sm">{blurb}</div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-3">
            <InfoBox text={"Year"} data={year} />
            {teamSize ? (
              <InfoBox text={"Team Size"} data={teamSize} />
            ) : (
              <InfoBox text={"Company"} data={"Everyrealm"} />
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {tags &&
              tags.map((tag, i) => (
                <div
                  key={i}
                  className=" whitespace-nowrap bg-ds-cyan bg-opacity-5 text-ds-cyan text-xs p-1 px-3 rounded-full"
                >
                  {tag}
                </div>
              ))}
          </div>
          {/* <div className="text-ds-main-accent flex uppercase gap-2 items-center text-sm mt-4">
            see project
            <div className=" h-6 w-6 max-h-6 max-w-6 min-h-6 min-w-6">
              <Arrow2Icon />
            </div>
          </div> */}
        </div>
      </section>
    </a>
  );
};

const InfoBox = ({ text, data }: { text: string; data: string }) => {
  return (
    <div className="flex flex-col whitespace-nowrap text-sm w-1/3">
      <span className="text-ds-grey">{text}</span>
      <span className="">{data}</span>
    </div>
  );
};
