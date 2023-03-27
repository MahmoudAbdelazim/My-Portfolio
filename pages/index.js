import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Experience from "../components/Experience/Experience";
import FeaturedProjects from "../components/FeaturedProjects/FeaturedProjects";
import Landing from "../components/Landing/Landing";
import Nav from "../components/Nav/Nav";

const IndexPage = () => {
  return (
    <>
      <Nav />
      <Landing />
      <About />
      <hr className="section-line" />
      <Experience />
      <hr className="section-line" />
      <FeaturedProjects />
      <hr className="section-line" />
      <Contact />
      <div className="footer">&copy; Built By Mahmoud Abdelazim</div>
    </>
  );
};

export default IndexPage;
