import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import FeaturedProjects from "../components/FeaturedProjects";
import Landing from "../components/Landing";
import Nav from "../components/Nav";
import Section from "../components/Section";

const IndexPage = () => {
  return (
    <>
      <Nav />
      <Landing />
      <Section><About /></Section>
      <hr className="section-line" />
      <Section><Experience /></Section>
      <hr className="section-line" />
      <Section><FeaturedProjects /></Section>
      <hr className="section-line" />
      <Section><Contact /></Section>
      <div className="footer">&copy; Built By Mahmoud Abdelazim</div>
    </>
  );
};

export default IndexPage;
