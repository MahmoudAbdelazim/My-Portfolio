import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TechologyIcon = ({icon, label}) => {
  return (
    <div className="technology-icon">
      <FontAwesomeIcon icon={icon} className="technology-logo"/>
      <p>{label}</p>
    </div>
  )
}

export default TechologyIcon;