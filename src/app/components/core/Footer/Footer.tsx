import Link from "next/link";
import { FooterComponents } from "./FooterComponents";
import Image from "next/image";
import { SectionHeader } from "../SectionHeader";
const Footer = () => {
  return (
    <section className="light-mode:bg-blue-500 w-full text-sm flex justify-center  sm:px-[48px]  ">
      <div className="flex xl:max-w-[85%] flex-col text-gray-400  font-semibold items-center w-full gap-8  sm:py-[40px] pb-[60px]">
        <SectionHeader text={"Contact Me"} />

        <div className="flex gap-5">
          <div className=" flex gap-5">
            {FooterComponents.map((item, i) => {
              return (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" w-full flex flex-col items-center  font-semibold gap-2  
                   active:opacity-80"
                >
                  <Image
                    src={`/img/misc/${item.logo}`}
                    height={200}
                    width={200}
                    alt="Picture of the author"
                    className=" object-cover transition-all duration-200 hover:scale-110 h-[40px] md:h-[80px] w-full rounded-t-xl"
                  ></Image>
                  {item.name}
                </a>
              );
            })}
          </div>
          <a
            className="hover:cursor-pointer active:opacity-80 flex flex-col items-center gap-2"
            onClick={(e) => {
              window.location.href = "mailto:jsoranno15@gmail.com";
              e.preventDefault();
            }}
          >
            <Image
              src={`/img/misc/mail.png`}
              height={200}
              width={200}
              alt="Picture of the author"
              className=" object-cover h-[40px] transition-all duration-200 hover:scale-110 md:h-[80px]  w-full rounded-t-xl"
            ></Image>
            Email
          </a>
        </div>
        <div className="flex flex-col items-center gap-1 w-[65%] text-center md:w-full">
          <div>
            This website was created using
            <span className="text-ds-secondary-accent">
              {" "}
              Next.js, React, TypeScript,
            </span>{" "}
            and <span className="text-ds-secondary-accent">TailwindCSS</span>
          </div>

          <div className=" flex items-center gap-1 justify-center">
            Deployed on{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://vercel.com/"
            >
              Vercel{" "}
            </a>
          </div>
          <div className="font-normal pt-2">© 2024 Juliana Soranno</div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
