"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { techStack } from "@/constants/techStack";
import RandomText from "@/components/animations/RandomText";
import MaskingGrid from "@/components/animations/MaskingGrid";
import Footer from "@/components/footer/Footer";

export default function Capabilities() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const filteredTech =
    selectedCategory === "All"
      ? techStack.filter((tech) => tech.category !== "Exploring / Learning")
      : techStack.filter((tech) => tech.category === selectedCategory);

  const toggleExpand = (name: string) => {
    setExpandedItem(expandedItem === name ? null : name);
  };

  const categories = [
    "All",
    "Frontend",
    "Backend",
    "Tools & Services",
    "Languages",
    "Exploring / Learning",
  ];

  const delays = categories.map(() => Math.random() * 1);

  return (
    <>
      <div className="w-full min-h-[120vh] bg-[#161616] text-[#fff] flex flex-col lg:flex-row">
        <div className="w-full lg:w-[50%]">
          <div className="lg:sticky top-52 mt-52 lg:mt-0 lg:pt-0 px-6 z-10">
            <div className="lg:w-[80%] text-3xl lg:text-4xl pb-3 font-medium select-none overflow-hidden josefinSans-text">
              <RandomText text="BUILDING WITH THE RIGHT STACK" />
            </div>
            <div
              className="lg:w-[75%] pt-9 pb-12 lg:pb-20 select-none text-justify font-mono text-sm lg:text-base text-[#6b6b6c] uppercase bg-[#161616] z-10 relative"
              style={{ textIndent: "30%" }}
            >
              <p>
                A strong foundation of the right technologies is key to building
                efficient and high-performing applications. These are the
                languages, frameworks, and tools I use to bring ideas to life.
              </p>

              <MaskingGrid
                color="#161616"
                rowSizes={{ sm: 30, md: 45, lg: 50 }}
                columnSizes={{ sm: 60, md: 90, lg: 50 }}
              />
            </div>
          </div>

          {/* categories buttons */}
          <div className="lg:sticky top-[34rem] lg:w-[80%] gap-2 lg:gap-3 p-6 flex flex-wrap select-none">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: delays[index], duration: 0.5 }}
                onClick={() => {
                  setSelectedCategory(category);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={`px-6 py-1 lg:px-8 lg:py-2 border border-white text-[0.6rem] font-medium font-mono tracking-widest rounded-[0.21rem] hover:text-black hover:bg-[#fff] transition duration-300 active:scale-95 cursor-pointer ${
                  selectedCategory === category ? "bg-[#fff] text-black" : ""
                }`}
              >
                {category.toUpperCase()}
              </motion.button>
            ))}
          </div>
        </div>

        {/* tech list */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
          className="lg:w-[50%] lg:pr-8 lg:mt-52 pt-6 lg:pt-0"
        >
          <div className="mx-4 border-b-2 border-dotted border-[#6a6a6a]"></div>

          <ul className="pb-2">
            {filteredTech.map(({ name, label, logo, description }) => (
              <React.Fragment key={name}>
                <motion.li
                  layout
                  onClick={() => toggleExpand(name)}
                  key={name}
                  className={`group flex justify-between px-4 py-2 hover:bg-[#fff] hover:text-black select-none cursor-pointer ${
                    expandedItem === name && "bg-white text-black"
                  }`}
                >
                  <div className="w-[90%] flex flex-col lg:flex-row justify-between">
                    {/* tech name */}
                    <div className="lg:w-[50%] text-3xl md:text-4xl font-semibold pb-1">
                      {name}
                    </div>

                    {/* label */}
                    <div
                      className={`w-full lg:w-[40%] text-[0.6rem] md:text-[0.7rem] text-[#6b6b6c] 
                    font-medium md:font-semibold my-auto transition-colors duration-300 uppercase`}
                    >
                      {label}
                    </div>
                  </div>

                  {/* plus button */}
                  <svg
                    className="w-12 h-12 cursor-pointer"
                    viewBox="0 0 100 100"
                    onClick={() => toggleExpand(name)}
                  >
                    <line
                      x1="25"
                      y1="50"
                      x2="75"
                      y2="50"
                      stroke={expandedItem === name ? "black" : "white"}
                      className="group-hover:stroke-black"
                      strokeWidth="2"
                    />

                    <line
                      x1="50"
                      y1="25"
                      x2="50"
                      y2="75"
                      stroke={expandedItem === name ? "black" : "white"}
                      strokeWidth="2"
                      className="origin-center transition-transform duration-300 group-hover:stroke-black"
                      style={{
                        transform:
                          expandedItem === name
                            ? "rotate(90deg)"
                            : "rotate(0deg)",
                        transformOrigin: "50% 50%",
                      }}
                    />
                  </svg>
                </motion.li>

                {expandedItem === name && (
                  <motion.div
                    layout
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    exit={{ scaleY: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="border-t border-black/40 p-4 flex gap-4 bg-gray-50 origin-top"
                  >
                    <div className="w-[70%] pb-16 py-6 text-[#6b6b6c] font-medium leading-tight font-mono uppercase">
                      {description}
                    </div>

                    <div className="w-[30%] flex justify-center pt-6">
                      <div className="text-black">{logo}</div>
                    </div>
                  </motion.div>
                )}

                <div className="mx-4 border-b-2 border-dotted border-[#6a6a6a] last:mb-20"></div>
              </React.Fragment>
            ))}
          </ul>
        </motion.div>
      </div>

      <Footer />
    </>
  );
}
