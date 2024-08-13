import Image from "next/image";

export const ImageHeader = ({ image }: { image: string }) => {
  return (
    <div className="w-full lg:w-fit flex justify-center">
      <div className="whitespace-nowrap  flex flex-col  text-ds-secondary-accent uppercase font-bold">
        <div className="min-w-40 w-full h-full rounded-full items-center flex justify-center">
          <div className="bg-white p-[2px] rounded-full bg-gradient-to-b from-ds-main-accent to-[#EA00D9]">
            <Image
              src={`/img/experience/${image}`}
              width={500}
              height={500}
              alt=""
              className="object-contain min-h-40 min-w-40 max-w-40 max-h-40 rounded-full "
            />
          </div>
        </div>
      </div>
    </div>
  );
};
