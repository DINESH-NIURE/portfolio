"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import Head from "next/head";
import emailjs from "emailjs-com";
import { Button } from "../components/ui/button";
import Input from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "../components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

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

interface FormValues {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const Contact = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<string>("");

  // Handle form input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSelectChange = (value: string) =>
    setFormValues((prev) => ({ ...prev, service: value }));

  // Send email function
  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setResponse("");

    try {
      await emailjs.send(
        "service_1yregun",
        "template_nomro5z",
        formValues as unknown as Record<string, unknown>,
        "utlGmhwlNnOYmD94Q"
      );
      setResponse("Message sent successfully!");
      setFormValues({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      setResponse("An error occurred while sending the message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us - Your Company</title>
        <meta
          name="description"
          content="Contact us for more information about our services."
        />
        <meta name="keywords" content="contact, services, email, phone" />
      </Head>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 0.5,
            duration: 0.4,
            ease: "easeIn",
          },
        }}
        className="py-6">
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-[30px]">
            {/* Form Section */}
            <div className="xl:h-[54%] order-2 xl:order-none">
              <form
                onSubmit={sendEmail}
                className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                <h3 className="text-4xl text-accent">Let's work together</h3>
                <p className="text-white/60">
                  I am available for freelance work. Connect with me via email
                  or phone.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    name="firstname"
                    placeholder="Firstname"
                    value={formValues.firstname}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    name="lastname"
                    placeholder="Lastname"
                    value={formValues.lastname}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    name="email"
                    placeholder="Email address"
                    value={formValues.email}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    name="phone"
                    placeholder="Phone number"
                    value={formValues.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Select onValueChange={handleSelectChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      <SelectItem value="Web Development">
                        Web Development
                      </SelectItem>
                      <SelectItem value="Mobile Development">
                        Mobile Development
                      </SelectItem>
                      <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

                <Textarea
                  name="message"
                  placeholder="Type your message here."
                  className="h-[200px]"
                  value={formValues.message}
                  onChange={handleChange}
                  required
                />

                <Button
                  type="submit"
                  size="md"
                  className="max-w-40"
                  disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </Button>
                {response && (
                  <p
                    className={`mt-4 text-sm ${
                      response.includes("successfully")
                        ? "text-green-500"
                        : "text-red-500"
                    }`}>
                    {response}
                  </p>
                )}
              </form>
            </div>

            {/* Info Section */}
            <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
              <ul className="flex flex-col pr-28 gap-10">
                {info.map((item, index) => (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.text}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Contact;
