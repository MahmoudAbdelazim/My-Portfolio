import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Contact = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  const boxVariant = {
    visible: { opacity: 1, marginTop: "150px", transition: { duration: 1 } },
    hidden: { opacity: 0.5, marginTop: "250px" },
  };
  return (
    <motion.div
      className="contact"
      id="contact"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <h2 className="section-head">Get In Touch</h2>
      <p>
        I'm always open for new opportunities, whether you're hiring, you have a
        question or you just want to say hi, my inbox and my other communication
        channels are always open.
      </p>
      <div className="social">
        <a href="mailto:mahmoud2011989@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} className="social-logo" />
        </a>
        <a href="https://www.linkedin.com/in/mahmoudabdelazim/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} className="social-logo" />
        </a>
        <a href="https://github.com/MahmoudAbdelazim" target="_blank">
          <FontAwesomeIcon icon={faGithub} className="social-logo" />
        </a>
        <a href="https://twitter.com/Abdel_Aziim" target="_blank">
          <FontAwesomeIcon icon={faTwitter} className="social-logo" />
        </a>
        <a href="https://facebook.com/ma7moudabdelazim" target="_blank">
          <FontAwesomeIcon icon={faFacebook} className="social-logo" />
        </a>
      </div>
    </motion.div>
  );
};

export default Contact;
