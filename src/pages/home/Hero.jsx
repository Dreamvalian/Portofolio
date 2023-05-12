import $ from "jquery";
import React from "react";
// import ImageContent1 from "../../assets/image-content1.png";
import MyImage from "../../assets/image1.jpeg";

window.jQuery = $;

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="left-hero" id="left-hero">
        <div className="cover-hero" id="cover-hero">
          <img className="left-hero-cover" src={MyImage} alt="Cover 1" />
          <img className="left-hero-cover-2" src={MyImage} alt=" Cover 2" />
        </div>
        <h2>Greetings ! I'm Hanif</h2>
        <p>
          I'm a student of Information System Bachelor Degree Interested in
          <b> UI/UX & Front-End Development. </b>
        </p>
        <p>
          — Check out my latest work and explore my skills and experience in
          this sleek new layout. See my projects, learn about my process, and
          get a sense of my style. Enjoy !
        </p>
        <p>
          Check out <a href="/#">about me</a> or see my <a href="/#">resume</a>{" "}
          here.
        </p>
      </div>
      <div className="right-hero" id="right-hero"></div>
    </section>
  );
};

export default Hero;
