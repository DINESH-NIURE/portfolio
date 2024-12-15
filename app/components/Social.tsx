import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/dinesh-niure",
  },
  {
    icon: <FaLinkedin />,
    path: "https://linkedin.com/in/dinesh-niure",
  },
  {
    icon: <FaYoutube />,
    path: "#",
  },
  {
    icon: <FaTwitter />,
    path: "https://x.com/dineshniure7",
  },
];

const Social = ({containerStyles, iconStyles }: { containerStyles: string, iconStyles: string }) => {
  return (
    <div className={containerStyles}>
      {socials.map(( item, index ) => {
        return (
          <Link href={item.path} key={index} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
