export const SectionHeader = ({ text }: { text: string }) => {
  return (
    <div className="text-4xl sm:text-5xl font-black text-ds-main-accent">
      {text}
      {/* <span className="absolute mx-auto py-4 flex  w-fit  bg-ds-main-accent blur-sm opacity-40  bg-clip-text  box-content font-extrabold text-transparent text-center select-none">
        {text}
      </span>
      <h1
        className="relative top-0 w-fit h-auto py-4 justify-center flex bg-ds-main-accent
       items-center bg-clip-text  font-extrabold text-transparent text-center select-auto"
      >
        {text}
      </h1> */}
    </div>
  );
};
