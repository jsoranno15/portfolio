export const ProjectCard = ({
  title,
  link,
  engine,
  role,
  blurb,
  type,
}: {
  title: string;
  link: string;
  engine: string;
  role: string;
  blurb: string;
  type: string;
}) => {
  return (
    <div className="bg-black bg-opacity-30 flex flex-col rounded-xl">
      <div className="h-[150px] bg-gray-800 rounded-t-xl"></div>
      <div className="flex  flex-col   p-4 rounded-b-xl bg-opacity-15">
        <div className="font-bold ">{title}</div>
        <div className="text-sm">{role}</div>
        <div className="text-sm text-gray-400">{engine}</div>
        <div className="text-sm ">{type}</div>
      </div>
    </div>
  );
};
