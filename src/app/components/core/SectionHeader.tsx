export const SectionHeader = ({ one, two }: { one: string; two?: string }) => {
  return (
    <div className="text-4xl  sm:text-5xl font-black text-white ">
      {one}
      <span className=" text-ds-main-accent"> {two}</span>
    </div>
  );
};
