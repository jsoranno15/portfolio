export const OYParagraph = () => {
  const className = "text-ds-main-accent font-semibold";

  return (
    <div className="flex flex-col gap-2 text-sm text-gray-400">
      <span>
        Juliana and I worked together in the engineering team at Everyrealm,
        where we collaborated to build multiple products. She was always on top
        of her tasks and
        <span className={className}> extremely reliable,</span> delivering work
        in the best possible way. One of the most impressive traits of Juliana
        as a colleague is her ability to
        <span className={className}> learn and adapt quickly, </span>
        reaching an independent working knowledge of any concept or stack in a
        very short time. She is highly proficient in Next.js/React, Tailwind,
        and implementing complex UI components under tight deadlines.{" "}
      </span>

      <span>
        Besides her technical skills, Juliana is
        <span className={className}> highly communicative, </span>
        very friendly, and super fun to work with, thanks to her lively
        personality. She has a great
        <span className={className}> professional attitude, </span>
        and it has been a fantastic experience working with Juliana at
        Everyrealm!
      </span>
    </div>
  );
};
