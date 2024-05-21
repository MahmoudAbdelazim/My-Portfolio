import { useEffect, useState } from "react";
import Work from "../Work/Work";

const Experience = () => {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    let exp = [
      {
        companyName: "Siemens Digital Industries Software",
        companyLink: "https://www.sw.siemens.com/en-US/",
        title: "Software Development Engineer",
        dateFrom: "Jun 2024",
        dateTo: "Present",
        responsibilities: [
          "Working as a full-stack engineer for Brightly Software team at Siemens Digital Industries Software. ",
        ],
      },
      {
        companyName: "Wind Integrated Solutions",
        companyLink: "https://wind-is.com/",
        title: "Software Engineer",
        dateFrom: "Jan 2024",
        dateTo: "May 2024",
        duration: "5 Months",
        responsibilities: [
          "Developed a request-approval process cycle for El-Nahdi organization (Saudi Arabian client), including creating Oracle SQL database schema, building RESTful APIs using ORDS, front-end pages using Visual Builder Studio, and process management using Oracle Process Cloud Service Integration.",
          "Contributed in development of an auto-initiated process cycle that is automatically scheduled to start at a specific time of the day and automatically expires and terminates if no action was performed. ",
        ],
      },
      {
        companyName: "Military Judiciary Authority",
        companyLink: null,
        title: "Mandatory Military Service",
        dateFrom: "Jan 2023",
        dateTo: "Jan 2024",
        duration: "1 Year",
        responsibilities: [
          "Worked on three technical projects during my one-year mandatory military service at the military judiciary authority:",
          "Developed a web application from scratch for handling security gates check-in by extracting visitors' information from their scanned national IDs (OCR) and authorizing their check-ins. Used Node.js, React.js, Tesseract Engine, Flask and Sequelize.",
          "Contributed to development of a digital investigation system that allows case-tracking, questions-answers registering and automated report generation. Used Node.js, React.js and Sequelize.",
          "Contributed to development and maintenance of a web app for handling faxes distribution, and archiving and sending documents across different departments in the authority. Used Python, Django, JavaScript, and SQLite. "
        ],
      },
      {
        companyName: "IBM",
        companyLink: "https://www.ibm.com",
        title: "Software Developer Intern",
        dateFrom: "Jun 2022",
        dateTo: "Dec 2022",
        duration: "5 Months",
        responsibilities: [
          "Worked in the IBM Business Process Management and Automation Team (BPM), which is a part of IBM Consulting that develops business automation applications serving various entities all over the world.",
          "Worked as a BPM Developer in a governmental project for the administrative prosecution in Egypt.",
          "Worked with BPM Cloud Pak, JavaScript, and IBM DB2.",
          "worked as a back-end developer during IBM summer training using Node.js for an intelligent city project with the name of IBM Intelligent City.",
          "Engaged in daily meetings to assess my work and get feedback from my leads.",
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
          "Did a final presentation for what I have accomplished and learned during my internship.",
        ],
      },
    ];
    setExperience(exp);
  }, []);

  return (
    <div className="experience" id="experience">
      <h2 className="section-head">Where I've Worked</h2>
      {experience.map((exp, idx) => {
        return <Work key={idx} exp={exp} />;
      })}
    </div>
  );
};

export default Experience;
