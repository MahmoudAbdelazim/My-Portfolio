const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="nav-toggler">
        <button
          type="button"
          class="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#experience">
              Experience
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#projects">
              Featured Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/projects">
              All Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
