import React from "react";
import styles, { layout } from "./../styles";
import { logo, profile } from "../assets";
import { SectionTitle, TechStack } from "../components";

const About = () => {
  return (
    <section id="about" className={`${layout.section} sm:${layout.flexOnSM}`}>
      <div className={`${layout.HalfContainer} ${styles.flexCenter}`}>
        <img src={profile} alt="" />
      </div>
      <div className={`${layout.HalfContainer} sm:mt-[5rem]`}>
        <SectionTitle title="| About Me" />
        <p className={`${styles.paragraph}`}>Hello! I'am ...</p>
        <h2 className={`${styles.heading2}`}>Ruth Antonette Mores</h2>
        <p className={`${styles.paragraph}`}>
          I am a self-taught frontend developer and UI designer. I enjoy making
          websites that looks great and work smoothly. My goal is to bring your
          ideas into amazing web experiences, making them both visually
          appealing and user-friendly.
        </p>
        <p className={`${styles.paragraph}`}>
          Here are some technologies I have been working with:
        </p>
        <TechStack />
      </div>
    </section>
  );
};

export default About;
