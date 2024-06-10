import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Responsibility = ({ resp }) => {
  return <li>{resp}</li>;
};

const Work = ({ exp }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  const boxVariant = {
    visible: { opacity: 1, marginTop: 0, transition: { duration: 1.5 } },
    hidden: { opacity: 0, marginTop: "50px" },
  };
  return (
    <motion.div
      className="work"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <div className="work-left">
        <h3>
          {exp.title}{" "}
          <span className="companyName">
            {" "}
            <a className="companyLink" href={exp.companyLink} target="_blank">
              @ {exp.companyName}
            </a>
          </span>
        </h3>
        <p className="date">
          {exp.dateFrom} - {exp.dateTo}{" "}
          {exp.duration ? `(${exp.duration})` : ""}
        </p>
        <ul className="responsibilities">
          {exp.responsibilities.map((responsibility, idx) => {
            return <Responsibility key={idx} resp={responsibility} />;
          })}
        </ul>
      </div>
    </motion.div>
  );
};

export default Work;
