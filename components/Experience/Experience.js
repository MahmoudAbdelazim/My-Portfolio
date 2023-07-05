import { useEffect, useState } from "react";
import Work from "../Work/Work";

const Experience = () => {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    let exp = [
      {
        companyName: "Egyptian Military",
        companyLink: null,
        title: "Mandatory Military Service",
        dateFrom: "Jan 2023",
        dateTo: "Feb 2024",
        duration: "Present",
        responsibilities: [
          "Currently doing my mandatory one-year Egyptian military service week-on, week-off, which will end by February 2024.",
          "Building a complete system from scratch for handling security gates check-in and check-out for the military judiciary authority by extracting visitors' info from their scanned national IDs, using Tesseract engine, Flask, Node.JS and React.",
          "Contributed to the development and maintenance of a faxes system for the military judiciary authority using Django and vanilla JavaScript that allows for an automated handling of faxes between different departments in the authority.",
        ],
      },
      {
        companyName: "IBM",
        companyLink: "https://www.ibm.com",
        title: "Application Developer Intern",
        dateFrom: "Jun 2022",
        dateTo: "Dec 2022",
        duration: "5 Months",
        responsibilities: [
          "Worked in the IBM Business Process Management and Automation Team (BPM), which is a part of IBM Consulting that develops business automation applications serving various entities all over the world.",
          "Worked as a BPM Developer in a governmental project for the administrative prosecution in Egypt.",
          "Worked with BPM Cloud Pak, JavaScript, and IBM DB2.",
          "worked as a back-end developer during IBM summer training using Node.js for an intelligent city project with the name of IBM Intelligent City.",
          "Engaged in daily meetings to assess my work and get feedback from my leads."
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
          "Worked in the Data Extraction from Documents team at Microsoft Advanced Technology Lab in Egypt.",
          "Worked on a text document-level domain classification model, a model that classifies text documents to their appropriate domains to add the domain as a feature for the machine translation model.",
          "First created the model from scratch using PyTorch and then fine-tuned pre-trained models (Google’s BERT and XLNet).",
          "Developed a web application exposing the model using Flask for evaluating the model.",
          "Did a final presentation for what I have accomplished and learned during my internship."
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
