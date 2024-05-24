import TechologyIcon from "../TechnologyIcon/TechnologyIcon";
import {
  TbBrandCSharp,
  TbBrandJavascript,
  TbBrandNodejs,
  TbSql,
} from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { SiDotnet, SiSpring, SiReact } from "react-icons/si";

const About = () => {
  return (
    <div className="about js-reveal" id="about">
      <h2 className="section-head">About Me</h2>
      <div className="flex-container">
        <div className="my-image-container">
          <img className="my-image" src="/images/Me 3.png" />
        </div>
        <div className="about-right">
          <p className="about-text" style={{ whiteSpace: "pre-line" }}>
            Hi! My name is Mahmoud Abdelazim, I'm a software development
            engineer at{" "}
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
        <TechologyIcon label={"C#"}>
          <TbBrandCSharp />
        </TechologyIcon>
        <TechologyIcon label={"ASP.NET"}>
          <SiDotnet />
        </TechologyIcon>
        <TechologyIcon label={"JavaScript"}>
          <TbBrandJavascript />
        </TechologyIcon>
        <TechologyIcon label={"React.js"}>
          <SiReact />
        </TechologyIcon>
        <TechologyIcon label={"Node.js"}>
          <TbBrandNodejs />
        </TechologyIcon>
        <TechologyIcon label={"Java"}>
          <FaJava />
        </TechologyIcon>
        <TechologyIcon label={"Spring Boot"}>
          <SiSpring />
        </TechologyIcon>
        <TechologyIcon label={"SQL"}>
          <TbSql />
        </TechologyIcon>
      </div>
    </div>
  );
};

export default About;
