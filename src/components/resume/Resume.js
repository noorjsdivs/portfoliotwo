import React from "react";
import Title from "../home/Title";
import Education from "./Education";
import Skills from "./Skills";

const Resume = () => {
  return (
    <section id="resume">
      <Title title="My" subTitle="Resume" />
      <Education />
      <Title title="My" subTitle="Skills" />
      <Skills />
    </section>
  );
};

export default Resume;
