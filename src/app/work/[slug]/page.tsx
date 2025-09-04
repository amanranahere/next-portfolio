"use client";

import { useRef, use } from "react";
import { projectList } from "@/constants/projectList";
import NotFound from "@/app/not-found";
import { motion, useScroll, useTransform } from "motion/react";

export default function About({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const project = projectList.find((p) => p.slug === slug);
  if (!project) return NotFound();

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const width = useTransform(scrollYProgress, [0, 0.5], ["50%", "100%"]);
  const height = useTransform(scrollYProgress, [0, 0.5], ["15%", "100%"]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["10px", "0px"]);

  return (
    <div>
      <div ref={containerRef} className="relative h-[300vh] w-full bg-white">
        <div
          className="sticky top-0 h-screen w-full flex items-end"
          style={{ padding: "20px" }}
        >
          <motion.video
            style={{ width, height, borderRadius }}
            className="object-cover z-50 shadow-xl"
            src="/videos/vidron.mp4"
            autoPlay
            muted
            loop
          />
        </div>
      </div>

      <div
        className="min-h-screen flex flex-col justify-center items-center"
        style={{ padding: "20px" }}
      >
        <h1 className="text-2xl">Heading</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
          excepturi officia autem. Incidunt, commodi natus. Voluptate expedita
          aliquam officiis cumque sint nulla cupiditate quisquam distinctio
          laborum? Autem itaque quae illum. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Ullam laborum maxime, natus totam iure
          dolorem vitae cumque hic animi blanditiis odio cupiditate optio magni
          quaerat sapiente consectetur. Alias, quas maiores!
        </p>
      </div>
    </div>
  );
}
