import React from "react";
import MyImage from "../../assets/image1.jpeg";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="left-hero" id="left-hero">
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
      <div className="page-break" id="page-break"></div>
      <div className="cover-hero" id="cover-hero">
        <img className="left-hero-cover" src={MyImage} alt="left hero cover" />
        <img
          className="left-hero-cover-2"
          src={MyImage}
          alt="left hero cover"
        />
      </div>
      {/* <div className="right-hero" id="right-hero">
        <h2>Header 2</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
          possimus magni quia culpa, necessitatibus quod voluptas et assumenda
          impedit odit quisquam, eum labore ! Minus nostrum corporis autem at !
          Sapiente, ab.
        </p>
      </div> */}
    </section>
  );
};

export default Hero;
