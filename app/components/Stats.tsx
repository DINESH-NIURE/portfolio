"use client";
import CountUp from "react-countup";

const stats = [
  {
    number: 3,
    text: "Years of Experience",
  },
  {
    number: 25,
    text: "Projects Completed",
  },
  {
    number: 12,
    text: "Technologies Mastered",
  },
  {
    number: 7,
    text: "Happy Clients",
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((stat, index) => {
            return (
              <div
                className=" flex-1 flex gap-4 items-center justify-center xl:justify-start "
                key={index}
              >
                <CountUp
                  end={stat.number}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold text-white"
                />
                <p
                  className={`${
                    stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {stat.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Stats;
