"use client";

import Image from "next/image";
import { useState } from "react";

type Project = {
  title: string;
  description: string;
  image: string;

  status: string;
  duration: string;
  organization: string;
  category: string;

  overview: string;
  technologies: string[];
  media: { label: string; link: string }[];
};

export const ProjectCard = (project: Project) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* -------- CARD -------- */}
      <div
        onClick={() => setOpen(true)}
        className="cursor-pointer relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] hover:scale-105 transition"
      >
        <Image
          src={project.image}
          alt={project.title}
          width={1000}
          height={1000}
          className="w-full object-cover"
        />

        <div className="p-4">
          <h1 className="text-2xl font-semibold text-white">{project.title}</h1>
          <p className="mt-2 text-gray-300">{project.description}</p>
        </div>
      </div>

      {/* -------- MODAL -------- */}
      {open && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex justify-center items-start overflow-y-auto p-6">
          <div className="bg-[#0B0E1A] border border-white/10 rounded-xl max-w-4xl w-full p-6 relative">
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              ✕
            </button>

            {/* Title */}
            <h2 className="text-3xl font-bold text-white mb-2">
              {project.title}
            </h2>
            <p className="text-gray-400 mb-6">{project.description}</p>

            {/* Image */}
            <Image
              src={project.image}
              alt=""
              width={1000}
              height={500}
              className="rounded-lg mb-6"
            />

            {/* Top Info Grid */}
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Info label="Project Status" value={project.status} />
              <Info label="Duration" value={project.duration} />
              <Info label="Organization" value={project.organization} />
              <Info label="Category" value={project.category} />
            </div>

            {/* Overview */}
            <Section title="Project Overview">
              <p className="text-gray-300 text-sm leading-relaxed">
                {project.overview}
              </p>
            </Section>

            {/* Tech */}
            <Section title="Technologies & Tools">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-purple-500/20 text-purple-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Section>

            {/* Media */}
            <Section title="Media">
              {project.media.map((m, i) => (
                <a
                  key={i}
                  href={m.link}
                  target="_blank"
                  className="inline-block px-4 py-2 bg-purple-500 rounded-full text-sm text-white"
                >
                  {m.label}
                </a>
              ))}
            </Section>
          </div>
        </div>
      )}
    </>
  );
};

/* -------- Small components -------- */

const Info = ({ label, value }: { label: string; value: string }) => (
  <div className="border border-white/10 rounded-lg p-3">
    <p className="text-xs text-gray-400">{label}</p>
    <p className="text-sm text-white mt-1">{value}</p>
  </div>
);

const Section = ({ title, children }: any) => (
  <div className="border border-white/10 rounded-lg p-4 mb-4">
    <h3 className="text-purple-400 text-sm mb-2">• {title}</h3>
    {children}
  </div>
);
