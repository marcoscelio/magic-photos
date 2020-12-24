import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import api from "../../services/api";

import "./styles.css";

function Carousel() {
  const [carouselItems, setCarouselItems] = useState([]);

  const handleOpinions = async () => {
    let { data, status } = await api.get("/opinion");
    if (status === 200) setCarouselItems(data);
  };

  useEffect(() => {
    handleOpinions();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="carousel">
      <h2> Depoimentos</h2>
      <Slider {...settings}>
        {carouselItems.map(({ id, quote, name, channel }) => (
          <div key={id}>
            <h4>
              <q>{quote}</q>
            </h4>
            <h5>{name}</h5>
            <h6>Depoimento do {channel}</h6>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
