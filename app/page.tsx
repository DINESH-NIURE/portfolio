"use client";
import { Button } from "./components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "./components/Social";
import Photo from "./components/Photo";
import Stats from "./components/Stats";

const Home = () => {
  const download = () => {
    const link = document.createElement("a");
    link.href = "/assets/DINESH.pdf";
    link.download = "DINESH_NIURE.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            {/* text */}
            <div className="text-center xl:text-left order-2 xl:order-none">
              <span className="text-xl">DIGITAL MARKETER</span>
              <h1 className="h1 mb-6">
                Hello, I&apos;m <br />{" "}
                <span className="text-accent"> Dinesh Niure</span>
              </h1>
              <p className="max-w-[500px] mb-9 text-white/80">
                Strong knowledge in Digital Marketing with hands-on experience in Web Development, SEO, Google Ads, and Meta Ads. I help businesses grow their online presence, drive targeted traffic, and increase conversions.
              </p>
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <Button
                  onClick={download}
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2 ">
                  <span>Download CV</span>
                  <FiDownload className="xl" />
                </Button>

                <div className="mb-8 xl:mb-0">
                  <Social
                    containerStyles="flex gap-6"
                    iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base
                  hover:bg-accent
                  hover:text-primary hover:transition-all duration-500"
                  />
                </div>
              </div>
            </div>
            {/* photo */}
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo />
            </div>
          </div>
        </div>
        <Stats />
      </section>
  );
};

export default Home;
