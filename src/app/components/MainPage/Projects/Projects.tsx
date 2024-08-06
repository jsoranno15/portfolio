import { Games } from "./Games";
import { WebDev } from "./WebDev";

export const ProjectSection = () => {
  return (
    <section id="section-projects" className="flex flex-col gap-5 h-[500px]">
      <div className="text-6xl">Projects</div>
      <div className="flex flex-col">
        <div className="text-xl font-bold">Web Dev</div>
        {WebDev.map((web, i) => {
          return <div key={i}>{web.title}</div>;
        })}
      </div>
      <div className="flex flex-col">
        <div className="text-xl font-bold">Games</div>
        {Games.map((game, i) => {
          return <div key={i}>{game.title}</div>;
        })}
      </div>
    </section>
  );
};
