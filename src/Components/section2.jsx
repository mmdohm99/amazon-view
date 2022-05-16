import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ProductsContext } from "../Context/ProductsModule";
import { useState, useContext, useEffect } from "react";

import React from "react";

export const Section2 = () => {
  let [slides, setSlides] = useState([]);
  let { products } = useContext(ProductsContext);
  useEffect(() => {
    const img = products.map((product) => product.image);

    setSlides(img);
  }, [products]);
  console.log(slides);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 5,
    },
  };
  return (
    <>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        ssr={true}
        responsive={responsive}
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={1000000000}
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
              style={{ width: "280px", height: "300px " }}
              alt=""
            />
          </div>
        ))}
      </Carousel>
      ;
    </>
  );
};
