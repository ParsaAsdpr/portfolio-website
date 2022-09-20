import React from "react";
import ProjectCard from "./ProjectCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Academy from "../../../public/images/academy.png";
import portfolio from '../../../public/images/portfolio.png'
import nike from '../../../public/images/Nike Redesign.png'
import { BsArrowLeft } from "react-icons/bs";
import { Parallax } from "react-parallax";

const ProjectSlider = () => {
  const [projects] = React.useState([
    {
      title: "Nike Redesign",
      img: nike,
      desc: "I redesigned Nike website with Adobe XD then i implemented it with Next.js.",
      github: "#",
      link: "#",
      isDark: true
    },
    {
      title: "Bahr Academy",
      img: Academy,
      desc: "designed an online academy website with Adobe XD and built the frontend with my team using React.js.",
      github: "#",
      link: "#",
      isDark: false
    },
    {
      title: "Portfolio Website",
      img: portfolio,
      desc: "designed my own personal website with figma first then i implemented it with Next.js",
      github: "#",
      link: "#",
      isDark: false
    },
  ]);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  };

  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    return (
      <button
        className={`p-4 text-xl border text-stone-800 border-stone-800 rotate-180 absolute z-50
         right-0 bottom-0 hover:text-white hover:bg-stone-800 transition hidden md:block`}
        onClick={() => onClick()}
      >
        <BsArrowLeft />
      </button>
    );
  };

  const CustomLeftArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    return (
      <button
        className="p-4 text-xl border text-stone-800 border-stone-800 absolute z-50
         left-0 bottom-0 hover:text-white hover:bg-stone-800 transition hidden md:block"
        onClick={() => onClick()}
      >
        <BsArrowLeft />
      </button>
    );
  };

  return (
    <div className="mt-20 flex-row max-w-7xl mx-auto px-8">
      <Parallax
        strength={100}
        renderLayer={(precentage) => (
          <Carousel
            responsive={responsive}
            swipeable={true}
            customRightArrow={<CustomRightArrow />}
            customLeftArrow={<CustomLeftArrow />}
            className='pb-0 md:pb-20'
            infinite={false}
          >
            {projects.map((project, i) => (
              <ProjectCard
                title={project.title}
                img={project.img}
                desc={project.desc}
                github={project.github}
                link={project.link}
                isDark={project.isDark}
                key={i}
                duration={i}
                perc={precentage}
              ></ProjectCard>
            ))}
          </Carousel>
        )}
      ></Parallax>
    </div>
  );
};

export default ProjectSlider;
