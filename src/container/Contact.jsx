import React from "react";
import styles, { layout } from "../styles";

const Contact = () => {
  return (
    <section id="contacts" className={`${layout.section} sm:pt-[8rem]`}>
      <h2
        className={`${styles.heading2} ${styles.flexCenter} px-1 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-violet-500`}
      >
        Let's Work Together
      </h2>

      <div
        className={`${layout.fullContainer} pt-5 ${styles.flexCol} mb-[5rem]`}
      >
        <p className={`${styles.flexCenter} ${styles.paragraph} py-4 px-6`}>
          Hey there!
        </p>
        <p className={`text-center ${styles.paragraph} py-4 px-6`}>
          How nice of you to take look at my personal site.{"  "}
          <span className="font-poppins font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-violet-500">
            Thank You!
          </span>
        </p>
        <p className={`text-center ${styles.paragraph} py-4 px-6`}>
          Hope you have fun exploring it.
        </p>
        <p className={`text-center ${styles.paragraph} py-4 px-6`}>
          I'm actively seeking job opportunities. If you have any suggestions or
          recommendations to share, please feel free to get in touch. Your
          assistance is greatly appreciated!
        </p>

        <div className={`${styles.flexCenter} py-4 px-6 `}>
          <a
            href="mailto:moresruthantonette@gmail.com"
            target="_blank"
            className="p-2 sm:p-3 text-xs bg-cyan-400 text-primary font-semibold font-poppins rounded-xl  hover:bg-primary hover:text-white hover:border-2 hover:border-cyan-400"
          >
            Send Message
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
