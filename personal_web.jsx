import React from "react";
import Navbar from "./components/navbar";
import ProjectScroll from "./components/projectScroll";
import Footer from "./components/footer";

const PersonalWeb = () => {
    const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.top = `${e.pageY}px`;
        cursorRef.current.style.left = `${e.pageX}px`;
      }
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div id="body">
      <div id="cursor" ref={cursorRef}></div>

      <div id="main-screen">
        <Navbar />

        <div id="intro">
          <h1 className="greeting-home">Hi, I'm</h1>
          <h1 className="name-home">Gabriella Codrington</h1>
          <h2 className="mini-bio-home">
            Software Engineer. Aspiring UX Designer and Creative Technologist.
          </h2>
        </div>

        <ProjectScroll />

        <div id="project-home">
          <h2>Featured Projects</h2>
          {/* Project content goes here */}
        </div>

        <ProjectScroll />

        <div id="menu-circles">
          <a href="404.html" className="dot" style={{ backgroundColor: "#e66b13" }}>
            More About Me
          </a>
          <a href="404.html" className="dot" style={{ backgroundColor: "#f5f5f5" }}>
            See My Projects
          </a>
          <a href="404.html" className="dot" style={{ backgroundColor: "#b123d5" }}>
            Archive
          </a>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default PersonalWeb;
