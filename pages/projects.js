import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Project from "../components/Project/Project";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Nav from "../components/Nav/Nav";
import Contact from "../components/Contact/Contact";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const USERNAME = "MahmoudAbdelazim";
    fetch(`https://api.github.com/users/${USERNAME}/repos`)
      .then((response) => response.json())
      .then((data) => {
        if (data[0]) {
          data.sort((a, b) => (a.created_at > b.created_at ? -1 : 1));
          setProjects(data);
          console.log(data);
          setIsLoading(false);
        }
      });
  }, []);

  return (
    <>
      <Nav />
      <div className="projects">
        <div className="go-back-container">
          <button
            className="go-back-button btn btn-primary"
            onClick={() => history.back()}
          >
            Back
          </button>
        </div>
        <h2 className="section-head">
          My GitHub Projects <FontAwesomeIcon icon={faGithub} size="1x"/>
        </h2>
        <p className="section-desc">
          This is a list of all my public projects on GitHub, I'll be glad to
          hear any advice or recommendation for any one of them!
        </p>
        <div>
          <img
            src="/images/loading.gif"
            className="loading-gif"
            style={{ display: isLoading ? "inline-block" : "none" }}
          />
          {projects.map((project) => {
            return <Project project={project} />;
          })}
        </div>
      </div>
      <hr className="section-line" />
      <Contact />
      <div className="footer">&copy; Built By Mahmoud Abdelazim</div>
    </>
  );
};

export default ProjectsPage;
