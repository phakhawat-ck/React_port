import React from "react";
import ProjectGrid from "./ProjectGrid";
import "./Hero.css";
export const Project = () => {
  return (
    <div>
      <div className="about my-10 line_left text-white">
        <p className="text-white/70 text-[15px] mb-4 uppercase ">PROJECTS</p>
        <div className="text-2xl lg:text-3xl">
          <span>This is My</span>
          <span className="mx-2 text-3xl text">Project</span>
        </div>
        <div className="text-white/70 mt-5">
          <ProjectGrid limit={2} />
        </div>
      </div>
      <div className="flex justify-center">
        <a
          className="btn project mb-5 "
          onClick={() => document.getElementById("my_modal_2").showModal()}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="fill-white"><path d="M17 7V5H5v12h2V8.414l10.293 10.293 1.414-1.414L8.414 7H17z"/></svg>
          <p>see more</p>
        </a>
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box overflow-y-auto left-[-5px] relative  mt-10 mb-10 max-w-screen w-[90vw] max-h-[800px]  py-20">
            <ProjectGrid inModal={true} />
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </div>
  );
};
