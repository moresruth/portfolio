import React from "react";
import styles from "../styles";

const SectionTitle = ({ title }) => {
  return <h1 className={`${styles.flexCenter} ${styles.title}`}>{title}</h1>;
};

export default SectionTitle;
