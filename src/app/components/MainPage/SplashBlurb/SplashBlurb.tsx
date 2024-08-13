export const SplashBlurb = () => {
  return (
    <div
      id="section-splash"
      className="min-h-[calc(100vh)] justify-center flex items-center  "
    >
      <div className="flex flex-col text-center">
        <span
          className="absolute  text-[36px] md:text-[96px] leading-[96px] font-black  mx-auto py-4 flex  w-fit  bg-[#12161e] 
        blur-xl opacity-100  bg-clip-text  box-content  text-transparent text-center select-none"
        >
          Juliana Soranno
        </span>
        <h1
          className="relative  text-[36px] md:text-[96px] leading-[96px] font-black  top-0 w-fit h-auto py-4 justify-center flex bg-white
       items-center bg-clip-text   text-transparent text-center select-auto"
        >
          Juliana Soranno
        </h1>

        <div className="">
          Software Engineer, Front End Developer, Technical Desiger
        </div>
      </div>
    </div>
  );
};
