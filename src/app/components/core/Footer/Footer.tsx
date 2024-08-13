import { FooterComponents } from "./FooterComponents";

const Footer = () => {
  return (
    <section className="light-mode:bg-blue-500 w-full  flex justify-center p-4 sm:px-[48px]  pt-8">
      <div className="flex xl:max-w-[85%]   w-full">
        <div className="flex gap-[40px]">
          <div>© 2024 Juliana Soranno</div>
          <div className="text-sm">
            {FooterComponents.map((item, i) => {
              return <div key={i}>{item.name}</div>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
