import {
  faJava,
  faJs,
  faPython,
  faReact,
  faNode
} from "@fortawesome/free-brands-svg-icons";
import { faC, faCode, faDatabase } from "@fortawesome/free-solid-svg-icons";
import TechologyIcon from "../TechnologyIcon/TechnologyIcon";

const About = () => {
  return (
    <div className="about js-reveal" id="about">
      <h2 className="section-head">About Me</h2>
      <div className="flex-container">
        <div className="my-image-container"><img className="my-image" src="/images/Me 3.png" /></div>
        <div className="about-right">
          <p className="about-text" style={{ whiteSpace: "pre-line" }}>
            Hi! My name is Mahmoud Abdelazim, I'm a junior software engineer and
            a Bachelor's degree holder in Computer Science from Cairo University
            in Egypt with a grade of Excellent with honors.
            <br /> <br />
            I was an Intern at IBM Egypt for 5 months during the end of 2022 and
            was also an Intern at Microsoft Egypt for 2 months in 2021.
            <br /> <br />
          </p>
          These are a few technologies that I've been working with recently:
        </div>
      </div>
      <div className="technologies-list">
        <TechologyIcon icon={faJava} label={"Java"} />
        <TechologyIcon icon={faJs} label={"JavaScript"} />
        <TechologyIcon icon={faC} label={"C++"} />
        <TechologyIcon icon={faCode} label={"Spring Framework"} />
        <TechologyIcon icon={faReact} label={"React.js"} />
        <TechologyIcon icon={faNode} label={"Node.js"} />
        <TechologyIcon icon={faDatabase} label={"SQL"} />
      </div>
    </div>
  );
};

export default About;
