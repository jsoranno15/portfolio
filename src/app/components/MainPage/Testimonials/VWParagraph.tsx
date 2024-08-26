export const VWParagprah = () => {
  const className = "text-ds-main-accent font-semibold";
  return (
    <div className="flex flex-col gap-2 text-sm sm:text-base text-ds-grey ">
      <span>
        I have had the pleasure of working alongside Juliana at Everyrealm,
        where she was one of the main front-end contributors to our web app,
        Everyworld, which serves over 30k users. Juliana&apos;s ability to
        quickly master our tech stack —{" "}
        <span className={className}>
          Next.js, TypeScript, Zustand and Tailwind CSS
        </span>{" "}
        — was truly impressive. Juliana worked on all aspects of the web app,
        from onboarding and account settings to connecting multiple social
        accounts and building reusable components. Her expertise in creating
        beautiful, responsive UIs significantly enhanced our user experience.
      </span>

      <span>
        Beyond her technical skills, Juliana&apos;s{" "}
        <span className={className}> positive attitude </span> and
        <span className={className}> collaborative approach </span>
        made her a vital team member. She consistently went above and beyond to
        ensure our project&apos;s success, sharing her knowledge and supporting
        her colleagues. I highly recommend Juliana as a frontend engineer. Her
        <span className={className}> quick learning</span>,
        <span className={className}> technical expertise </span> , and teamwork
        make her an exceptional asset to any team.
      </span>
    </div>
  );
};
