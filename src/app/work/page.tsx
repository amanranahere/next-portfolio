"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import RandomText from "@/components/animations/RandomText";
import MaskingGrid from "@/components/animations/MaskingGrid";
import useScreenSize from "@/utils/screenSize";
import Footer from "@/components/footer/Footer";
import { IoArrowForward } from "react-icons/io5";
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
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const router = useRouter();
  const screenSize = useScreenSize();
  const isSm = screenSize === "sm" || screenSize === "md";
  const listRef = useRef<HTMLUListElement>(null);

  const handleClick = (project: { name: string; href: string }) => {
    if (isSm) {
      setActiveProject(activeProject === project.name ? null : project.name);
    } else {
      router.push(project.href);
    }
  };

  // touch outside the list in sm and md
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (listRef.current && !listRef.current.contains(event.target as Node)) {
        setActiveProject(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="h-full w-full px-4 md:px-6 lg:px-8 pb-20 flex flex-col items-center justify-center gap-y-20 bg-[#111] text-white">
        {/* heading and paragraph */}
        <div className="w-full mt-52 flex flex-col lg:flex-row justify-center items-start lg:justify-between gap-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-8xl font-medium flex flex-col">
            <RandomText text="WHAT I'VE BUILT" />
          </h1>

          <div
            className="relative lg:w-[30%] text-justify font-mono text-xs md:text-sm text-[#9b9b9c] uppercase"
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
        <ul ref={listRef} className="w-full flex flex-col">
          {projectsList.map((project, index) => {
            return (
              <li
                key={index}
                onClick={() => handleClick(project)}
                onMouseEnter={() => {
                  setHoveredProject(project.name);
                }}
                onMouseLeave={() => {
                  setHoveredProject(null);
                }}
                className="w-full h-full relative"
              >
                <div
                  className={`relative py-4 md:py-6 lg:py-7 text-3xl md:text-4xl lg:text-6xl uppercase leading-none duration-75 lg:duration-500 flex flex-col z-20 cursor-pointer border-b-2 border-dotted border-[#6a6a6a] first:border-t-2
                    ${
                      isSm
                        ? activeProject && activeProject !== project.name
                          ? "opacity-20"
                          : "opacity-100"
                        : hoveredProject && hoveredProject !== project.name
                        ? "opacity-20"
                        : "opacity-100"
                    }                  
                  `}
                >
                  <h3 className="font-medium select-none">{project.name}</h3>

                  <div
                    className={`transition-all duration-700 ease-in-out overflow-hidden`}
                    style={{
                      maxHeight: isSm
                        ? activeProject === project.name
                          ? "200px"
                          : "0px"
                        : hoveredProject === project.name
                        ? "200px"
                        : "0px",
                    }}
                  >
                    <div className="flex justify-between lg:justify-normal lg:gap-x-20 text-[#bababa] mt-7">
                      <p className="w-[70%] lg:w-[30%] text-xs md:text-sm font-mono uppercase ">
                        {project.description}
                      </p>
                      <p className="w-[20%] text-xs md:text-sm font-mono uppercase">
                        {project.tech}
                      </p>
                    </div>
                  </div>

                  {activeProject && activeProject === project.name ? (
                    <Link
                      href={project.href}
                      className="absolute top-0 right-0 flex justify-center items-center text-white py-4 md:py-6 pl-4 text-3xl md:text-4xl"
                    >
                      <IoArrowForward className="" />
                    </Link>
                  ) : null}
                </div>

                {hoveredProject === project.name && (
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[30vw] aspect-video z-10">
                    <Image src={project.img} alt={project.name} fill />
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      <Footer />
    </>
  );
}
