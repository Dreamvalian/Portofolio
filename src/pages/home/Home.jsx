import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import About from "./About";
import Hero from "./Hero";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <About />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
