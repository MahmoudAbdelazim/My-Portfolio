import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Experience from "../components/Experience/Experience";
import FeaturedProjects from "../components/FeaturedProjects/FeaturedProjects";
import Landing from "../components/Landing/Landing";
import Nav from "../components/Nav/Nav";
import Section from "../components/Section/Section";

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
