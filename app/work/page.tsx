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
import Head from "next/head"; // Import Head for SEO

const projects = [
  {
    num: "01",
    title: "Tour App",
    categrory: "Full-Stack",
    description:
      "A comprehensive tour booking application built with Next.js 14, Tailwind CSS, Shadcn UI, and MongoDB. It offers a seamless user experience for booking and managing tours.",
    stack: [
      {
        name: "Next.js 14",
      },
      { name: "Tailwind CSS" },
      { name: "Shadcn UI" },
      { name: "MongoDB" },
    ],
    img: "/assets/work/tourapp.png",
    live: "",
    github: "https://github.com/dinesh-niure",
  },
  {
    num: "02",
    title: "Shortify",
    categrory: "Fullstack",
    description:
      "A URL shortening service developed using React.js 18, Tailwind CSS, and Prisma. It provides users with the ability to shorten long URLs and track their usage.",
    stack: [
      {
        name: "React Js 18",
      },
      { name: "Tailwind CSS" },
      { name: "Prisma" },
    ],
    img: "/assets/work/shortify.png",
    live: "",
    github: "https://github.com/dinesh-niure",
  },
  {
    num: "03",
    title: "Evipann Marketing & AI",
    categrory: "Frontend",
    description:
      "A cutting-edge marketing and AI platform built with React JS 17, Tailwind CSS, and Aceternity UI, designed to enhance digital marketing strategies.",
    stack: [
      {
        name: "React JS 17",
      },
      { name: "Tailwind CSS" },
      { name: "Aceternity UI" },
    ],
    img: "/assets/work/evipann.png",
    live: "",
    github: "https://github.com/dinesh-niure",
  },
  {
    num: "04",
    title: "Home Furniture",
    categrory: "Frontend",
    description:
      "A modern home furniture website crafted with HTML 5, CSS 3, and JavaScript, offering a seamless and stylish shopping experience.",
    stack: [
      {
        name: "HTML 5",
      },
      { name: "CSS 3" },
      { name: "JavaScript" },
    ],
    img: "/assets/work/thumb1.png",
    live: "",
    github: "https://github.com/dinesh-niure",
  },
  {
    num: "05",
    title: "Home Decor",
    categrory: "Fullstack",
    description:
      "A comprehensive home decor e-commerce platform developed with Next JS 13, Tailwind CSS, and Node JS, featuring a wide range of products.",
    stack: [
      { name: "Next JS 13" },
      { name: "Tailwind CSS" },
      { name: "Node JS" },
    ],
    img: "/assets/work/thumb2.png",
    live: "",
    github: "https://github.com/dinesh-niure",
  },
  {
    num: "06",
    title: "Portfolio",
    categrory: "Frontend",
    description:
      "A personal portfolio website built with Next JS 13 and Tailwind CSS, showcasing projects and skills in a clean and professional layout.",
    stack: [
      {
        name: "Next JS 13",
      },
      { name: "Tailwind CSS" },
    ],
    img: "/assets/work/thumb3.png",
    live: "",
    github: "https://github.com/dinesh-niure",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: SwiperType) => {
    const currentSlide = swiper.activeIndex;
    setProject(projects[currentSlide]);
  };
  return (
    <>
      <Head>
        <title>Our Work | Dinesh Niure</title>
        <meta name="description" content="Discover the projects and work done by Dinesh Niure, including full-stack and frontend development projects." />
        <meta name="keywords" content="projects, work, full-stack development, frontend development, Dinesh Niure" />
        <meta name="author" content="Dinesh Niure" />
      </Head>
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
                  {project.categrory} Project
                </h2>
                <p className="text-white/60">{project.description}</p>
                <ul className="flex gap-4">
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
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5  flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Projects</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5  flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
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
    </>
  );
};
export default Work;
