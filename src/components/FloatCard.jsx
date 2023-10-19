import React from "react";
import styles, { layout } from "./../styles";

const FloatCard = () => {
  return (
    <div className="relative">
      <div className="absolute z-[0] bg-blur px-4  w-[200px] md:bottom-[5rem] md:right-[13rem] bottom-[9rem] right-[5rem]">
        <p className={`${styles.paragraph} text-cyan-400`}>
          You've detected my presence?{" "}
        </p>
      </div>

      <div className="absolute z-[2] bg-blur px-4 w-[130px] md:-right-[3.5rem] md:bottom-[2rem] -right-[1.5rem] -bottom-[2rem]">
        <p className={`${styles.paragraph} text-cyan-400`}>Hello World!</p>
      </div>
      <div className="absolute z-[1] bg-blur px-4 w-[200px] md:top-[5rem] md:-left-[15.5rem] top-[4rem] -left-[19rem]">
        <p className={`${styles.paragraph} text-cyan-400 `}>
          <span className="text-white text-[12px] font-thin">I'm a ...</span>{" "}
          <br />
          Frontend Developer <br />
          <span className="text-white text-[12px] font-thin">
            Based in Philippines
          </span>
        </p>
      </div>
    </div>
  );
};

export default FloatCard;
