import skillsData from "../../src/data/skills.json"; // ← import data JSON

export const Skills = () => {
  const {
    languagesAndTools,
    librariesAndFrameworks,
    databases,
    other,
  } = skillsData;

  const renderIcons = (arr) =>
    arr.map((item, index) => (
      <div
        key={index}
        className="tooltip transition duration-200 hover:scale-110 skill-img flex justify-center items-center "
        data-tip={item.tooltip}
        data-aos="flip-left"
        data-aos-anchor-placement="center-bottom"
      >
        <img
          src={item.imgSrc}
          alt={item.tooltip}
          className="w-8 h-8 object-contain "
        />
      </div>
    ));

  return (
    <div className="px-6 space-y-6 uppercase tracking-wider lg:mb-20 skills">
      <div>
        <h3 className="text-xs font-semibold mb-2 tracking-widest">
          LANGUAGES AND TOOLS
        </h3>
        <div className="flex gap-4 flex-wrap">{renderIcons(languagesAndTools)}</div>
      </div>

      <div>
        <h3 className="text-xs font-semibold mb-2 tracking-widest">
          LIBRARIES AND FRAMEWORKS
        </h3>
        <div className="flex gap-4 flex-wrap">
          {renderIcons(librariesAndFrameworks)}
        </div>
      </div>

      <div className="flex gap-10 ">
        <div className="db">
          <h3 className="text-xs font-semibold mb-2 tracking-widest">
            DATABASES
          </h3>
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
