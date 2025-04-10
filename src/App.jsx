import "./App.css";
import { Hero } from "../component/Hero";
import { Scrolling } from "../component/Scrolling";
import { About } from "../component/About";
import { Btn_totop } from "../component/Btn_totop";
import { Project } from "../component/Project";
import { Footers } from "../component/Footers";
import FollowCursor from "../component/FollowCursor";
function App() {
  return (
    <>
      <FollowCursor />

      {/* BG */}
      <div className="fixed inset-0 -z-10 bg-neutral-950 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />

      {/* main */}
      <div className="relative z-10 min-h-screen overflow-x-hidden">
        <Btn_totop />
        <Hero />
        <Scrolling />
        <div className="px-10 lg:px-30 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">
          <About />
          <Project />
        </div>
        <footer>
          <Footers />
        </footer>
      </div>
    </>
  );
}

export default App;
