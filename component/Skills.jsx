import React from "react";
export const Skills = () => {
  const languagesAndTools = [
    { tooltip: "HTML", imgSrc: "/assets/html-5-svgrepo-com.svg" },
    { tooltip: "CSS", imgSrc: "/assets/css-3-svgrepo-com.svg" },
    { tooltip: "JavaScript", imgSrc: "/assets/javascript.svg" },
    { tooltip: "Vite", imgSrc: "/assets/vite-svgrepo-com.svg" },
    { tooltip: "Figma", imgSrc: "/assets/figma-svgrepo-com.svg" },
    { tooltip: "Vercel", imgSrc: "/assets/vercel-fill-svgrepo-com.svg" },
    { tooltip: "Firebase", imgSrc: "/assets/firebase-svgrepo-com.svg" },
  ];

  const librariesAndFrameworks = [
    { tooltip: "React", imgSrc: "/assets/react.svg" },
    { tooltip: "Tailwind CSS", imgSrc: "/assets/tailwind-svgrepo-com.svg" },
    { tooltip: "Daisyui", imgSrc: "/assets/daisyui-seeklogo36px.svg" },
  ];

  const databases = [];

  const other = [];

  const renderIcons = (arr) =>
    arr.map((item, index) => (
      <div
        key={index}
        className="tooltip transition duration-200 hover:scale-110 skill-img flex justify-center items-center "
        data-tip={item.tooltip}
      >
        <img
          src={item.imgSrc}
          alt={item.tooltip}
          className="w-8 h-8 object-contain "
        />
      </div>
    ));

  return (
    <div className=" px-6 space-y-6 uppercase tracking-wider lg:mb-20 skills">
      <div>
        <h3 className="text-xs  font-semibold mb-2 tracking-widest">LANGUAGES AND TOOLS</h3>
        <div className="flex gap-4 flex-wrap">
          {renderIcons(languagesAndTools)}
        </div>
      </div>

      <div>
        <h3 className="text-xs font-semibold mb-2 tracking-widest">LIBRARIES AND FRAMEWORKS</h3>
        <div className="flex gap-4 flex-wrap">
          {renderIcons(librariesAndFrameworks)}
        </div>
      </div>

      <div className="flex gap-10 ">
        <div className="db">
          <h3 className="text-xs font-semibold mb-2 tracking-widest">DATABASES</h3>
          <div className="flex gap-4 flex-wrap">{renderIcons(databases)}</div>
        </div>
        <div className="opacity-35">
          <h3 className="text-xs font-semibold mb-2 tracking-widest">Other</h3>
          <div className="flex gap-4 flex-wrap">{renderIcons(other)}</div>
        </div>
      </div>
    </div>
  );
};
