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
    width: 50,
    height: 50,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 50,
    height: 50,
  },
  {
    skill_name: "Java",
    image: "java.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Python",
    image: "python.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "C",
    image: "c.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 50,
    height: 50,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 50,
    height: 50,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 50,
    height: 50,
  },
  {
    skill_name: "Ballerina",
    image: "ballerina.jpg",
    width: 40,
    height: 40,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 50,
    height: 50,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 50,
    height: 50,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 50,
    height: 50,
  },
  {
    skill_name: "Bootstrap",
    image: "bootstrap.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 30,
    height: 30,
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
    width: 50,
    height: 50,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 50,
    height: 50,
  },
  {
    skill_name: "Graphql",
    image: "graphql.png",
    width: 50,
    height: 50,
  },
   {
    skill_name: "Laravel",
    image: "laravel.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 50,
    height: 50,
  },
  {
    skill_name: "Choreo",
    image: "choreo.png",
    width: 50,
    height: 50,
  },
   {
    skill_name: "Figma",
    image: "figma.png",
    width: 30,
    height: 30,
  },
  {
    skill_name: "FastAPI",
    image: "fastapi.jpg",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Angular",
    image: "angular.png",
    width: 40,
    height: 40,
  },
   {
    skill_name: "Blender",
    image: "blender.png",
    width: 40,
    height: 40,
  },
] as const;


export const PROJECTS = [
  {
    title: "Personalized Learning System for Students with ADHD",
    description:
      "Developed a system that delivers adaptive learning content to align with cognitive needs and unique learning patterns of ADHD user profiles, improving learner engagement. Incorporated user profiling and dynamic content adaptation to personalize the learning experience",
    image: "/projects/blog1111.png",

    organization: "University of Moratuwa",
    category: "Level 3 · Individual Research Project",

    overview:
      "This systematic review examines the evolution of machine learning approaches for genomic variant pathogenicity prediction...",

    technologies: [
      "FastAPI",
      "MongoDB Atlas",
      "React.js",
    ],

    media: [
      { label: "Repo Link", link: "#" }
    ],
  },
  {
    title: "Digital Question Paper Management System ",
    description:
      "Built an automated exam-prep platform enabling dynamic question generation and performance analytics for competitive exams, reducing preparation time. Designed and developed key modules for question management and user performance tracking.",
    image:"/projects/blog13.png",

    organization: "University of Moratuwa",
    category: "Level 2 · Industry based project",

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
    title: "Net Insights Application ",
    description:
      "Developed a full-stack application that analyzes employee network logs to gain insights and real-time floor counts for leadership groups, reducing reporting latency by 50%. Designed and integrated scalable microservices and APIs to ensure efficient data processing and system performance.",
    image:"/projects/project-3.png",

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
    title: "Smart Laundry Expert System ",
    description:
      "Developed an expert system for domestic laundry care recommendations using rule-based reasoning and logical inference. Implemented decision rules to provide accurate washing instructions based on fabric type and conditions",
    image:"/projects/blog112.jpeg",

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
    title: "BeFit: Fitness Tracker Application",
    description:
      "Implemented a responsive mobile application that tracks fitness habits and challenges. Designed an intuitive user interface to enhance usability and encourage consistent user engagement with seamless features",
    image:"/projects/bfit.png",

    organization: "University of Moratuwa",
    category: "Research / Bioinformatics",

    overview:
      "This systematic review examines the evolution of machine learning approaches for genomic variant pathogenicity prediction...",

    technologies: [
      "React Native",
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
    title: "Online Shopping System",
    description:
      "Collaborated on a full-stack, fully functional e-commerce platform. Contributed to building RESTful APIs and integrating frontend components with backend services for seamless user experience",
    image:"/projects/blog123.png",

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
    title: "Employee Feedback Management System",
    description:
      "Engineered a full-stack web application developed with React and Ballerina to simplify the collection, storage, and management of employee feedback for team leads. The system was designed to demonstrate scalable API design, seamless frontend-backend integration, and robust data handling with a relational database.",
    image:"/projects/rating.png",

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
    title: "Academic Course & Module Management System",
    description:
      "Developed a Laravel-based web application designed to streamline academic workflows by providing structured course and module management with strict role-based permissions. The platform enforces controlled publishing rules, ensuring both flexibility for academic staff and accountability in curriculum governance.",
    image:"/projects/mm.jpg",

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
    title: "3D-Personal Portfolio Website",
    description:
      "Collaborated on a recycling system that interfaces an Arduino Mega 2560 to recycle waste paper into reusable paper boards with specific sizes, alongside with sensors such as HC-SR04 ultrasonic sensor, DS18B20 temperature sensor, IR sensor and relay modules designed for seamless operation.",
    image:"/projects/mm.jpg",

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

export const CERTIFICATIONS = [
   {
    title: "MoraXreme 9.0 Hackthon",
    description:
      'hackathon',
    image: "/certifications/c2.png",
    link: "https://example.com",
  },
  {
    title: "HackMoral 6.0 Hackathon",
    description:
      'Hackthon.',
    image: "/certifications/c3.png",
    link: "https://example.com",
  },
  {
    title: "Revolux 3.0 Designathon",
    description:
      'Hackathon',
    image: "/certifications/c1.png",
    link: "https://example.com",
  },
];


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
    title: "Experience",
    link: "#experience",
  },
   {
    title: "Education",
    link: "#education",
  },
  {
    title: "Projects",
    link: "#projects",
  },
   {
    title: "Certificates",
    link: "#certificates",
  },
  {
    title: "Contact",
    link: "#contact",
  },
] as const;



