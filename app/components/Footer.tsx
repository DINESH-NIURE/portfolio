import Social from "./Social";

const Footer = () => {
  return (
    <footer className="container bg-primary py-20">
      <hr className="border-t border-gray-200 mb-6" />
      <div className="container mx-auto text-center">
        <p className="text-white/80 mb-4">
          &copy; {new Date().getFullYear()} Dinesh Niure. All rights reserved.
        </p>
        <Social
          containerStyles="flex justify-center gap-6"
          iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base 
          hover:bg-accent
          hover:text-primary hover:transition-all duration-500"
        />
      </div>
    </footer>
  );
};

export default Footer;
