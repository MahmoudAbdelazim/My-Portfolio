import { useEffect, useState } from "react";
import FeaturedProject from "../FeaturedProject/FeaturedProject";

const FeaturedProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    let proj = [
      {
        name: "Party Up",
        desc: "A platform that offers a better gaming experience by testing users personality features and matching players based on their personalities using unsupervised learning techniques (K-Means Clustering and K-Nearest-Neighbors), this was the graduation project for my Bachelor's Degree from Cairo University",
        githubLink: "https://github.com/MahmoudAbdelazim/Party-Up/",
        imageLink: "/images/projects/party-up.png",
        technologies: ["Java, Spring, Python, SKLearn, Angular, MySQL"],
      },
      {
        name: "Text Editor",
        desc: "A Text Editor project built as a GUI application in Java Swing Framework, it allows for editing files, saving files, searching in files whether using simple text or with Regular Expressions. It's one of JetBrains Academy's Challenging Level projects.",
        githubLink: "https://github.com/MahmoudAbdelazim/Text-Editor/",
        imageLink: "/images/projects/text-editor.png",
        technologies: ["Java, Swing Framework, Regex"],
      },
      {
        name: "Star Match Game",
        desc: "A star match math game for kids built as a practice for the React getting started course by JSComplete on Pluralsight.",
        githubLink: "https://github.com/MahmoudAbdelazim/Star-Match-Game/",
        imageLink: "/images/projects/star-match-game.png",
        technologies: ["JavaScript, React"],
      },
    ];
    setProjects(proj);
  }, []);

  return (
    <div className="featured-projects" id="projects">
      <h2 className="section-head">Featued Projects</h2>
      <p className="section-desc">
        These are the most interesting projects I've worked on.
        <br /> you can find their details and their code using the GitHub link
        below each one
      </p>
      {projects.map((project, idx) => {
        if (idx % 2 == 0)
          return <FeaturedProject project={project} left={false} />;
        else return <FeaturedProject project={project} left={true} />;
      })}
      <div className="projects-button-container">
        <a href="/projects" className="btn btn-primary projects-button">
          View All Projects
        </a>
      </div>
    </div>
  );
};

export default FeaturedProjects;
