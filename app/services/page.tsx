"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    text: "Digital Marketing Strategy",
    description:
      "Developing comprehensive digital marketing strategies to help businesses grow their online presence, drive targeted traffic, and increase conversions. I focus on creating a roadmap for success.",
    link: "/contact",
  },
  {
    number: "02",
    text: "Paid Advertising",
    description:
      "Managing Google Ads and Meta Ads campaigns to generate leads and sales. I specialize in audience targeting, A/B testing, and conversion optimization to maximize ROI.",
    link: "/contact",
  },
  {
    number: "03",
    text: "Social Media Management",
    description:
      "Creating and managing engaging content for social media platforms. I help build a strong brand presence and foster community engagement through strategic content planning and scheduling.",
    link: "/contact",
  },
  {
    number: "04",
    text: "Search Engine Optimization (SEO)",
    description:
      "Improving website visibility on search engines through on-page, off-page, and technical SEO. I use keyword research and analytics to drive organic traffic and improve rankings.",
    link: "/contact",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 ">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.4,
              delay: 2.4,
              ease: "easeIn",
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className=" w-full flex justify-between items-center">
                  <div className=" text-outline  group-hover:text-outline-hover text-5xl font-extrabold text-transparent transition-all duration-500">
                    {service.number}
                  </div>
                  <Link
                    href={service.link}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-none duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl " />
                  </Link>
                </div>
                <h2
                  className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500
                  "
                >
                  {service.text}
                </h2>
                <p className="text-white/60">{service.description}</p>
                <div className="border-b border-white/20 w-full "></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
export default Services;
