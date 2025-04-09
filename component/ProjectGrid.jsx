import React from "react";

const projects = [
  {
    name: "CLONE WEB Smartmag",
    href: "https://github.com/phakhawat-ck/Frontend_cloneweb/tree/main/Smartmag",
    imgSrc: "/assets/S.png",
    detel: "A static clone of the Smartmag magazine layout built with pure HTML and CSS. This was my first hands-on project focused on practicing CSS Grid.",
    challenge: "CSS class naming was inconsistent. I'm improving this by learning BEM and utility-first CSS for cleaner, maintainable code.",
    framwork: ["HTML", "CSS"],
    tag: "#clone web ",
    tag_href: "https://smartmag-pbt.blogspot.com/",
  },
  {
    name: "Frontend Projects",
    href: "https://github.com/phakhawat-ck/roadmap.sh-section",
    imgSrc: "/assets/roadmap.png",
    detel: "A personal journey through Frontend Roadmap A collection of mini-projects to improve my skills in HTML, CSS, and JavaScript.",
    challenge: "I’m currently learning JavaScript on my own, so this project was a fun way to practice things like working with the DOM and making the UI interactive. It was a bit tricky at first, but it really helped me understand how everything connects.",
    framwork: ["HTML", "CSS","❔JAVA SCRIPT"],
    tag: "#roadmap.sh",
    tag_href: "https://roadmap.sh/frontend/projects",
  },
];

const ProjectCard = ({ project }) => {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4 p-4 project rounded-lg">
      <p className="absolute top-[-26px] right-4 text-xs project px-3 py-1 rounded-t-lg lowercase tracking-widest">
        <a href={project.tag_href}>{project.tag}</a>
      </p>
      {/* Image Left */}
      <div className="flex items-center justify-center rounded-sm overflow-ellipsis">
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <img
            src={project.imgSrc}
            alt={project.name}
            className="w-64 h-64 object-cover rounded-2xl  border-3 p-1 border-[rgba(38,38,38,0.7)]"
          />
        </a>
      </div>

      {/* Details Right */}
      <div className="flex flex-col justify-center">
        <h2 className="text-xl font-bold mb-2 text-white uppercase tracking-widest ">{project.name}</h2>
        <h4 className="underline lg:ml-3"> Description:</h4>
        <p className="text-white/70 mb-2 text-[13px]">{project.detel}</p>
        <h4 className="underline lg:ml-3"> Challenges:</h4>
        <p className="text-white/70 mb-2 text-[13px]">{project.challenge}</p>
        <div className="flex flex-wrap gap-2 relative">
          {project.framwork.map((fw, index) => (
            <a
              key={index}
              href="#"
              className="px-3 py-1  text-sm rounded-xl transition project "
            >
              {fw}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectGrid = () => {
  return (
    <div className="grid gap-10">
      {projects.map((project, idx) => (
        <ProjectCard key={idx} project={project} />
      ))}
    </div>
  );
};

export default ProjectGrid;
