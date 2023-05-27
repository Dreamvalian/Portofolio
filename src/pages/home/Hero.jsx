import React, { useEffect, useState } from "react";
import * as Icon from "react-feather";
import { Link } from "react-router-dom";
import MyImage from "../../assets/image1.jpeg";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email); // Perform your desired action with the email value, such as sending it to a server or performing client-side validation.
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <section className="hero" id="hero">
      <div className="left-hero" id="left-hero">
        <div className="cover-hero" id="cover-hero">
          <img className="left-hero-cover" src={MyImage} alt="Cover 1" />
          <img className="left-hero-cover-2" src={MyImage} alt="Cover 2" />
        </div>
        <h2>Greetings! I'm Hanif</h2>
        <p>
          I'm a student of Information System Bachelor's Degree interested in
          <strong> UI/UX & Front-End Development.</strong>
          <br />
          <br />
          Check out my latest work and explore my skills and experience in this
          sleek new layout. See my projects, learn about my process, and get a
          sense of my style. Enjoy!
        </p>

        <p>
          Check out <Link to="#">about me</Link> or see my{" "}
          <Link to="#">resume</Link> here.
        </p>
      </div>
      <div className={`right-hero ${isOpen ? "open" : ""}`} id="right-hero">
        <button className="toggle-button" onClick={toggleOpen}>
          Toggle
        </button>
        <div className="content">
          {/* Content to display when open */}
          {isOpen && (
            <div className="right-hero-content">
              <h3>Here's my contact</h3>
              <p className="right-hero-content">
                <span>
                  <Icon.Instagram strokeWidth={1} />
                  @hanifnnugraha_
                </span>
                <span>
                  <Icon.Linkedin strokeWidth={1} />
                  hanifnugraha
                </span>
                <span>
                  <Icon.Smartphone strokeWidth={1} /> +62 823 1667 6968
                </span>
                <span>
                  <Icon.Mail strokeWidth={1} />
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
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
