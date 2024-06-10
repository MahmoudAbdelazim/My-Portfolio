import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const FeaturedProjectImage = ({ project }) => {
  return (
    <div className="featured-project-image">
      <a
        className="featured-project-image-link"
        href={project.website ? project.website : project.githubLink}
        target="_blank"
      >
        <img src={project.imageLink} />
        <hr className="line" />
      </a>
    </div>
  );
};

const FeaturedProjectInfo = ({ project, left }) => {
  return (
    <div
      className={
        left ? "featured-project-info left" : "featured-project-info right"
      }
    >
      <h3 className="project-name">{project.name}</h3>
      <p className="project-desc">{project.desc}</p>
      <ul className="project-technologies">
        {project.technologies.map((technology, idx) => {
          return (
            <li key={idx} className="project-technology green">
              {technology}
            </li>
          );
        })}
      </ul>
      <p className="project-github-link">
        {project.githubLink && (
          <a href={project.githubLink}>
            <img className="github-logo" src="/images/github.png" /> GitHub
          </a>
        )}
        {project.website && (
          <a className="project-website" href={project.website}>
            Visit Website
          </a>
        )}
      </p>
    </div>
  );
};

const FeaturedProject = ({ project, left }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } 
  }, [control, inView]);

  const boxVariant = {
    visible: { opacity: 1, marginTop: 0, transition: { duration: 1.5 } },
    hidden: { opacity: 1, marginTop: "150px" },
  };
  return (
    <motion.div
      className="featured-project-container"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      {left ? (
        <div>
          <FeaturedProjectInfo project={project} left={left} />
          <FeaturedProjectImage project={project} />
        </div>
      ) : (
        <div>
          <FeaturedProjectImage project={project} left={left} />
          <FeaturedProjectInfo project={project} />
        </div>
      )}
    </motion.div>
  );
};

export default FeaturedProject;
