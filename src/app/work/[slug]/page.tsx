"use client";

import Link from "next/link";
import React, { useRef, use } from "react";
import { projects } from "@/constants/projects";
import NotFound from "@/app/not-found";
import { motion, useScroll, useTransform, Variants } from "motion/react";
import MaskingGrid from "@/components/animations/MaskingGrid";
import RandomText from "@/components/animations/RandomText";
import { MdArrowOutward } from "react-icons/md";
import useScreenSize from "@/utils/screenSize";

export default function Project({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const project = projects.find((p) => p.slug === slug);
  if (!project) return NotFound();

  const videoRef = useRef(null);
  const screenSize = useScreenSize();
  const isLargeScreen = screenSize === "lg";
  const formattedProjectLink = project.link
    .replace(/^https?:\/\//, "")
    .toUpperCase();

  const { scrollYProgress } = useScroll({
    target: videoRef,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1.1], [1.1, 0.8]);
  const delays = project.builtWith.map(() => Math.random() * 1);

  const hrVariant: Variants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 1.5, ease: "easeInOut" as const },
    },
  };

  return (
    <div className="px-2 md:px-8 pt-60 bg-[#111]">
      {/* project name */}
      <div className="text-5xl lg:text-8xl text-[#f1f1f1] leading-[0.9] tracking-tight font-semibold flex-wrap josefinSans-text">
        <RandomText text={project.name} />
      </div>

      <div className="mx-2">
        {/* project tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
          className="mt-10 lg:ml-5 text-xs lg:text-sm font-medium text-[#6b6b6c] md:w-[50%] lg:w-[30%] uppercase font-mono text-justify"
          style={{ textIndent: "25%" }}
        >
          {project.tagline}
        </motion.div>

        {/* project link */}
        <div className="w-full md:text-xl my-10 text-[#f1f1f1] hover:text-white/80 font-bold flex items-center lg:justify-end overflow-hidden">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center break-all group"
          >
            <RandomText text={formattedProjectLink} delaySpread={1.2} />
            <MdArrowOutward className="w-7 h-7 group-hover:rotate-90 transition duration-300" />
          </a>
        </div>

        {/* project video */}
        <div className="w-full my-14 md:my-10 lg:my-8 relative">
          {isLargeScreen ? (
            <motion.video
              ref={videoRef}
              style={{ scale }}
              className="w-full h-auto"
              autoPlay
              loop
              muted
            >
              <source src={project.video} type="video/mp4" />
            </motion.video>
          ) : (
            <motion.video className="w-full h-auto" autoPlay loop muted>
              <source src={project.video} type="video/mp4" />
            </motion.video>
          )}

          <MaskingGrid
            color="#111"
            rowSizes={{ sm: 30, md: 45, lg: 150 }}
            columnSizes={{ sm: 60, md: 90, lg: 150 }}
          />
        </div>

        {/* project 1st heading */}
        <div className="lg:w-[40%] text-3xl md:text-4xl text-[#f1f1f1] font-semibold leading-none josefinSans-text">
          <RandomText text="IN A NUTSHELL" />
        </div>

        <motion.hr
          className="w-full border-t border-[#6b6b6c] my-4 origin-left"
          variants={hrVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        />

        <div className="w-full flex justify-end text-sm font-medium text-[#f1f1f1]">
          <div className="lg:w-[55%]">
            {/* year */}
            <div className="flex font-mono">
              <div className="w-[30%] text-[#7a7a7a]">YEAR</div>
              <div className="text-[#ccc]">
                <RandomText text={project.year} />
              </div>
            </div>

            <hr className="w-full border-t border-[#6b6b6c] my-4" />

            {/* overview */}
            <div className="flex font-mono">
              <div className="w-[30%] text-[#7a7a7a]">OVERVIEW</div>
              <div className="w-[70%] md:pr-2 text-justify text-[#ccc] relative">
                {project.overview.toUpperCase()}

                <MaskingGrid
                  color="#161616"
                  rowSizes={{ sm: 50, md: 35, lg: 40 }}
                  columnSizes={{ sm: 50, md: 50, lg: 50 }}
                />
              </div>
            </div>

            <hr className="w-full border-t border-[#6b6b6c] my-4" />

            {/* the making of */}
            <div className="flex font-mono">
              <div className="w-[30%] text-[#7a7a7a]">THE MAKING OF</div>
              <div className="w-[70%] md:pr-2 uppercase text-justify text-[#ccc] relative">
                <p>{project.making01}</p>
                {project.making02 && <p>{project.making02}</p>}
                {project.making03 && <p>{project.making03}</p>}

                <MaskingGrid
                  color="#161616"
                  rowSizes={{ sm: 50, md: 35, lg: 40 }}
                  columnSizes={{ sm: 50, md: 50, lg: 50 }}
                />
              </div>
            </div>

            <hr className="w-full border-t border-[#6b6b6c] my-4" />

            {/* code */}
            <div className="flex font-mono">
              <div className="w-[30%] text-[#7a7a7a]">CODE</div>
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center break-all w-[70%] text-[#ccc] hover:text-[#f1f1f1] group relative"
              >
                {project.codeLink.replace(/^https?:\/\//, "").toUpperCase()}
                <MdArrowOutward className="w-[1.1rem] h-[1.1rem] group-hover:rotate-90 transition duration-300" />

                <MaskingGrid
                  color="#161616"
                  rowSizes={{ sm: 50, md: 35, lg: 40 }}
                  columnSizes={{ sm: 50, md: 50, lg: 50 }}
                />
              </a>
            </div>
          </div>
        </div>

        {/* project 2nd heading */}
        <div className="lg:w-[40%] mt-32 text-4xl text-[#f1f1f1] font-semibold leading-none josefinSans-text">
          <RandomText text="BUILT WITH" />
        </div>

        <motion.hr
          className="w-full border-t border-[#6b6b6c] my-4 origin-left"
          variants={hrVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />

        <div className="w-full flex justify-end">
          <div className="lg:w-[55%] text-[#ccc] flex flex-wrap gap-2 pr-2">
            {project.builtWith.map((tech, index) => (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: delays[index], duration: 0.5 }}
                viewport={{ once: true }}
                key={tech.name}
                className="border border-[#6b6b6c] flex items-center gap-2 py-1.5 px-2"
              >
                {tech.icon && tech.icon}
                <span className="leading-tight">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* project 3rd heading */}
        <div className="lg:w-[40%] mt-32 text-4xl text-[#f1f1f1] font-semibold leading-none josefinSans-text">
          <RandomText text="WEB VIEW" />
        </div>

        <motion.hr
          className="w-full border-t border-[#6b6b6c] my-4 origin-left"
          variants={hrVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />

        <div className="w-full h-full">{project.renderImages()}</div>

        <motion.hr
          className="w-full border-t border-[#6b6b6c] my-4 mt-20 origin-left"
          variants={hrVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        />

        {/* other projects heading */}
        <div className="flex justify-end">
          <Link
            href="/work"
            className="max-w-max text-4xl lg:text-7xl text-right pt-4 mb-[30vh] text-[#f1f1f1] hover:text-[#6b6b6c] tracking-tight font-semibold flex flex-wrap justify-end josefinSans-text duration-300"
          >
            <RandomText text="OTHER WORKS" />
          </Link>
        </div>
      </div>
    </div>
  );
}
