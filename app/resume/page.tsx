"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiPython } from "react-icons/si";

const about = {
  title: "About Me",
  description:
    "Hello! I'm Dinesh Niure, a passionate Full-Stack Web Developer with over 3 years of experience in creating impactful web applications. I excel in Web Development, SEO, Digital Marketing, and Graphics Design. My journey in the tech world has been fueled by a constant desire to learn and take on exciting challenges. I have honed my skills through various online courses and bootcamps, and I am always eager to expand my knowledge and expertise.",
  info: [
    {
      fielName: "Name",
      fieldValue: "Dinesh Niure",
    },
    {
      fielName: "Phone",
      fieldValue: "(+977) 986 3040 097",
    },
    {
      fielName: "Experience",
      fieldValue: "3+ Years",
    },
    {
      fielName: "Skype",
      fieldValue: "dinesh.niure07",
    },
    {
      fielName: "Nationality",
      fieldValue: "Nepali",
    },
    {
      fielName: "Email",
      fieldValue: "starkdinesh2@gmail.com",
    },
    {
      fielName: "Freelance",
      fieldValue: "Available",
    },
    {
      fielName: "Language",
      fieldValue: "English, Nepali, Hindi",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "With over 3 years of experience in the tech industry, I have worked on various projects that have honed my skills in web development, SEO, digital marketing, and graphics design. My professional journey includes working with startups, educational institutions, and digital marketing agencies, where I have contributed to building impactful web applications and effective digital strategies.",
  items: [
    {
      company: "eVipann",
      position: "Full Stack Developer",
      date: "2022 - Present",
    },
    {
      company: "E-commerce Startup",
      position: "Freelance Web Developer",
      date: "2022 - 2023",
    },
    {
      company: "Tech Academy",
      position: "Freelance Web Developer",
      date: "2022 - 2023",
    },
    {
      company: "Digital Marketing Agency",
      position: "Freelance Web Developer",
      date: "2023 - Present",
    },
    {
      company: "Tech Academy",
      position: "Freelance Web Developer",
      date: "2022 - 2023",
    },
    {
      company: "Digital Marketing Agency",
      position: "Freelance Web Developer",
      date: "2023 - Present",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "I have pursued various online courses and bootcamps to enhance my skills in web development. My educational journey includes a Full Stack Web Development Bootcamp, a Front-End Track (React) from Codecademy, and several programming courses. These experiences have equipped me with the knowledge and expertise to excel in the tech industry.",
  items: [
    {
      institution: "Online Course Platform",
      degree: "Full Stack Web Development Bootcamp",
      date: "2023",
    },
    {
      institution: "Codecademy",
      degree: "Front-End Track (React)",
      date: "2022",
    },
    {
      institution: "Online Course",
      degree: "Programming Course",
      date: "2021 - 2023",
    },
    {
      institution: "Tech Institute",
      degree: "Certified Web Developer",
      date: "2021",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "I possess a diverse set of skills in web development, including proficiency in HTML, CSS, JavaScript, React, Node.js, Tailwind CSS, Next.js, and Python. My expertise extends to SEO, Digital Marketing, and Graphics Design, allowing me to create comprehensive and effective web solutions.",
  items: [
    {
      title: "HTML5",
      icon: <FaHtml5 />,
    },
    {
      title: "CSS3",
      icon: <FaCss3 />,
    },
    {
      title: "JavaScript",
      icon: <FaJs />,
    },
    {
      title: "React",
      icon: <FaReact />,
    },
    {
      title: "NodeJs",
      icon: <FaNodeJs />,
    },
    {
      title: "Tailwind CSS",
      icon: <SiTailwindcss />,
    },
    {
      title: "NextJs",
      icon: <SiNextdotjs />,
    },
    {
      title: "Python",
      icon: <SiPython />,
    },
  ],
};

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { ScrollArea } from "../components/ui/scroll-area";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip";

import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-center justify-center py-12 xl:p-8">
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience"> Experience</TabsTrigger>
            <TabsTrigger value="education"> Education</TabsTrigger>
            <TabsTrigger value="skills"> Skills</TabsTrigger>
            <TabsTrigger value="about"> About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className=" text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className=" grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent ">{item.date}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className=" w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className=" text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className=" grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent ">{item.date}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className=" w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className=" text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify">
                    {skills.description}
                  </p>

                  <ul className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] ">
                    {skills.items.map((item, index) => {
                      return (
                        <li key={index} className="">
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                  {item.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{item.title}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent
              value="about"
              className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fielName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};
export default Resume;
