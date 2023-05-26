import $ from "jquery";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../../assets/icon/home-06.svg";
import { ReactComponent as InstagramIcon } from "../../assets/icon/instagram.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/icon/linkedin-02.svg";
import { ReactComponent as MailIcon } from "../../assets/icon/mail-01.svg";
import MyImage from "../../assets/image1.jpeg";

window.jQuery = $;

const Hero = ({ setIsVisible }) => {
  const [isVisible, setIsVisibleState] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisibleState(true);
      setIsVisible(false);
    }, 500); // Adjust the delay as needed (in milliseconds)

    return () => clearTimeout(timer);
  }, [setIsVisible]);

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform your desired action with the email value, such as sending it to a server or performing client-side validation.
    console.log(email);
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <section className={`hero ${isVisible ? "visible" : "hidden"}`} id="hero">
      <div className="left-hero" id="left-hero">
        <div className="cover-hero" id="cover-hero">
          <img className="left-hero-cover" src={MyImage} alt="Cover 1" />
          <img className="left-hero-cover-2" src={MyImage} alt="Cover 2" />
        </div>
        <h2>Greetings! I'm Hanif</h2>
        <p>
          I'm a student of Information System Bachelor's Degree interested in
          <b> UI/UX & Front-End Development.</b>
        </p>
        <p>
          Check out my latest work and explore my skills and experience in this
          sleek new layout. See my projects, learn about my process, and get a
          sense of my style. Enjoy!
        </p>
        <p>
          Check out <Link to="#">about me</Link> or see my{" "}
          <<Link to="#">resume</Link> here.
        </p>
      </div>
      <div className="right-hero" id="right-hero">
        <h3>Here's my contact</h3>
        <p className="right-hero-content">
          <span>
            <InstagramIcon className="icon" viewBox="0 -8 32 48" />{" "}
            @hanifnnugraha_
          </span>
          <span>
            <LinkedinIcon className="icon" viewBox="0 -8 32 48" /> hanifnugraha
          </span>
          <span>
            <HomeIcon className="icon" viewBox="0 -8 32 48" /> +62 823 1667 6968
          </span>
          <span>
            <MailIcon className="icon" viewBox="0 -8 32 48" />{" "}
            hanifnugraha69@gmail.com
          </span>
          <form className="email-form" onSubmit={handleSubmit}>
            <input
              className="email-input"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleChange}
            />
            <button className="submit-button" type="submit">
              Submit
            </button>
          </form>
        </p>
      </div>
    </section>
  );
};

export default Hero;
