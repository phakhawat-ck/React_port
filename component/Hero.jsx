import "./Hero.css";
import { motion } from "framer-motion";
import { BtnContact } from "./common/BtnContact";
import { TypeAnimation } from "react-type-animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faEarthAsia } from "@fortawesome/free-solid-svg-icons";

export const Hero = () => {
  const name = " Phakhawat.";
  const links = [
    {
      href: "mailto: phakhawat.ck@gmail.com",
      icon: faEnvelope,
      tooltip: "E-mail",
    },
    {
      href: "https://github.com/phakhawat-ck",
      icon: faGithub,
      tooltip: "GitHub",
    },
    
  ];
  return (
    <div>
      <div className="font-light  flex justify-center pt-50 lg:py-30 flex-col items-center text-white">
        <div className="text-c w-70 lg:w-2xl block p-5">
          <motion.h1
            className="text-4xl lg:text-5xl "
            initial={{ opacity: 0, x: -100 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }} 
          >
            Hello!,I'm 
          </motion.h1>
          <div className="flex mb-5">
            <span className="text font-light  lg:text-5xl h-30">
              <TypeAnimation
                sequence={[name,2000,]}
                wrapper="span"
                speed={1}
                repeat={Infinity}
                className="font-light text-4xl lg:text-6xl "
              />
              <br />
              <TypeAnimation
                sequence={[
                  "",
                  2000,
                  " A pragmatic Frontend Developer.",
                  2000,
                  "Junior Frontend Developer.",
                  2000,
                ]}
                wrapper="span"
                speed={5}
                repeat={Infinity}
                className="font-light text-2xl "
              />
            </span>
          </div>

          <motion.p
            className="text-lg lg:text-2xl "
            initial={{ opacity: 0, x: -120 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5 }} 
          >
            I am a fourth-year <br />
            <motion.span
              className="gradient-text"
              initial={{ opacity: 0, x: 180 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.7 }} 
            >
              Computer Science student
            </motion.span>
            <motion.p
              className="text-sm text-white"
              initial={{ opacity: 0, x: 120 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 1.3 }} 
            >
              <FontAwesomeIcon icon={faEarthAsia} /> Live in Bangkok, Thailand
            </motion.p>
          </motion.p>
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
            <BtnContact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
