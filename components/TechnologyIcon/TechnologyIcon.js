import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const TechologyIcon = ({ children, label, animationDuration }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  const boxVariant = {
    visible: { opacity: 1, marginTop: 0, transition: { duration: animationDuration } },
    hidden: { opacity: 0, marginTop: "150px" },
  };
  return (
    <motion.div
      className="technology-icon"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <div>{children}</div>
      <p>{label}</p>
    </motion.div>
  );
};

export default TechologyIcon;
