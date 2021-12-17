import React from "react";
import "./home.css";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { carouselData } from "../../Utilities/carouselData";
import FeaturedCollection from "../FeaturedCollection/FeaturedCollection";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div>
        <Slider {...settings}>
          {carouselData.map((item) => (
            <div className="carousel">
              <img src={item.img} alt="" className="carousel-img" />
              <div className="carousel-details">
                <h1>Bags Re imagined For Modern Life</h1>
                <button className="btn btn-danger"> Explore</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="container">
        <FeaturedCollection />
      </div>
    </div>
  );
};

export default Home;
