import React from "react";
import styles from "../styles";

import { AiFillHtml5 } from "react-icons/ai";
import { LiaCss3Alt } from "react-icons/lia";
import { DiIllustrator } from "react-icons/di";
import { SiCanva } from "react-icons/si";
import {
  BiLogoJavascript,
  BiLogoTailwindCss,
  BiLogoFigma,
} from "react-icons/bi";
import { FaReact } from "react-icons/fa";

const TechStack = () => {
  return (
    <div className={`${styles.justifyBetween}`}>
      <AiFillHtml5 className="text-[32px] sm:mx-2" />
      <LiaCss3Alt className="text-[32px] sm:mx-2" />
      <BiLogoJavascript className="text-[32px] sm:mx-2" />
      <FaReact className="text-[32px] sm:mx-2" />
      <BiLogoTailwindCss className="text-[32px] sm:mx-2" />
      <BiLogoFigma className="text-[32px] sm:mx-2" />
      <DiIllustrator className="text-[32px] sm:mx-2" />
      <SiCanva className="text-[32px] sm:mx-2" />
    </div>
  );
};

export default TechStack;
