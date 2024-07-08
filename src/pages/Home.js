import React, { useEffect } from "react";
import { Link } from "react-router-dom";


import ThreePillars from "../components/ThreePillars";
import FeaturedIn from "../components/FeaturedIn";
import Section from "../components/Section";
import Slider from "../components/Slider";
function Home() {
  useEffect(() => {
    document.title = "Beach Resort || Home";
  }, []);

  return (
    <React.Fragment>
      <Slider></Slider>
      <ThreePillars></ThreePillars>
      <Section></Section>
      <FeaturedIn></FeaturedIn>
    </React.Fragment>
  );
}
export default Home;
