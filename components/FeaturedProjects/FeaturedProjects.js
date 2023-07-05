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
        name: "Level Coder",
        desc: "a full-stack website that contains a collection of problem solving learning resources in Arabic and English, with problems to practice every topic on CodeForces, LeetCode and HackerRank.",
        githubLink: "https://github.com/MahmoudAbdelazim/Level-Coder-Frontend",
        imageLink: "/images/projects/level-coder.png",
        technologies: ["JavaScript, Node.js, Express.js, PostgreSQL, Sequelize, React.js, Next.js"],
      },
      {
        name: "Blog Website",
        desc: "A simple blog website built in Spring Boot and React that allows users to write posts, like posts, comment on posts and search through posts using tags.",
        githubLink: "https://github.com/MahmoudAbdelazim/Blog-Website/",
        imageLink: "/images/projects/blog-website.png",
        technologies: ["Java, Spring, JavaScript, React, Next, Material UI"],
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
