import React from "react";
import ProjectGrid from "./ProjectGrid";
export const Project = () => {
  return (
    <div>
      <div className="about my-10 line_center text-white">
      <p className="text-white/70 text-[15px] mb-4 uppercase ">PROJECTS</p>
      <div className="text-2xl lg:text-3xl">
        <span>This is My</span>
        <span className="mx-2 text-3xl text">Project</span>
      </div>
      <div className="text-white/70 mt-5">
        <ProjectGrid/>
      </div>
    </div>
    </div>
  );
};
