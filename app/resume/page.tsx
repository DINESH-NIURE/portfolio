"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiPython } from "react-icons/si";

const about = {
  title: "About Me",
  description:
    "Strong knowledge in Digital Marketing with hands-on experience in Web Development, SEO, Google Ads, and Meta Ads. I help businesses grow their online presence, drive targeted traffic, and increase conversions. Well-versed in digital strategy, user behavior, and using the right tools to achieve measurable results.",
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
    "With a proven track record in digital marketing and web development, I have successfully managed campaigns and content for various businesses, driving growth and engagement.",
  items: [
    {
      company: "Cafe Nepali Accent",
      position: "Digital Marketing & Content Manager",
      date: "Oct 2024 - Present",
    },
    {
      company: "GP Real Estate",
      position: "Meta Ads & Campaign Specialist",
      date: "Feb 2024 - Jan 2025",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "I am currently pursuing a Bachelor of Science in Computer Science and Information Technology, which provides a strong technical foundation for my work in web development and digital marketing.",
  items: [
    {
      institution: "Patan Multiple Campus, Lalitpur",
      degree: "Bachelor of Science in Computer Science and Information Technology (BSc. CSIT)",
      date: "2022 – Ongoing",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "I possess a versatile skill set that combines technical expertise in web development with strategic knowledge in digital marketing, allowing me to deliver comprehensive solutions.",
  skillList: [
    {
      title: "Web Development",
      items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Responsive Design", "UI/UX Optimization", "Website Speed Optimization"]
    },
    {
      title: "Paid Advertising",
      items: ["Google Ads (Search, Display, Video)", "Meta Ads (Facebook & Instagram)", "A/B Testing", "Conversion Optimization", "Audience Targeting"]
    },
    {
      title: "Social Media Marketing",
      items: ["Content Planning & Scheduling", "Community Engagement", "Hashtag Research", "Post Boosting"]
    },
    {
      title: "Email Marketing",
      items: ["Email Campaign Setup (Mailchimp, ConvertKit)", "Lead Generation", "List Segmentation", "Automation & A/B Testing"]
    },
    {
      title: "Search Engine Optimization (SEO)",
      items: ["On-Page & Off-Page SEO", "Keyword Research", "Technical SEO", "Google Search Console", "Ahrefs/SEMRush"]
    },
    {
      title: "Analytics & Reporting",
      items: ["Google Analytics & GA4", "UTM Tracking", "Data Studio Reporting", "Funnel Analysis"]
    },
    {
      title: "Other Tools & Platforms",
      items: ["Canva", "Figma", "ChatGPT", "Trello", "Notion", "Basic Video Editing (CapCut, Davinci Resolve)"]
    },
  ],
};

const awards = {
  icon: "/assets/resume/badge.svg",
  title: "My Awards",
  description:
    "I have been recognized for my dedication and performance in the digital marketing field.",
  items: [
    {
      title: "Dedicated Employee Award",
      source: "Cafe Nepali Accent",
      date: "2025",
    },
    {
      title: "Top Campaign Performance",
      source: "GP Real Estate",
      date: "2024",
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
              <TabsTrigger value="awards"> Awards</TabsTrigger>
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

              <TabsContent value="awards" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className=" text-4xl font-bold">{awards.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify">
                    {awards.description}
                  </p>
                  <ScrollArea className="h-[400px]">
                    <ul className=" grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
                      {awards.items.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                            <span className="text-accent ">{item.date}</span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                              {item.title}
                            </h3>
                            <div className="flex items-center gap-3">
                              <span className=" w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60">{item.source}</p>
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

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[30px]">
                      {skills.skillList.map((skillCategory, index) => {
                        return (
                          <div key={index} className="flex flex-col gap-4">
                            <h4 className="text-2xl font-semibold text-center xl:text-left">
                              {skillCategory.title}
                            </h4>
                            <ul className="flex flex-col gap-2">
                              {skillCategory.items.map((item, idx) => {
                                return (
                                  <li key={idx} className="flex items-center gap-2">
                                    <span className="text-accent">•</span>
                                    <p className="text-white/60">{item}</p>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
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
