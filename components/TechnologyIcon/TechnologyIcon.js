import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TechologyIcon = ({ children, label }) => {
  return (
    <div className="technology-icon">
      <div>{children}</div>
      <p>{label}</p>
    </div>
  );
};

export default TechologyIcon;
