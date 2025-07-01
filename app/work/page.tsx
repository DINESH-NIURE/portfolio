"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from 'swiper';

import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "../components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    title: "Cafe Nepali Accent Campaign",
    category: "Digital Marketing",
    description:
      "Managed a comprehensive digital marketing campaign to increase brand awareness and foot traffic. Developed and executed content strategy, managed social media channels, and ran targeted ad campaigns, resulting in a 40% increase in online engagement.",
    stack: [
      { name: "Social Media Marketing" },
      { name: "Content Creation" },
      { name: "Meta Ads" },
      { name: "Google Analytics" },
    ],
    img: "/assets/work/thumb1.png",
    live: "#",
    github: "",
  },
  {
    num: "02",
    title: "GP Real Estate Lead Gen",
    category: "Paid Advertising",
    description:
      "Executed a targeted Meta Ads campaign for lead generation. Optimized ad creatives, audience targeting, and landing pages to achieve a 25% increase in qualified leads and a 15% reduction in cost-per-lead.",
    stack: [
      { name: "Meta Ads" },
      { name: "Lead Generation" },
      { name: "Conversion Optimization" },
      { name: "A/B Testing" },
    ],
    img: "/assets/work/thumb2.png",
    live: "#",
    github: "",
  },
  {
    num: "03",
    title: "Local Business SEO",
    category: "SEO",
    description:
      "Improved search engine rankings for a local business through on-page, off-page, and technical SEO. Conducted keyword research, optimized website content, and built high-quality backlinks, leading to a 50% increase in organic traffic.",
    stack: [
      { name: "On-Page SEO" },
      { name: "Keyword Research" },
      { name: "Google Search Console" },
      { name: "Ahrefs" },
    ],
    img: "/assets/work/thumb3.png",
    live: "#",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: SwiperType) => {
    const currentSlide = swiper.activeIndex;
    setProject(projects[currentSlide]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row xl:gap-[30px] ">
            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
              <div className="flex flex-col gap-[30px] h-[50%]">
                <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                  {project.num}
                </div>

                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                  {project.category}
                </h2>
                <p className="text-white/60">{project.description}</p>
                <ul className="flex gap-4 flex-wrap">
                  {project.stack.map((item, index) => {
                    return (
                      <li key={index} className=" text-xl text-accent">
                        {item.name}
                        {index !== project.stack.length - 1 && ","}
                      </li>
                    );
                  })}
                </ul>
                <div className="border border-white/20"></div>
                <div className="flex items-center gap-4">
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>

                  {project.github && (
                    <Link href={project.github}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                            <BsGithub className="text-white text-3xl group-hover:text-accent" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Github Repository</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  )}
                </div>
              </div>
            </div>

            <div className="w-full xl:w-[50%] ">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                className="xl:h-[520px] mb-12"
                onSlideChange={handleSlideChange}>
                {projects.map((item, index) => {
                  return (
                    <SwiperSlide key={index} className="w-full">
                      <div className=" h-[460px] ralative group flex justify-center items-center bg-pink-50/20 rounded-lg xl:rounded-none xl:rounded-tl-lg xl:rounded-br-lg overflow-hidden shadow-[10px_0_15px_-5px_rgba(0,0,0,0.1)]">
                        <div className="absolute top-0 bottom-0 w-full h-full z-10"></div>
                        <div className="relative w-full h-full">
                          <Image
                            src={item.img}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}

                <WorkSliderBtns
                  conatinerStyle="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                  btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transitiona-all"
                  iconsStyle=""
                />
              </Swiper>
            </div>
          </div>
        </div>
      </motion.section>
  );
};
export default Work;
