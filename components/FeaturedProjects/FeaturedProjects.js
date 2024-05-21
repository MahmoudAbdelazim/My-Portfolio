import { useEffect, useState } from "react";
import FeaturedProject from "../FeaturedProject/FeaturedProject";

const FeaturedProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    let proj = [
      {
        name: "Level Coder",
        desc: "A full-stack website that serves as a comprehensive collection of problem-solving learning resources in both Arabic and English. The website features problems to practice every topic on popular coding platforms such as CodeForces, LeetCode, and HackerRank. The platform aims to help users enhance their problem-solving skills and prepare for technical interviews. The website offers a user-friendly interface that allows users to easily filter problems based on their difficulty level, topic, platform, and language.",
        githubLink: "https://github.com/MahmoudAbdelazim/Level-Coder-Frontend",
        website: "https://level-coder.onrender.com",
        imageLink: "/images/projects/level-coder.png",
        technologies: [
          "JavaScript, Node.js, Express.js, PostgreSQL, Sequelize, React.js, Next.js",
        ],
      },
      {
        name: "El Mazraa",
        desc: " An online marketplace designed specifically for farmers and agricultural enthusiasts, providing a platform for buying, selling, and marketing agricultural products, machines, crops, and other related goods in an OLX-style format",
        githubLink: "https://github.com/MahmoudAbdelazim/Mazraa-Backend",
        imageLink: "/images/projects/mazraa.png",
        technologies: [
          "JavaScript, Node.js, Express.js, PostgreSQL, Sequelize, React.js, Next.js",
        ],
      },
      {
        name: "Party Up",
        desc: "A platform that offers a better gaming experience by testing users personality features and matching players based on their personalities using unsupervised learning techniques (K-Means Clustering and K-Nearest-Neighbors), this was the graduation project for my Bachelor's Degree at Cairo University",
        githubLink: "https://github.com/MahmoudAbdelazim/Party-Up/",
        imageLink: "/images/projects/party-up.png",
        technologies: ["Java, Spring, Python, SKLearn, Angular, MySQL"],
      },
      {
        name: "Blog Website",
        desc: "A simple blog website built in Spring Boot and React that allows users to write posts, like posts, comment on posts and search through posts using tags.",
        githubLink: "https://github.com/MahmoudAbdelazim/Blog-Website/",
        imageLink: "/images/projects/blog-website.png",
        technologies: [
          "Java, Spring, JavaScript, React.js, Next.js, Material UI",
        ],
      },
    ];
    setProjects(proj);
  }, []);

  return (
    <div className="featured-projects" id="projects">
      <h2 className="section-head">Featued Projects</h2>
      <p className="section-desc">
        These are the most interesting side projects I've worked on.
        <br /> you can find their details and their code using the GitHub link
        below each one
      </p>
      {projects.map((project, idx) => {
        if (idx % 2 == 0)
          return <FeaturedProject key={idx} project={project} left={false} />;
        else return <FeaturedProject key={idx} project={project} left={true} />;
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
