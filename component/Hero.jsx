import React from "react";
import "./Hero.css";
import { TypeAnimation } from "react-type-animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const Hero = () => {
  const name = " Phakhawat";
  const links = [
    {
      href: "mailto: phakhawat.ck@gmail.com",
      icon: faEnvelope,
      tooltip: "E-mail",
    },
    { href: "https://github.com/phakhawat-ck", icon: faGithub, tooltip: "GitHub" },
  ];
  return (
    <div>
      {/* <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"> */}
      <div className="font-light  flex justify-center pt-50 lg:py-30 flex-col items-center">
        <div className="text-c w-70 lg:w-2xl block p-5">
          <h1 className="text-4xl lg:text-5xl  bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text leading-tight text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
            Hello!,I'm
          </h1>
          <div className="flex mb-5">
            <span className="text font-light  lg:text-5xl h-30">
            <TypeAnimation
                sequence={[
                  name,
                  2000,
                 
                ]}
                wrapper="span"
                speed={5}
                repeat={Infinity}
                className="font-light text-4xl lg:text-6xl"
              />
              <br />
              <TypeAnimation
                sequence={[
                  "",
                  2000,
                  " A pragmatic Frontend Developer.",
                  2000,
                  "Web Developer.",
                  2000,
                ]}
                wrapper="span"
                speed={5}
                repeat={Infinity}
                className="font-light text-2xl "
              />
            </span>
          </div>
          <p className="text-lg lg:text-2xl ">
            I am a fourth-year <br />
            <span className="gradient-text"> Computer Science Student </span>
            <p className="text-sm">Live in Bangkok, Thailand</p>
          </p>
          <div className="link_icon mt-4 flex mx-6 ">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="tooltip tooltip-bottom "
                data-tip={link.tooltip}
              >
                <FontAwesomeIcon icon={link.icon} size="xl" className="icon" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Hero;
