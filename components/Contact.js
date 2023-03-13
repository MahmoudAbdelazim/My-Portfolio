const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h2 className="section-head">Get In Touch</h2>
      <p>I'm currently open for new opportunities, whether you're hiring, you have a question or you just want to say hi, my inbox and my other communication channels are always open.</p>
      <ul className="social">
        <li>
          <a href="mailto:mahmoud2011989@gmail.com">
            <i class="fa fa-envelope social-logo" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/mahmoudabdelazim/" target="_blank">
            <i class="fa fa-linkedin-square social-logo" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/MahmoudAbdelazim" target="_blank">
            <i class="fa fa-github-square social-logo" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/Abdel_Aziim" target="_blank">
            <i class="fa fa-twitter-square social-logo" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/Ma7moudabdelazim/" target="_blank">
            <i
              class="fa fa-facebook-official social-logo"
              aria-hidden="true"
            ></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
