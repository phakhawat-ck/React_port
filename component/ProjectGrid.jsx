import React from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
const projects = [
  {
    name: "CLONE WEB Smartmag",
    href: "https://github.com/phakhawat-ck/Frontend_cloneweb/tree/main/Smartmag",
    imgSrc: "/assets/overview/S.png",
    detel:
      "A static clone of the Smartmag magazine layout built with pure HTML and CSS. This was my first hands-on project focused on practicing CSS Grid.",
    challenge:
      "CSS class naming was inconsistent. I'm improving this by learning BEM and utility-first CSS for cleaner, maintainable code.",
    framwork: ["HTML", "CSS"],
    tag: "#clone web ",
    tag_href: "https://smartmag-pbt.blogspot.com/",
  },
  {
    name: "Frontend Projects",
    href: "https://github.com/phakhawat-ck/roadmap.sh-section",
    imgSrc: "/assets/overview/roadmap.png",
    detel:
      "A personal journey through Frontend Roadmap A collection of mini-projects to improve my skills in HTML, CSS, and JavaScript.",
    challenge:
      "I’m currently learning JavaScript on my own, so this project was a fun way to practice things like working with the DOM and making the UI interactive. It was a bit tricky at first, but it really helped me understand how everything connects.",
    framwork: ["HTML", "CSS", "❔JAVA SCRIPT",],
    tag: "#roadmap.sh",
    tag_href: "https://roadmap.sh/frontend/projects",
  },
  {
    name: "React Portfolio",
    href: "https://github.com/phakhawat-ck/React_port",
    imgSrc: "/assets/overview/port.png",
    detel:
      "This is my personal portfolio project, built using React and Tailwind CSS. It's my very first experience working with both technologies",
    challenge:
      "This portfolio was my first project using React with Tailwind CSS. I faced challenges in component structure and styling with utility classes, but it helped me learn how to build reusable components and improve my frontend skills.",
    framwork: ["React", "CSS", "Tailwind", "Vercel","Daisyui"],
    tag: "#website",
    tag_href: "https://phakhawat.vercel.app/",
  },
];

const ProjectCard = ({ project }) => {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4 p-4 project rounded-lg">
      <p className="absolute top-[-26px] right-4 text-xs project px-3 py-1 rounded-t-lg lowercase tracking-widest text-white">
        <a href={project.tag_href}>{project.tag}</a>
      </p>
      {/* Image Left */}
      <div className="flex items-center justify-center rounded-sm overflow-ellipsis">
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          data-tooltip-id={`tooltip-${project.id}`}
          data-tooltip-content="Github"
          data-tooltip-float="true"
        >
          <Tooltip
            id={`tooltip-${project.id}`}
            style={{
              backgroundColor: "#1818189d", 
              color: "#fff", 
              padding: "8px 12px",
              borderRadius: "8px",
              zIndex: 9999,
            }}
          />
          <img
            src={project.imgSrc}
            alt={project.name}
            className="w-64 h-64 object-cover rounded-2xl  border-3 p-1 border-[rgba(38,38,38,0.7)]"
          />
        </a>
      </div>

      <div className="flex flex-col justify-center">
        <h2 className="text-xl font-bold mb-2 text-white uppercase tracking-widest ">
          {project.name}
        </h2>
        <h4 className="underline lg:ml-3 text-white"> Description:</h4>
        <p className="text-white/70 mb-2 text-[13px]">{project.detel}</p>
        <h4 className="underline lg:ml-3 text-white"> Challenges:</h4>
        <p className="text-white/70 mb-2 text-[13px]">{project.challenge}</p>
        <div className="flex flex-wrap gap-2 relative">
          {project.framwork.map((fw, index) => (
            <a
              key={index}
              href="#"
              className="px-3 py-1  text-sm rounded-xl transition project lowercase text-white"
            >#
              {fw}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectGrid = ({ inModal = false ,limit  }) => {
  const displayProjects = inModal
    ? projects
    : limit
    ? projects.slice(0, limit)
    : projects;
  return (
    <div
      className={`grid gap-10 ${
        inModal ? "grid-cols-1 md:grid-cols-1 lg:grid-cols-2" : ""
      }`}
    >
      {displayProjects.map((project, idx) => (
        <ProjectCard key={idx} project={project} />
      ))}
    </div>
  );
};

export default ProjectGrid;
