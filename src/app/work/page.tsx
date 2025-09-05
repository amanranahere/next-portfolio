"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import RandomText from "@/components/animations/RandomText";
import MaskingGrid from "@/components/animations/MaskingGrid";
import Footer from "@/components/footer/Footer";
import codebitsImg from "@/assets/images/codebitsHero.png";
import vidronImg from "@/assets/images/vidronHome.png";
import weblogImg from "@/assets/images/weblog.png";
import brickBreakerImg from "@/assets/images/brickBreaker.png";
import currencyConverterImg from "@/assets/images/currencyConverter.png";
import flappyBirdImg from "@/assets/images/flappyBird.png";
import snakeGameImg from "@/assets/images/snakeGame.png";

const projectsList = [
  {
    name: "CodeBits",
    href: "/work/codebits",
    description:
      "A personal code snippet manager for organizing and reusing snippets efficiently.",
    tech: "React, MongoDB, Zustand",
    img: codebitsImg,
  },
  {
    name: "Vidron",
    href: "/work/vidron",
    description:
      "A video streaming platform offering a diverse range of content, including engaging full-length videos and short-form snaps.",
    tech: "React, MongoDB, Redux",
    img: vidronImg,
  },
  {
    name: "WeBlog",
    href: "/work/weblog",
    description:
      "A modern blogging platform where users can read, write, and share blogs.",
    tech: "React, Appwrite, TinyMCE",
    img: weblogImg,
  },
  {
    name: "Brick Breaker",
    href: "/work/brick-breaker",
    description:
      "A modern take on the classic brick-breaking arcade game with smooth controls and engaging gameplay.",
    tech: "HTML, CSS, JavaScript",
    img: brickBreakerImg,
  },
  {
    name: "Currency Converter",
    href: "/work/currency-converter",
    description:
      "A simple tool to convert between different currencies using real-time exchange rates.",
    tech: "HTML, CSS, JavaScript",
    img: currencyConverterImg,
  },

  {
    name: "Flappy Bird Clone",
    href: "/work/flappy-bird-clone",
    description:
      "A fun clone of the popular Flappy Bird game built from scratch.",
    tech: "HTML, CSS, JavaScript",
    img: flappyBirdImg,
  },
  {
    name: "Snake Game",
    href: "/work/snake-game",
    description: "A browser-based Snake game with scoring and smooth controls.",
    tech: "HTML, CSS, JavaScript",
    img: snakeGameImg,
  },
];

export default function Work() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <>
      <div className="h-full w-full px-4 lg:px-8 pb-20 flex flex-col items-center justify-center gap-y-20 bg-[#161616] text-white">
        {/* heading and paragraph */}
        <div className="w-full lg:mt-52 flex flex-col lg:flex-row justify-center items-center lg:justify-between">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-medium flex flex-col">
            <RandomText text="WHAT I'VE BUILT" />
          </h1>

          <div
            className="relative lg:w-[30%] text-justify font-mono text-sm text-[#9b9b9c] uppercase"
            style={{ textIndent: "30%" }}
          >
            <p>
              Here's a collection of the projects I've poured my time,
              creativity, and skills into. Each one reflects a learning curve, a
              new challenge tackled, or a creative solution implemented.
              {/* From frontend finesse to backend logic, these works showcase what I love about development — bringing ideas to life through code. */}
            </p>

            <MaskingGrid
              color="#161616"
              rowSizes={{ sm: 50, md: 35, lg: 40 }}
              columnSizes={{ sm: 50, md: 50, lg: 50 }}
            />
          </div>
        </div>

        {/* project list */}
        <ul className="w-full flex flex-col">
          {projectsList.map((project, index) => (
            <div
              key={index}
              onMouseEnter={() => {
                setHoveredProject(project.name);
              }}
              onMouseLeave={() => {
                setHoveredProject(null);
              }}
              className="w-full h-full relative"
            >
              <Link
                href={project.href}
                className={`relative py-7 text-6xl uppercase duration-300 flex flex-col z-20 ${
                  hoveredProject && hoveredProject !== project.name
                    ? "opacity-20"
                    : "opacity-100"
                }
              ${
                hoveredProject && hoveredProject === project.name
                  ? "border-y"
                  : "border-y border-dotted border-[#6a6a6a]"
              }
              `}
              >
                <h3 className="font-medium">{project.name}</h3>

                <div
                  className={`transition-all duration-700 ease-in-out overflow-hidden`}
                  style={{
                    maxHeight:
                      hoveredProject === project.name ? "200px" : "0px",
                  }}
                >
                  <div className="flex gap-x-20 text-[#bababa] mt-2">
                    <p className="lg:w-[30%] text-sm font-mono uppercase">
                      {project.description}
                    </p>
                    <p className="lg:w-[20%] text-sm font-mono uppercase">
                      {project.tech}
                    </p>
                  </div>
                </div>
              </Link>

              {hoveredProject === project.name && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[30vw] aspect-video z-10">
                  <Image src={project.img} alt={project.name} fill />
                </div>
              )}
            </div>
          ))}
        </ul>
      </div>

      <Footer />
    </>
  );
}
