import React from "react";
import { project01, react } from "../assets";
import styles, { layout } from "../styles";

const ProjectCard = ({
  name,
  content,
  img,
  tech1,
  tech2,
  tech3,
  gLink,
  live,
}) => {
  return (
    <div className={`${layout.fullContainer} mt-8`}>
      <div
        className={`${styles.flexRow}  bg-gradient-to-l from-indigo-950 rounded-xl hover:from-indigo-900`}
      >
        <div className="rounded-lg ">
          <img
            src={img}
            alt=""
            className="w-[800px] rounded-lg hover:scale-110 transition duration-300 ease-in-out "
          />
        </div>
        <div className="md:px-8 py-5 sm:px-9">
          <h1 className={`${styles.heading2}`}>{name}</h1>
          <p className={`${styles.paragraph}`}>{content}</p>
          <div className={`${styles.justifyBetween} my-4 sm:my-1`}>
            <div className="flex flex-start">
              <img src={tech1} className="w-[25px] mx-1 " />
              <img src={tech2} className="w-[25px] mx-1 " />
              <img src={tech3} className="w-[25px] mx-1 " />
            </div>
            <div className="flex flex-end">
              <a
                href={gLink}
                target="_blank"
                className="p-2 sm:p-3 mx-2 text-xs border-2 border-cyan-400 text-white sm:font-semibold font-poppins rounded-xl  hover:bg-primary hover:text-white"
              >
                Github
              </a>

              <a
                href={live}
                target="_blank"
                className="p-2 sm:p-3 text-xs bg-cyan-400 text-primary font-semibold font-poppins rounded-xl  hover:bg-primary hover:text-white hover:border-2 hover:border-cyan-400"
              >
                Live
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
