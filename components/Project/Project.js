const Project = ({ project }) => {
  return (
    <a href={project.html_url} className="project-link" target="_blank">
      <div className="project">
        <h3 className="project-name">{project.name}</h3>
        <p className="project-description">{project.description}</p>
        {project.topics?.map((topic, idx) => {
          return <li key={idx} className="project-topic">{topic}</li>;
        })}
        <p className="language-text">
          Main Language: <span className="language">{project.language}</span>
        </p>
        <p className="last-updated">
          Last Updated:{" "}
          <span className="last-updated-date">
            {new Date(project.pushed_at).toLocaleDateString()}
          </span>
        </p>
      </div>
    </a>
  );
};

export default Project;
