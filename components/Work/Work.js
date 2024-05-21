const Responsibility = ({ resp }) => {
  return (
    <li>{resp}</li>
  )
};

const Work = ({ exp }) => {
  return (
    <div className="work">
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
          {exp.dateFrom} - {exp.dateTo} {exp.duration ? `(${exp.duration})` : ""}
        </p>
        <ul className="responsibilities">
          {exp.responsibilities.map((responsibility, idx) => {
            return (
              <Responsibility key={idx} resp={responsibility} />
            )
          })}
        </ul>
      </div>
    </div>
  );
};

export default Work;
