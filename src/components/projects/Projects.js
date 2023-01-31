import React from "react";
import {
  workImgOne,
  workImgTwo,
  workImgThree,
  workImgFour,
  workImgFive,
  workImgSix,
  workImgSeven,
  workImgEight,
} from "../../assets";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Projects" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <ProjectsCard
            title="Blog Website"
            category="Website"
            image={workImgThree}
          />
          <ProjectsCard
            title="Business Card Design"
            category="Design"
            image={workImgOne}
          />
          <ProjectsCard
            title="Infinity Logo"
            category="Logo"
            image={workImgTwo}
          />
          <ProjectsCard
            title="Mobile Application"
            category="Shopping"
            image={workImgFive}
          />
        </div>
        <div className="px-6">
          <ProjectsCard
            title="Responsive website"
            category="E-commerce"
            image={workImgFour}
          />
          <ProjectsCard
            title="Grapic Design"
            category="Design"
            image={workImgSix}
          />
          <ProjectsCard
            title="Ideas & Blog"
            category="Website"
            image={workImgEight}
          />
          <ProjectsCard
            title="ZOSS Logo"
            category="Logo"
            image={workImgSeven}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
