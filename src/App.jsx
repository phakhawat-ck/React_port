import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Hero } from "../component/Hero";
import { Scrolling } from "../component/Scrolling";
import { About } from "../component/About";
import { Project } from "../component/Project";
import FollowCursor from "../component/FollowCursor";
function App() {
  

  return (
    <>
    <FollowCursor/>
      <div className="fixed top-0 z-[-2] h-screen w-screen overflow-x-hidden  bg-neutral-950 bg-[radial-gradient(ellipse_80%_90%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] ">
        <div className="">
          <Hero />
          <Scrolling />
          <div className="px-10 lg:px-20 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">
              <About /> 
              <Project />      
              
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
