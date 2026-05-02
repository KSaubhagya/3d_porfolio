"use client";

import { motion } from "framer-motion";
import { useState } from "react";

/* ------------------ DATA ------------------ */
const experiences = [
  {
    role: "Software Engineer Intern",
    company: "WSO2 Pvt Ltd",
    duration: "02/2025 - 08/2025",
    points: [
      "Engineered “Net Insights” analytics application analyzing network log datasets and producing real-time occupancy intelligence, documented system requirements, workflows, and API integrations for streamlined data processing.",
      "Automated data extraction and classification pipelines, reducing the reporting latency.",
      "Integrated Ballerina microservices, custom APIs and Asgardeo identity management for leadership analysis.",
      "Tested and deployed the application in the production environment with role-based access control for senior management.",
      "Strengthened skills in planning, prioritizing, time management, cross-functional and effective communication",
    ],
  },
];

/* ------------------ CARD ------------------ */
const ExperienceCard = ({ exp }: { exp: (typeof experiences)[0] }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y / rect.height - 0.5) * -10;
    const rotateY = (x / rect.width - 0.5) * 10;

    setRotate({ x: rotateX, y: rotateY });
  };

  const reset = () => setRotate({ x: 0, y: 0 });

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
      }}
      className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-xl transition-transform duration-200"
    >
      <h3 className="text-white text-xl font-semibold">
        {exp.role} |{" "}
        <span className="text-purple-300 text-xl font-semibold">
          {exp.company}
        </span>
      </h3>

      <p className="text-gray-400 text-xs mt-1 mb-4">{exp.duration}</p>

      <ul className="space-y-2">
        {exp.points.map((p, i) => (
          <li key={i} className="text-gray-300 text-sm text-justify">
            • {p}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

/* ------------------ MAIN ------------------ */
export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-20 px-6 md:px-20 bg-transparent overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-[-100px] left-1/2 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] -translate-x-1/2" />

      {/* Title */}
      <div className="text-center mb-16 relative z-10">
        <p className="text-gray-400 text-sm">Where I’ve worked</p>
        <h2 className="text-white text-4xl font-bold">Experience</h2>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-10 relative z-10">
        {experiences.map((exp, i) => (
          <ExperienceCard key={i} exp={exp} />
        ))}

        {/* 👇 NEW IMAGE CARD (second slot) */}
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-2 shadow-xl">
          <img
            src="/projects/experience.jpg"
            alt="experience visual"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
