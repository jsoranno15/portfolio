import Link from "next/link";
import { FooterComponents } from "./FooterComponents";
import Image from "next/image";
import { SectionHeader } from "../SectionHeader";
const Footer = () => {
  return (
    <section
      id={"contact-section"}
      className="light-mode:bg-blue-500 w-full text-sm flex justify-center  sm:px-[48px]  "
    >
      <div className="flex relative xl:max-w-[85%] flex-col text-ds-grey  font-semibold items-center w-full gap-8  sm:py-[40px] pb-[60px]">
        <SectionHeader one={"Contact"} two={"Me"} />
        <div className="size-full md:size-[300px] z-[-1] absolute bg-ds-main-accent opacity-10 rounded-full blur-[100px]"></div>

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
                    className=" object-cover transition-all duration-200 hover:scale-110 h-10 w-10 md:h-[80px] md:w-[80px] rounded-t-xl"
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
              className=" object-cover  h-10 w-10 transition-all duration-200 hover:scale-110 md:h-[80px]  md:w-[80px] rounded-t-xl"
            ></Image>
            Email
          </a>
        </div>
        <div className="flex flex-col items-center gap-1 w-[85%] text-center md:w-full">
          <div className="text-gray-400 ">
            This website was created using{" "}
            <span className="text-ds-white ">
              <a
                href="https://nextjs.org/"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-ds-main-accent transition-all duration-300"
              >
                Next.js,
              </a>{" "}
              <a
                href="https://react.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-ds-main-accent transition-all duration-300"
              >
                React,
              </a>{" "}
              <a
                href="https://www.typescriptlang.org/"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-ds-main-accent transition-all duration-300"
              >
                TypeScript,
              </a>
            </span>{" "}
            and{" "}
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-ds-main-accent transition-all duration-300"
            >
              TailwindCSS.
            </a>
          </div>

          <div className="text-gray-400  flex items-center gap-1 justify-center">
            Deployed on{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://vercel.com/"
              className="hover:text-ds-main-accent transition-all duration-300 text-ds-white"
            >
              Vercel,{" "}
            </a>
            hosted on
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/jsoranno15/portfolio"
              className="hover:text-ds-main-accent transition-all duration-300 text-ds-white"
            >
              GitHub{" "}
            </a>
          </div>

          <div className="font-normal pt-2 text-gray-400">
            © 2024 Juliana Soranno
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
