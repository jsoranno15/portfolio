import { FooterComponents } from "./FooterComponents";

const Footer = () => {
  return (
    <section className="light-mode:bg-blue-500 p-4 sm:p-[48px] py-8">
      <div className="flex gap-[40px]">
        <div>© 2024 Juliana Soranno</div>
        <div className="text-sm">
          {FooterComponents.map((item, i) => {
            return <div key={i}>{item.name}</div>;
          })}
        </div>
      </div>
    </section>
  );
};

export default Footer;
