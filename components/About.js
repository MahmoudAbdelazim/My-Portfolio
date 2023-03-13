const About = () => {
  return (
    <div className="about js-reveal" id="about">
      <div className="about-left">
        <h2 className="section-head">About Me</h2>
        <p className="about-text" style={{ whiteSpace: "pre-line" }}>
          Hi! My name is Mahmoud Abdelazim, I'm a junior software engineer and a
          Bachelor's degree holder in Computer Science from Cairo University in
          Egypt with a grade of Excellent with honors.
          <br /> <br />
          I was an Intern at IBM Egypt for 5 months during the end of 2022 and
          was also an Intern at Microsoft Egypt for 2 months in 2021.
          <br /> <br />
        </p>
        These are a few technologies that I've been working with recently:
        <ul className="technologies">
          <li className="technology">Java</li>
          <li className="technology">JavaScript</li>
          <li className="technology">C++</li>
          <li className="technology">Python</li>
          <li className="technology">Spring Framework</li>
          <li className="technology">React.js</li>
          <li className="technology">MySQL</li>
        </ul>
      </div>
      <img className="my-image" src="/images/me.jpeg" />
    </div>
  );
};

export default About;
