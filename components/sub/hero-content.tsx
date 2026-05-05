"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col-reverse md:flex-row items-center justify-center px-5 sm:px-10 md:px-20 mt-20 w-full z-[20]"
    >
      <div className="h-full w-full md:w-1/2 flex flex-col gap-5 justify-center m-auto text-start px-4 md:px-0">
        {/* <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
        >
        
        </motion.div> */}

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Hi !{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              I'm Kavindi
            </span>{" "}
            Saubhagya
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a Full Stack Software Engineer with experience in Website,
          Mobile, and Software development. Check out my projects and skills.
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn more
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full md:w-1/2 h-full flex justify-center items-center relative min-h-[300px] md:min-h-[400px] lg:min-h-[500px] mb-8 md:mb-0"
      >
        {/* Base image */}
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 650px"
          draggable={true}
          className="select-none relative object-contain !w-auto !h-auto max-w-[280px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[550px]"
          priority
        />

        {/* Overlay image */}
        <Image
          src="/photo1.png"
          alt="overlay"
          width={200}
          height={200}
          className="absolute 
  top-1/2 left-2 -translate-x-2 -translate-y-1/2
  md:left-1 md:-translate-x-1
  lg:left-1/2 lg:-translate-x-1/2
  w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64
  rounded-full object-cover
  shadow-2xl"
        />
      </motion.div>

      {/* <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div> */}
    </motion.div>
  );
};
