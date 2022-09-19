import React from "react";
import { BsTelegram, BsGithub, BsLinkedin } from "react-icons/bs";
import { FaPhoneSquareAlt } from "react-icons/fa";

const Footer = () => {
  const [socialMedia] = React.useState([
    {
      name: "Telegram",
      element: <BsTelegram />,
      href: "https://telegram.me/BChatBot?start=sc-683486-4zWlnrG",
    },
    {
      name: "LinkedIn",
      element: <BsLinkedin />,
      href: "https://www.linkedin.com/in/parsa-asadpour-42014322b",
    },
    {
      name: "Github",
      element: <BsGithub />,
      href: "https://github.com/ParsaAsdpr",
    },
    { name: "Phone", element: <FaPhoneSquareAlt />, href: "tel:+989939604178" },
  ]);

  return (
    <footer className="w-full py-14 mt-28 bg-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row gap-y-7 items-center  justify-between">
        <p className="text-stone-100 text-xs sm:text-sm">
          © 2022 Parsa Asadpour. All Rights Reserved.
        </p>
        <div className="flex flex-row gap-5 sm:gap-8 lg:gap-8 xl:gap-10">
          {socialMedia.map((social, index) => (
            <a
              target="_blank"
              className="text-xl text-gray-50 hover:scale-125 transition"
              key={index}
              href={social.href}
              title={social.name}
            >
              {social.element}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
