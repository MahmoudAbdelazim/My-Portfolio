import TechologyIcon from "../TechnologyIcon/TechnologyIcon";
import {
  TbBrandCSharp,
  TbBrandJavascript,
  TbBrandNodejs,
  TbSql,
} from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { SiDotnet, SiSpring, SiReact } from "react-icons/si";
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const About = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  const boxVariant = {
    visible: { opacity: 1, marginTop: 0, transition: {duration: 1}},
    hidden: { opacity: 0.5, marginTop: "120px" },
  };

  return (
    <motion.div
      className="about js-reveal"
      id="about"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <h2 className="section-head">About Me</h2>
      <div className="flex-container">
        <div className="my-image-container">
          <img className="my-image" src="/images/Me 3.png" />
        </div>
        <div className="about-right">
          <p className="about-text" style={{ whiteSpace: "pre-line" }}>
            Hi! My name is Mahmoud Abdelazim, I'm a software development
            engineer
            at{" "}
            <a
              className="companyLink"
              href={"https://www.sw.siemens.com/en-US/"}
              target="_blank"
            >
              Siemens Digital Industries Software
            </a>
            , and a Bachelor's degree holder in Computer Science from Cairo
            University in Egypt with a grade of Excellent with honors, with
            internship experience at{" "}
            <a
              className="companyLink"
              href={"https://www.microsoft.com/"}
              target="_blank"
            >
              Microsoft
            </a>{" "}
            and{" "}
            <a
              className="companyLink"
              href={"https://www.ibm.com/"}
              target="_blank"
            >
              IBM
            </a>
            .
            <br /> <br />
            I'm a web enthusiast skilled in full-stack development who has
            worked with many different technologies, and I'm always passionate
            to learn more and more!
            <br /> <br />
          </p>
          These are a few technologies that I've been working with recently:
        </div>
      </div>
      <div className="technologies-list">
        {/* <TechologyIcon label={"C#"}>
          <TbBrandCSharp />
        </TechologyIcon>
        <TechologyIcon label={"ASP.NET"}>
          <SiDotnet />
        </TechologyIcon> */}
        <TechologyIcon label={"JavaScript"} animationDuration={0.5}>
          <TbBrandJavascript />
        </TechologyIcon>
        <TechologyIcon label={"React.js"} animationDuration={0.8}>
          <SiReact />
        </TechologyIcon>
        <TechologyIcon label={"Node.js"} animationDuration={1.1}>
          <TbBrandNodejs />
        </TechologyIcon>
        <TechologyIcon label={"Java"} animationDuration={1.4}>
          <FaJava />
        </TechologyIcon>
        <TechologyIcon label={"Spring Boot"} animationDuration={1.7}>
          <SiSpring />
        </TechologyIcon>
        <TechologyIcon label={"SQL"} animationDuration={2}>
          <TbSql />
        </TechologyIcon>
      </div>
    </motion.div>
  );
};

export default About;
