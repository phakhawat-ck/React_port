import React from "react";
import "./Hero.css";
import "../src/App.css";
import { Skills } from "./Skills";
export const About = () => {
  return (
    <div className="">
      <div className="about my-10 line_center">
        <p className="text-white/70 text-[15px] mb-4 uppercase">
          More About Me
        </p>
        <div className="text-2xl lg:text-3xl">
          <span>Hi there! I'm</span>
          <span className="mx-2 text-3xl text">Phakhawat</span>
        </div>
        <div className="text-white/70 mt-5">
          <p className="mb-4 tracking-wider">
            I'm Phakhawat, currently a 4th-year Computer Science student at <br />
            <span className="font-bold"> Rajamangala University of Technology Krungthep (RMUTK).</span>
          </p>
          <p className="mb-4 tracking-wider">
            I'm constantly improving my skills every day. Although I’m still
            learning, I enjoy hands-on experience by building projects using
            HTML, CSS, and JavaScript to strengthen my fundamentals.
          </p>
          <p className="tracking-wider">
            I'm especially interested in frontend development and love exploring
            tools like React and Tailwind CSS. I may not be perfect yet, but I'm
            passionate, eager to learn, and always moving forward.
          </p>
        </div>
      </div>
      <div className="skills line_center">
        <p className="text-white/70 text-[15px] mb-4 uppercase">skills</p>
        <div className="text-2xl lg:text-3xl">
          <span>My</span>
          <span className="mx-2 text-3xl text">Skills</span>
        </div>

        <div className="text-white/70 mt-5">
          <div className="my-6">
            I’m currently on a self-taught journey in web development. Most of
            my skills are at the Beginner to Basic level, but I'm constantly
            learning and building projects to grow. I enjoy turning ideas into
            code and solving small challenges along the way. Every project I
            build helps me improve my understanding of how the web works — from
            structure to styling to interaction.
            <div className="p-2">
              <h1 className="font-bold">Skills I’m Currently Confident In:</h1>
              <li className="mb-2">
                HTML (Intermediate) – Confident with semantic markup and basic
                responsive layouts.
              </li>
              <li className="mb-2">
                CSS (Intermediate) – Proficient in creating flexible layouts
                using Flexbox and CSS Grid, and currently improving my styling
                practices with BEM and utility-first approaches for cleaner,
                more maintainable code.
              </li>
              <li className="mb-2">
                JavaScript (In Progress) – Practicing DOM manipulation and
                interactivity through mini-projects.
              </li>
            </div>
          </div>
          <Skills />
        </div>
      </div>
    </div>
  );
};
