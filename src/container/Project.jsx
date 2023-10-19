import React from "react";
import styles, { layout } from "../styles";
import { ProjectCard, SectionTitle } from "../components";
import { projects } from "../constant";

const Project = () => {
  return (
    <section id="projects" className={`${layout.section} sm:pt-[8rem]`}>
      <SectionTitle title="| Projects" />
      <p className={`${styles.flexCenter} ${styles.paragraph} py-4 px-6`}>
        Check out some of my projects I made to enhance my skills in building
        modern web.
      </p>

      {projects.map((card) => (
        <ProjectCard key={card.id} {...card} />
      ))}
    </section>
  );
};

export default Project;
