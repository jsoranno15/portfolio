import {
  BombIcon,
  BookIcon,
  BugIcon,
  CryptoCoin,
  FireIcon,
  ForkKnifeIcon,
  HomeIcon,
  HomeIcon2,
  HTMLIcon,
  MicroChipIcon,
  PersonIcon,
  SkeletonIcon,
  SkullAndBonesIcon,
  TeethIcon,
} from "../../icons";

export const Projects = [
  {
    type: "game",
    title: "Hometopia",
    icon: <HomeIcon />,
    year: "2024",
    link: "https://store.steampowered.com/app/1138640/Hometopia/",
    engine: "Unity",
    role: "Game Engineer",
    blurb:
      "The ultimate game for builders. Build your dream home with Hometopia’s powerful tools and realistic graphics. Collaborate with friends or build solo as you turn your creative vision to life. Build houses, neighborhoods, and entire cities.",
    coverImage: "Hometopia",
    tags: ["Unity", "C#", "Figma"],
  },
  {
    type: "webDev",
    title: "Luckyworld",
    icon: <BombIcon />,
    year: "2024",
    link: "https://www.everyworld.com/luckyworld",
    engine: "Unreal Engine 5 (2023)",
    role: "Frontend Developer",
    blurb:
      "Luckyworld is an exciting new addition to the Everyworld ecosystem, designed to offer players additional token utility where they can play custom real-money casino games by betting (and winning!) $EVERY. ",
    coverImage: "luckyworld",
    tags: ["React", "TypeScript", "Next.js", "TailwindCSS", "Zustand"],
  },
  {
    type: "webDev",
    title: "Everyworld",
    icon: <CryptoCoin />,
    year: "2024",
    link: "https://everyworld.com/",
    engine: "Unreal Engine 5 (2023)",
    role: "Frontend Developer",
    blurb:
      "A dynamic platform showcasing immersive digital experiences and Web3 innovations. EveryWorld integrates cutting-edge technologies to create engaging virtual environments and interactive applications, highlighting a commitment to exploring the future of digital worlds.",
    coverImage: "everyworld",
    tags: ["React", "TypeScript", "Next.js", "TailwindCSS", "Zustand"],
  },

  {
    type: "webDev",
    title: "Library Management App",
    teamSize: "1",
    icon: <BookIcon />,
    link: "https://github.com/jsoranno15/LibraryApp",
    year: "2024",
    engine: "",
    role: "Full Stack Engineer",
    blurb:
      "An ongoing project, the Library Management App lets users manage their book collections with full CRUD functionality. Search for books via the Google Books API, add them to your library, track favorite and completed books and securely log in using OAuth integration.",
    coverImage: "library",
    tags: [
      "React",
      "TypeScript",
      "Zustand",
      "TailwindCSS",
      "Next.js",
      "Firebase",
      "MongoDB",
      "Google Books API",
    ],
  },
  {
    type: "game",
    title: "Ember Point",
    teamSize: "11",
    icon: <FireIcon />,
    link: "https://store.steampowered.com/app/2912870/Ember_Point/",
    year: "2024",
    engine: "Unreal Engine 5 (2023)",
    role: "Motion Capture Developer & Technical Designer",
    blurb:
      "Ember Point is a combat-focused, third-person action game. Play as a disgraced defector from a militaristic mega-corporation, Gravitus, who is stuck cleaning up the terrible mess his former employers left behind — all while wielding a top-secret “cure” for a gruesome disease.",
    coverImage: "emberpoint",
    tags: ["UE5"],
  },
  {
    coverImage: "hackrunner",
    type: "moCap",
    teamSize: "2",
    year: "2023",
    title: "Hack Runner",
    icon: <MicroChipIcon />,
    link: "https://www.youtube.com/watch?v=1jlmHrUacPI",
    engine: "Unreal Engine 5 (2023)",
    role: "Motion Capture Developer",
    blurb:
      "A fast-paced motion capture film about a hacker who navigates a virtual reality world to steal classified data while evading pursuers in the real world. The film blends high-tech heists with intense chase sequences, leaving audiences wondering if the hacker can outsmart his enemies and survive.",
    tags: ["UE5", "Motive", "MotionBuilder", "OptiTrack"],
  },
  // {
  //   type: "webDev",
  //   title: "Portfolio Website",
  //   icon: <PersonIcon />,
  //   year: "2024",
  //   link: "/",
  //   engine: "Unreal Engine 5 (2023)",
  //   role: "Frontend Developer",
  //   teamSize: "1",
  //   blurb:
  //     "A personal portfolio website showcasing my skills, projects, and achievements. Designed with a focus on user experience and responsive design, the site highlights my expertise in front-end technologies and demonstrates my ability to create engaging, dynamic web experiences.",
  //   coverImage: "portfolio",
  //   tags: ["React", "TypeScript", "Next.js", "TailwindCSS"],
  // },
  {
    type: "webDev",
    title: "Sodoku Solver",
    teamSize: "1",
    year: "2023",
    icon: <HTMLIcon />,
    link: "https://github.com/jsoranno15/Sudoku-Solver",
    engine: "",
    role: "Programmer",
    blurb:
      "A Sudoku puzzle solver designed using the backtracking algorithm to efficiently solve even the most difficult puzzles. This project highlights algorithmic problem-solving skills by exploring all potential configurations to find valid solutions.",
    coverImage: "sudokusolver",
    tags: ["Python", "CLI"],
  },
  {
    coverImage: "escapethecatacombs",
    year: "2023",
    type: "game",
    teamSize: "4",
    icon: <SkeletonIcon />,
    title: "Escape the Catacombs",
    link: "https://junkim20.itch.io/escape-the-catacombs",
    engine: "Unreal Engine 5 (2023)",
    role: "Technical Designer",
    blurb:
      "A 2D top-down heist game where you control a thieving cat, navigating a witch’s lair to steal valuable items. Use agility and strategy to evade guards and traps as you plan your daring escape.",
    tags: ["Unity 2D", "C#"],
  },
  {
    coverImage: "shadowfrog",
    year: "2023",
    type: "game",
    icon: <TeethIcon />,
    teamSize: "2",
    title: "Shadow Frog",
    link: "https://billiton.itch.io/shadow-frog",
    engine: "Unreal Engine 5 (2023)",
    role: "Narrative Designer and Game Artist",
    blurb:
      " A visual-novel horror game where you play as a mysterious frog with no memory, navigating an eerie village that feels hauntingly familiar. Uncover dark secrets, solve puzzles, and confront forgotten memories to survive the sinister atmosphere surrounding shadowy frogs and unravel the chilling truth.",
    tags: ["Unity 2D", "C#", "Adobe PhotoShop"],
  },

  {
    type: "game",
    title: "King of the Colony",
    teamSize: "3",
    icon: <SkullAndBonesIcon />,
    link: "https://juju136.itch.io/king-of-the-colony",
    year: "2023",
    engine: "Unreal Engine 5 (2023)",
    role: "Technical Designer",
    blurb:
      "As a human disguised as a rat, you infiltrate a rat colony beneath the city to thwart their activities. Using time management and inventive puzzle-solving, navigate a subterranean world and uncover the surprising effects of new urban policies.",
    coverImage: "kingofthecolony",
    tags: ["Unity 2D", "C#"],
  },

  {
    type: "moCap",
    year: "2023",
    title: "An Epic Death",
    icon: <BugIcon />,
    teamSize: "2",
    link: "https://www.youtube.com/watch?v=O0I09iZXVgM",
    engine: "Unreal Engine 5 (2023)",
    role: "Motion Capture Developer",
    blurb:
      "Two individuals engage in a visceral battle to the death.  As the conflict unfolds within a stunningly detailed environment, the film encapsulates the raw power, tension, and ultimate fate of these combatants in a brief yet gripping cinematic experience.",
    coverImage: "anepicdeath",
    tags: ["UE5", "Motive", "MotionBuilder", "OptiTrack"],
  },

  {
    type: "webDev",
    title: "Food Share",
    icon: <ForkKnifeIcon />,
    year: "2023",
    teamSize: "4",
    link: "https://github.com/harryrios/FoodShare",
    engine: "Unreal Engine 5 (2023)",
    role: "Lead Frontend Developer",
    blurb:
      "A sleek, dashboard-style system designed to optimize food pantry operations. It efficiently manages inventory, tracks donations, and coordinates distributions, simplifying administrative tasks and boosting overall efficiency.",
    coverImage: "foodshare",
    tags: ["HTML", "PostgreSQL", "sqlAlchemy"],
  },
];
