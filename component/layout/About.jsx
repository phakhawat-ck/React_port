import React from "react";
import "../Hero.css";
import "../../src/App.jsx";
import { Skills } from "./Skills.jsx";
export const About = () => {
  return (
    <div className="text-white ">
      <div className="my-10 line_left">
        <p className="text-white/70 text-[15px] mb-4 uppercase g-text">
          More About Me
        </p>
        <div className="text-2xl lg:text-3xl ">
          <span >Hi there! I'm</span>
          <span className="mx-2 text-3xl text ">&nbsp;Phakhawat</span>
        </div>
        <div className="text-white/70 mt-5 ">
          <p className="mb-4 tracking-wider" data-aos="fade-right"data-aos-duration="1200">
            I'm Phakhawat Chomkul, currently a 4th-year Computer Science student at <br />
            <span className="font-bold"> Rajamangala University of Technology Krungthep (RMUTK).</span>
          </p>
          <p className="mb-4 tracking-wider " data-aos="fade-right"data-aos-duration="1500">
            I'm constantly improving my skills every day. Although I’m still
            learning, I enjoy hands-on experience by building projects using
            HTML, CSS, and JavaScript to strengthen my fundamentals.
          </p>
          <p className="tracking-wider " data-aos="fade-right"data-aos-duration="1700">
            I'm especially interested in frontend development and love exploring
            tools like React and Tailwind CSS. I may not be perfect yet, but I'm
            passionate, eager to learn, and always moving forward.
          </p>
        </div>
      </div>

{/* SKILLS */}

      <div className="skills line_left">
        <p className="text-white/70 text-[15px] mb-4 uppercase g-text">skills</p>
        <div className="text-2xl lg:text-3xl">
          <span >My &nbsp;</span>
          <span className="mx-2 text-3xl text ">Skills</span>
        </div>

        <div className="text-white/70 mt-5">
          <div className="my-6 " data-aos="fade-right"data-aos-duration="1200">
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
