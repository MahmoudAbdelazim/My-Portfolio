
const FeaturedProjectImage = ({project}) => {
  return (
    <div className="featured-project-image">
      <img src={project.imageLink} />
      <hr className="line" />
    </div>
  );
};

const FeaturedProjectInfo = ({project, left}) => {
  return (
    <div className={left ? "featured-project-info left" : "featured-project-info right"}>
      <h3 className="project-name">{project.name}</h3>
      <p className="project-desc">{project.desc}</p>
      <ul className="project-technologies">
        {project.technologies.map((technology) => {
          return <li className="project-technology green">{technology}</li>;
        })}
      </ul>
      <p className="project-github-link">
        <a href={project.githubLink}>
          <img className="github-logo" src="/images/github.png" /> GitHub
        </a>
      </p>
    </div>
  );
};

const FeaturedProject = ({ project, left }) => {
  return (
    <div className="featured-project-container">
      {left ? (
        <div>
          <FeaturedProjectInfo project={project} left={left}/>
          <FeaturedProjectImage project={project} />
        </div>
      ) : (
        <div>
          <FeaturedProjectImage project={project} left={left}/>
          <FeaturedProjectInfo project={project} />
        </div>
      )}
    </div>
  );
};

export default FeaturedProject;
