import React, { useEffect } from 'react';
import Hero from "../components/Hero";
import LogoMarquee from "../components/LogoMarquee";
import VideoSection from "../components/VideoSection";
import About from "../components/About";
import Services from "../components/Services";
import Industries from "../components/Industries";
import FAQ from "../components/FAQ";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      {/* <LogoMarquee />
      <VideoSection /> */}
      <About />
      <Services />
      <Industries />
      <FAQ />
    </>
  );
};

export default Home;
