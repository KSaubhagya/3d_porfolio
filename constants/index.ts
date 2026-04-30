import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://instagram.com",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://facebook.com",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://x.com/_sanidhyy",
  },
] as const;

export const FRONTEND_SKILL = [

] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Graphql",
    image: "graphql.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },
   {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const FULLSTACK_SKILL = [
  // {
  //   skill_name: "React Native",
  //   image: "reactnative.png",
  //   width: 70,
  //   height: 70,
  // },
  // {
  //   skill_name: "Tauri",
  //   image: "tauri.png",
  //   width: 70,
  //   height: 70,
  // },
  // {
  //   skill_name: "Docker",
  //   image: "docker.png",
  //   width: 70,
  //   height: 70,
  // },

  // {
  //   skill_name: "Figma",
  //   image: "figma.png",
  //   width: 50,
  //   height: 50,
  // },
] as const;

export const OTHER_SKILL = [
  // {
  //   skill_name: "Go",
  //   image: "go.png",
  //   width: 60,
  //   height: 60,
  // },
] as const;

export const PROJECTS = [
  {
    title: "ML in Pathogenicity",
    description:
      "Comprehensive research review on ML/DL approaches for predicting genomic variant pathogenicity.",
    image: "/projects/project-1.png",

    status: "Completed",
    duration: "Level 3 · Independent Study",
    organization: "University of Moratuwa",
    category: "Research / Bioinformatics",

    overview:
      "This systematic review examines the evolution of machine learning approaches for genomic variant pathogenicity prediction...",

    technologies: [
      "Machine Learning",
      "Deep Learning",
      "Graph Neural Networks (GNN)",
      "Protein Language Models (PLM)",
      "Explainable AI (XAI)",
    ],

    media: [
      { label: "Review Paper", link: "#" }
    ],
  },
  {
    title: "ML in Genomic ",
    description:
      "Comprehensive research review on ML/DL approaches for predicting genomic variant pathogenicity.",
    image:"/projects/project-2.png",

    status: "Completed",
    duration: "Level 3 · Independent Study",
    organization: "University of Moratuwa",
    category: "Research / Bioinformatics",

    overview:
      "This systematic review examines the evolution of machine learning approaches for genomic variant pathogenicity prediction...",

    technologies: [
      "Machine Learning",
      "Deep Learning",
      "Graph Neural Networks (GNN)",
      "Protein Language Models (PLM)",
      "Explainable AI (XAI)",
    ],

    media: [
      { label: "Review Paper", link: "#" }
    ],
  },
 {
    title: "ML in ",
    description:
      "Comprehensive research review on ML/DL approaches for predicting genomic variant pathogenicity.",
    image:"/projects/project-3.png",

    status: "Completed",
    duration: "Level 3 · Independent Study",
    organization: "University of Moratuwa",
    category: "Research / Bioinformatics",

    overview:
      "This systematic review examines the evolution of machine learning approaches for genomic variant pathogenicity prediction...",

    technologies: [
      "Machine Learning",
      "Deep Learning",
      "Graph Neural Networks (GNN)",
      "Protein Language Models (PLM)",
      "Explainable AI (XAI)",
    ],

    media: [
      { label: "Review Paper", link: "#" }
    ],
  },
];

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://youtube.com",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://instagram.com",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://x.com/_sanidhyy",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Become Sponsor",
        icon: null,
        link: "https://youtube.com",
      },
      {
        name: "Learning about me",
        icon: null,
        link: "https://example.com",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:contact@example.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
   {
    title: "Education",
    link: "#education",
  },
   {
    title: "Experience",
    link: "#experience",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;



export const LINKS = {
  sourceCode: "https://github.com/sanidhyy/space-portfolio",
};
