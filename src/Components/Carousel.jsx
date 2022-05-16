import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import screen from "../assets/screen.webp";
import mouse from "../assets/mouse.jpg";
import key from "../assets/KEY.jpg";
import head from "../assets/head.jpg";

import { useState } from "react";

export const Carouselc = () => {
  let [slides] = useState([screen, mouse, key, head]);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        customTransition="all 1.5"
        transitionDuration={10}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-50-px"
      >
        {slides.map((slide) => (
          <div>
            <img
              src={slide}
              style={{ width: "1490px", height: "600px " }}
              alt=""
            />
          </div>
        ))}
      </Carousel>
    </>
  );
};
