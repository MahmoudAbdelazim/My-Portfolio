import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Project from "../components/Project/Project";
import { faGitHub } from "@fortawesome/free-brands-svg-icons";
import Nav from "../components/Nav/Nav";
import Contact from "../components/Contact/Contact";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const USERNAME = "MahmoudAbdelazim";
    fetch(`https://api.github.com/users/${USERNAME}/repos`)
      .then((response) => response.json())
      .then((data) => {
        data.sort((a, b) => (a.created_at > b.created_at ? -1 : 1));
        setProjects(data);
        console.log(data);
      });
  }, []);

  return (
    <>
      <Nav />
      <div className="projects">
        <h2 className="section-head">
          My GitHub Projects <FontAwesomeIcon icon={faGitHub} />
        </h2>
        <p className="section-desc">
          This is a list of all my public projects on GitHub, I'll be glad to
          hear any advice or recommendation for any one of them!
        </p>
        {projects.map((project) => {
          return <Project project={project} />;
        })}
      </div>
      <hr className="section-line" />
      <Contact />
      <div className="footer">&copy; Built By Mahmoud Abdelazim</div>
    </>
  );
};

export default ProjectsPage;
