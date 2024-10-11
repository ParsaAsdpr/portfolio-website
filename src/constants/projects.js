import { IoIosLink } from "react-icons/io";
import { SlSocialGithub } from "react-icons/sl";

const data = [
  {
    name: "Portfolio Website",
    description:
      "Redesigned Nike website with Adobe XD then implemented it with Next.js.",
    image: "/images/discord.png",
    links: [
      {
        name: "Github",
        icon: SlSocialGithub,
        url: "https://github.com/ParsaAsdpr/portfolio-website",
      },
      {
        name: "Demo",
        icon: IoIosLink,
        url: "https://portfolio-website-omega.vercel.app/",
      },
    ],
  },
];

export default data;