import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Project = ({ project }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  const boxVariant = {
    visible: { opacity: 1, marginTop: 0, transition: { duration: 1 } },
    hidden: { opacity: 0.5, marginTop: "100px" },
  };
  return (
    <motion.a href={project.html_url} className="project-link" target="_blank">
      <motion.div
        className="project"
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
        <h3 className="project-name">{project.name}</h3>
        <p className="project-description">{project.description}</p>
        {project.topics?.map((topic, idx) => {
          return (
            <li key={idx} className="project-topic">
              {topic}
            </li>
          );
        })}
        <p className="language-text">
          Main Language: <span className="language">{project.language}</span>
        </p>
        <p className="last-updated">
          Last Updated:{" "}
          <span className="last-updated-date">
            {new Date(project.pushed_at).toLocaleDateString()}
          </span>
        </p>
      </motion.div>
    </motion.a>
  );
};

export default Project;
