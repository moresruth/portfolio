import React from "react";
import styles, { layout } from "../styles";
import { SectionTitle } from "../components";
import { works } from "../constant";

const Experience = () => {
  return (
    <section id="experience" className={`${layout.section} sm:pt-[8rem]`}>
      <SectionTitle title="| Experience" />

      <div className={`${layout.fullContainer} mt-5 `}>
        {works.map((work, index) => (
          <div
            key={work.id}
            className={`${styles.flexRow} relative border-l-4  border-indigo-900`}
          >
            <div className="mb-8 ml-4">
              <div className="absolute z-[0] w-4 h-4 bg-indigo-900 rounded-full mt-4 -left-2.5 border-indigo-900" />
              <div className={`${styles.flexCol}`}>
                <div className="bg-gradient-to-r from-indigo-900 w-[260px] p-2 rounded-lg  ">
                  <h1 className={`${styles.heading3}`}>{work.title}</h1>
                </div>
                <div className="flex flex-col py-2 sm:flex-row justify-start">
                  <h2 className="pr-4 font-poppins font-normal text-white">
                    {work.company}
                  </h2>
                  <h2 className="pr-4  font-poppins font-normal text-gray-500">
                    {work.duration}
                  </h2>
                </div>
              </div>
              {work.details.map((detail, index) => (
                <ul key={detail.id} className="md:p-4bg-green-700">
                  <li className="flex px-2">
                    <img src={detail.image} alt="" className="pr-2" />
                    <p className=" font-poppins font-normal text-gray-500  ">
                      {detail.sentence}
                    </p>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
