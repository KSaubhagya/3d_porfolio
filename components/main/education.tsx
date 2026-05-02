"use client";

import { slideInFromLeft } from "@/lib/motion";
import { motion } from "framer-motion";

type TimelineItem = {
  title: string;
  institution: string;
  date: string;
  extra?: string;
  icon: string;
};

const data: TimelineItem[] = [
  {
    title: "B.Sc. (Hons.) in Information Technology and Management",
    institution: "University of Moratuwa",
    date: "2022–Present",
    icon: "../skills/uomlogo.png",
  },
  {
    title: "G.C.E Advanced Level Examination",
    institution: "Maliyadeva Girls' College",
    date: "2020",
    extra: "ICT, Statistics, French",
    icon: "../skills/schlogo.png",
  },
  {
    title: "G.C.E Ordinary Level Examination",
    institution: "Maliyadeva Girls' College",
    date: "2018 - A",
    extra: "2017 - 9 As",
    icon: "../skills/schlogo.png",
  },
];

export default function Education() {
  return (
    <section id="education" className="bg-transparent py-16 px-6 md:px-20">
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]"
      >
        Education
      </motion.div>
      <br />
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-[28px] top-0 h-full w-[1px] bg-gray-500/40" />

        <div className="flex flex-col gap-14">
          {data.map((item, index) => (
            <div key={index} className="relative flex items-start gap-6">
              {/* Icon */}
              <div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full bg-white overflow-hidden">
                <img
                  src={item.icon}
                  alt=""
                  className="w-11 h-11 object-contain"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col">
                <h3 className="text-white text-base md:text-lg font-semibold tracking-wide">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-base font-medium mt-1">
                  {item.institution}
                </p>

                <p className="text-gray-500 text-sm mt-1">{item.date}</p>

                {item.extra && (
                  <p className="text-gray-500 text-sm mt-2">{item.extra}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
