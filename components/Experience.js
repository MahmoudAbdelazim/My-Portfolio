import { useEffect, useState } from "react";
import Work from "./Work";

const Experience = () => {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    let exp = [
      {
        companyName: "IBM",
        companyLink: "https://www.ibm.com",
        title: "Application Developer Intern",
        dateFrom: "Jun 2022",
        dateTo: "Dec 2022",
        duration: "5 Months",
        responsibilities: [
          "Worked as an IBM BPM Application Developer in a governmental project for the administrative prosecution in Egypt.",
          "Worked with BPM Cloud Pak, JavaScript and IBM DB2.",
          "Worked as a back-end developer using Node.js and Express.js during IBM summer training for an artificial intelligent city project with the name of IBM Intelligent City.",
          "Engaged in daily scrum meetings to assess my work and get feedback from my leads.",
        ],
      },
      {
        companyName: "Microsoft",
        companyLink: "https://www.microsoft.com",
        title: "Software Engineer Intern",
        dateFrom: "Jul 2021",
        dateTo: "Sep 2021",
        duration: "2 Months",
        responsibilities: [
          "Worked on a document-level domain classification model to be used to add the domain as a feature for the machine translation model.",
          "Created a web application exposing the model using Flask.",
          "Worked with Python, PyTorch, SKLearn and Transformers pre-trained models (BERT and XLNet)."
        ]
      },
    ];
    setExperience(exp);
  }, []);

  return (
    <div className="experience" id="experience">
      <h2 className="section-head">Where I've Worked</h2>
      {experience.map((exp) => {
        return <Work exp={exp} />;
      })}
    </div>
  );
};

export default Experience;
