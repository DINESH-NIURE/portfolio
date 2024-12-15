"use client";

import { emailjs } from "emailjs-com";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectItem, // Import SelectItem from Shadcn UI
} from "../components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    text: "Phone",
    description: "(+977) 986 3040 097",
  },
  {
    icon: <FaEnvelope />,
    text: "Email",
    description: "starkdinesh2@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    text: "Address",
    description: "Kathmandu, Nepal",
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1yregun",
        "YOUR_TEMPLATE_ID",
        e.currentTarget,
        "YOUR_USER_ID"
      )
      .then(
        (result) => {
          console.log(result.text);
          // Optionally reset the form or show a success message
        },
        (error) => {
          console.log(error.text);
          // Optionally show an error message
        }
      );
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="py-6">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              action="https://formspree.io/f/mblryyqk"
              method="POST"
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl  ">
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                I am available for freelance work. Connect with me via email or
                phone.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input name="firstname" placeholder="Firstname" required />
                <Input name="lastname" placeholder="Lastname" required />
                <Input name="email" placeholder="Email address" required />
                <Input name="phone" placeholder="Phone number" required />
              </div>

              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="cst">Mobile Development</SelectItem>
                    <SelectItem value="mst">UI/UX Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                name="message"
                placeholder="Type your message here."
                className="h-[200px]"
              />
              <Button type="submit" size="md" className="max-w-40">
                Send message
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            {/* Display info here */}
            <ul className="flex flex-col pr-28 gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.text}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
export default Contact;
