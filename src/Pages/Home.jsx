import React from "react";
import { Carouselc } from "../Components/Carousel";
import classes from "../styles/Home.module.css";
import { Section } from "../Components/section";
import { Section1 } from "../Components/Section1";
import { Section2 } from "../Components/section2";
const Home = () => {
  return (
    <div className={classes.Home}>
      <Carouselc />
      <Section />
      <Section1 />
      <Section2 />
    </div>
  );
};

export default Home;
