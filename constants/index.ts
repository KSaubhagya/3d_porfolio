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
      [
  "- Implemented a personalized learning system that adapts content delivery based on behavior and learning patterns",
  "- Developed modular learning components, customized component layouts focused on clarity, information hierarchy, and cognitive-load reduction, with modeled engagement, cognitive and behavioral features.",
  "- Improved learner retention by 30% through data-driven UI adjustments and principles for data interpretability",
  "- Evaluated system performance through structured experimentation, refining model behavior and personalization"
],
    technologies: [
      "FastAPI",
      "MongoDB Atlas",
      "React.js",
      "Cloudinary",
    ],

    media: [
      { label: "Repo Link", link: "https://github.com/KSaubhagya/IndividualProject" }
    ],
  },
 
 {
    title: "Net Insights Application ",
    description:
      "Developed a full-stack application that analyzes employee network logs to gain insights and real-time floor counts for leadership groups, reducing reporting latency by 50%. Designed and integrated scalable microservices and APIs to ensure efficient data processing and system performance.",
    image:"/projects/project-3.png",

    organization: "University of Moratuwa",
    category: "Intern Project · WSO2",

    overview:
      [
  "-Engineered analyzing network log datasets and producing real-time occupancy intelligence, documented system requirements, workflows for streamlined data processing",
  "- Architected and delivered an end-to-end production system independently using Ballerina microservices and custom APIs, handling full lifecycle from design to deployment",
  "- Engineered data pipelines to ingest and unify distributed WiFi log data, enabling real-time employee location queries and floor-wise occupancy aggregation",
  "- Implemented secure, role-based access control with Asgardeo, exposing restricted search capabilities and operational dashboards for leadership use"
],
    technologies: [
      "React.js",
      "REST API",
      "Ballerina",
      "Asgardeo",
      "Choreo",
      "Graph QL",
      "Postman",
    ],

    media: [
      { label: "-", link: "#" }
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
      [
  "This project does X.",
  "It also does Y.",
  "Built with scalability in mind."
],
    technologies: [
      "Laravel PHP",
      "Laravel Breeze",
      "Bootstrap",
      "MySQL",
      "Figma",
    ],

    media: [
      { label: "Repo Link", link: "https://bitbucket.org/dqpms/firstrepo/" }
    ],
  },
  {
    title: "Smart Laundry Expert System ",
    description:
      "Developed an expert system for domestic laundry care recommendations using rule-based reasoning and logical inference. Implemented decision rules to provide accurate washing instructions based on fabric type and conditions",
    image:"/projects/p3.png",

    organization: "University of Moratuwa",
    category: "Level 3 · Individual mini project",

    overview:
      [
  "This project does X.",
  "It also does Y.",
  "Built with scalability in mind."
],
    technologies: [
      "SWI Prolog",
    ],

    media: [
      { label: "Repo Link", link: "https://github.com/KSaubhagya/smart_laundry_expert" }
    ],
  },
   {
    title: "BeFit: Fitness Tracker Application",
    description:
      "Implemented a responsive mobile application that tracks fitness habits and challenges. Designed an intuitive user interface to enhance usability and encourage consistent user engagement with seamless features",
    image:"/projects/bfit.png",

    organization: "University of Moratuwa",
    category: "Level 3 · Individual mini project",

    overview:
      [
  "This project does X.",
  "It also does Y.",
  "Built with scalability in mind."
],
    technologies: [
      "React Native",
      "Context API",
    ],

    media: [
      { label: "Repo Link", link: "https://github.com/KSaubhagya/Fitness-Tracker" }
    ],
  },
   {
    title: "Online Shopping System",
    description:
      "Collaborated on a full-stack, fully functional e-commerce platform. Contributed to building RESTful APIs and integrating frontend components with backend services for seamless user experience",
    image:"/projects/blog123.png",

    organization: "University of Moratuwa",
    category: "Level 3 · Mini group project",

    overview:
      [
  "This project does X.",
  "It also does Y.",
  "Built with scalability in mind."
],
    technologies: [
      "ReactJS",
      "REST API",
      "Express JS",
      "PostgreSQL",
    ],

    media: [
      { label: "Repo Link/frontend", link: "https://github.com/Supun-SD/SaxonStore/tree/master/saxonstore-frontend" }
    ],
  },
  {
    title: "Employee Feedback Management System",
    description:
      "Engineered a full-stack web application developed with React and Ballerina to simplify the collection, storage, and management of employee feedback for team leads. The system was designed to demonstrate scalable API design, seamless frontend-backend integration, and robust data handling with a relational database.",
    image:"/projects/rating.png",

    organization: "University of Moratuwa",
    category: "Mini project · WSO2",

    overview:
      [
  "This project does X.",
  "It also does Y.",
  "Built with scalability in mind."
],
    technologies: [
      "Ballerina",
      "REST API",
      "React.js",
      "SQLite",
      "OpenAPI",
    ],

    media: [
      { label: "Repo Link", link: "https://github.com/KSaubhagya/Employee-Feedback-MS" }
    ],
  },
   {
    title: "Academic Course & Module Management System",
    description:
      "Developed a Laravel-based web application designed to streamline academic workflows by providing structured course and module management with strict role-based permissions. The platform enforces controlled publishing rules, ensuring both flexibility for academic staff and accountability in curriculum governance.",
    image:"/projects/mm.jpg",

    organization: "University of Moratuwa",
    category: "Individual project",

    overview:
      [
  "This project does X.",
  "It also does Y.",
  "Built with scalability in mind."
],
    technologies: [
      "Laravel PHP",
      "MySQL",
      "Bootstrap",
    ],

    media: [
      { label: "Repo Link", link: "https://github.com/KSaubhagya/Module_Management_System" }
    ],
  },
  {
    title: "3D-Personal Portfolio Website",
    description:
      "Developed a Three.js based 3D portfolio, displaying my work and skills. Implemented interactive 3D elements and smooth animations to create an engaging user experience, showcasing my projects and skills in a visually appealing manner.",
    image:"/projects/mm.jpg",

    organization: "University of Moratuwa",
    category: "Individual project",

    overview:
      [
  "This project does X.",
  "It also does Y.",
  "Built with scalability in mind."
],
    technologies: [
      "React.js",
      "Three.js",
      "Tailwind CSS",
    ],

    media: [
      { label: "Repo Link", link: "https://github.com/KSaubhagya/3D-Portfolio-Website" }
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
  {
    title: "Machine Learning Explainability - Kaggle",
    description:
      'Hackathon',
    image: "/certifications/c4.png",
    link: "https://example.com",
  },
  {
    title: "Predictive Modeling Fundamentals I",
    description:
      'Hackathon',
    image: "/certifications/c5.png",
    link: "https://example.com",
  },
  {
    title: "Intermediate Machine Learning - Kaggle",
    description:
      'Certification',
    image: "/certifications/c6.png",
    link: "https://example.com",
  },
   {
    title: "Deep Learning with TensorFlow",
    description:
      'Hackathon',
    image: "/certifications/c7.png",
    link: "https://example.com",
  },
  {
    title: "Create Your Own AI Agent with h2oGPTe",
    description:
      'Hackathon',
    image: "/certifications/c8.png",
    link: "https://example.com",
  },
  {
    title: "User Experience Design Professional Certification",
    description:
      'Certification',
    image: "/certifications/c9.png",
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



