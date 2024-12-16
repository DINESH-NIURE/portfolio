"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
// import VisuallyHidden from "./VisuallyHidden";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col ">
        <DialogTitle aria-describedby={undefined}>
          <DialogDescription> </DialogDescription>Navigation Menu</DialogTitle>
        <div className="mt-20 mb-40 text-center text-2xl ">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              DINESH<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>

        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                onClick={() => setIsOpen(false)}
                className={`${
                  link.path === pathName &&
                  "text-accent border-b-2 border-accent"
                }
                  text-xl capitalize hover:text-accent transition-all`}>
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
