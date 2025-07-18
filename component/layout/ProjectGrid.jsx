import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import projects from "../../src/data/projects.json";

const ProjectCard = ({ project }) => {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4 p-4 project rounded-lg" data-aos="fade-up"
    data-aos-anchor-placement="center-bottom">
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
      className={`grid gap-10 border-amber-100 ${
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
