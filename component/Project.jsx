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
          className="btn project rounded-xl mb-5"
          onClick={() => document.getElementById("my_modal_2").showModal()}
        >
          SEE MORE
        </a>
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box overflow-y-auto left-[-5px] relative  mt-10 mb-10 max-w-screen w-[90vw] max-h-[800px]  py-20 custom-scrollbar">
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
