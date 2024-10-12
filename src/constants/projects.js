import { IoIosLink } from "react-icons/io";
import { SlSocialGithub } from "react-icons/sl";

const data = [
  {
    name: "Nike Redesign",
    description:
      "Redesigned Nike website with Adobe XD then implemented it with Next.js.",
    image: "/images/nike.webp",
    links: [
      {
        name: "Github",
        icon: SlSocialGithub,
        url: "https://github.com/ParsaAsdpr/portfolio-website",
      },
      {
        name: "Demo",
        icon: IoIosLink,
        url: "/",
      },
    ],
    isDark: true,
  },
  {
    name: "Next.js Admin Panel",
    description:
      "Designed an Admin panel with Adobe XD and implemented it using Next.js (App router), Chakra  UI and MySQL ",
    image: "/images/admin.webp",
    links: [
      {
        name: "Github",
        icon: SlSocialGithub,
        url: "https://github.com/ParsaAsdpr/next.js-admin-panel",
      },
    ],
    isDark: false,
  },
  {
    name: "Discord Clone with Next.js",
    description: "A highly detailed clone of Discord using Next.js",
    image: "/images/discord.webp",
    links: [
      {
        name: "Github",
        icon: SlSocialGithub,
        url: "https://github.com/ParsaAsdpr/discord-next.js",
      },
    ],
    isDark: true,
  },
  {
    name: "Bahr Academy",
    description:
      "Designed an online academy with Adobe XD and built the frontend with my team using React.js. ",
    image: "/images/bahr.webp",
    links: [
      {
        name: "Github",
        icon: SlSocialGithub,
        url: "https://github.com/ParsaAsdpr/bahr-academy",
      },
    ],
    isDark: false,
  },
  {
    name: "Portfolio Website",
    description:
      "My own portfolio website with Next.js (App router), Chakra UI and Framer Motion.",
    image: "/images/portfolio.webp",
    links: [
      {
        name: "Github",
        icon: SlSocialGithub,
        url: "https://github.com/ParsaAsdpr/portfolio-website",
      },
      {
        name: "Demo",
        icon: IoIosLink,
        url: "/",
      },
    ],
    isDark: false,
  },
  {
    name: "Islamic Azad University Staff Cooperative Company",
    description:
      "Automation website for islamic azad university staff cooperative company",
    image: "/images/iau.webp",
    links: [
      {
        name: "Demo",
        icon: IoIosLink,
        url: "https://iauco.ir",
      },
    ],
    isDark: true,
  },
  {
    name: "React Chat App",
    description: "Simple React Chat App with Socket.io and Express.Js.",
    image: "/images/chat.webp",
    links: [
      {
        name: "Github",
        icon: SlSocialGithub,
        url: "https://github.com/ParsaAsdpr/React-chat-app",
      },
    ],
    isDark: true,
  },
];

export default data;
