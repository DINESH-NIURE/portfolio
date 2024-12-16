"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import Head from "next/head"; // Import Head for SEO

const services = [
  {
    number: "01",
    text: "Web Development",
    description:
      "I build web applications using the latest technologies to create fast, responsive, and scalable websites.",
    link: "#",
  },
  {
    number: "02",
    text: "Search Engine Optimization (SEO)",
    description:
      "I help businesses rank higher on search engines to increase their online visibility and attract more customers.",
    link: "#",
  },
  {
    number: "03",
    text: "Digital Marketing",
    description:
      "I create effective digital marketing strategies to boost your online presence and engage with your audience.",
    link: "#",
  },
  {
    number: "04",
    text: "Graphics Design",
    description:
      "I design visually appealing graphics that effectively communicate your brand's message.",
    link: "#",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <>
      <Head>
        <title>Our Services | Dinesh Niure</title>
        <meta name="description" content="Explore the range of services offered by Dinesh Niure, including web development, SEO, digital marketing, and graphics design." />
        <meta name="keywords" content="web development, SEO, digital marketing, graphics design, Dinesh Niure" />
        <meta name="author" content="Dinesh Niure" />
      </Head>
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
            className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
            {services.map((service, index) => {
              return (
                <div
                  key={index}
                  className="flex-1 flex flex-col justify-center gap-6 group">
                  <div className=" w-full flex justify-between items-center">
                    <div className=" text-outline  group-hover:text-outline-hover text-5xl font-extrabold text-transparent transition-all duration-500">
                      {service.number}
                    </div>
                    <Link
                      href={service.link}
                      className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-none duration-500 flex justify-center items-center hover:-rotate-45">
                      <BsArrowDownRight className="text-primary text-3xl " />
                    </Link>
                  </div>
                  <h2
                    className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500
                  ">
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
    </>
  );
};
export default Services;
