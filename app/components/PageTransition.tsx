"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";


const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      <div key={pathname}>{children}</div>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{
          opacity: 0,
          transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
        }}
        className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
      />
    </AnimatePresence>
  );
};
export default PageTransition;
