import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import Experience from '../components/sections/Experience';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import GenericSection from '../components/sections/AboutMe';
import Projects from '../components/sections/Projects';

//<FeaturesTiles />
//<Testimonial topDivider />
// <Cta split />

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <GenericSection />
      <Experience invertMobile topDivider imageFill className="illustration-section-02" />
      <Projects invertMobile topDivider imageFill className="illustration-section-02" />
    </>
  );
}

export default Home;
