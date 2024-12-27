import resume from "../../resume.json";
import { FaMailBulk, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";

const footerData = [
  {
    title: resume.email,
    url: `mailto:${resume.email}`,
    icon: FaMailBulk,
  },
  {
    title: resume.phone,
    url: "tel:+15629687713",
    icon: FaPhone,
  },
  {
    title: "LinkedIn",
    url: resume.linkedIn,
    icon: FaLinkedin,
  },
  {
    title: "GitHub",
    url: resume.github,
    icon: FaGithub,
  },
];

const Footer = () => {
  return (
    <footer className="p-14 flex justify-center items-center flex-col  ">
      {footerData.map((item) => (
        <a
          key={item.title}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs sm:text-sm lg:text-xl px-5 flex "
        >
          <item.icon
            scale={2}
            className="w-6 h-6 pr-2 "
            style={{ imageRendering: "pixelated" }}
          />
          {item.title}
        </a>
      ))}
    </footer>
  );
};

export default Footer;
