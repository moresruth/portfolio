import React from "react";
import styles, { layout } from "../styles";
import { logo } from "../assets";
import { BsLinkedin, BsGithub, BsBehance } from "react-icons/bs";
import { AiFillBehanceSquare } from "react-icons/ai";

const Footer = () => {
  return (
    <section className={`${layout.section} ${styles.flexCol} `}>
      <div
        className={`${styles.justifyBetween} ${styles.flexRow} py-3 ${styles.flexCenter} `}
      >
        <a href="#about" className="py-3">
          <img src={logo} alt="" />
        </a>
        <div className={`${styles.justifyBetween} py-6 mx-12`}>
          <a
            href="https://www.linkedin.com/in/ruthantonettemores/"
            target="_blank"
          >
            <BsLinkedin className="text-[25px] mx-2 hover:text-indigo-900" />
          </a>
          <a href="https://github.com/moresruth" target="_blank">
            <BsGithub className="text-[25px] mx-2 hover:text-indigo-900" />
          </a>
          <a href="https://www.behance.net/rmmors" target="_blank">
            <BsBehance className="text-[25px] mx-2 hover:text-indigo-900" />
          </a>
        </div>
      </div>
      <div
        className={`${styles.flexCenter} ${styles.paragraph} py-4 px-6 border-t-2 border-indigo-950`}
      >
        Designed and built by Ruth Mores
      </div>
    </section>
  );
};

export default Footer;
