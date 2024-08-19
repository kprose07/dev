import React from "react";
import Slider from "react-slick";
import "../css/services.css";

// Import slick carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Images
import mockOne from "../imgs/mock.png";
import mockTwo from "../imgs/mockk.png";
import mockThree from "../imgs/mockt.png";

function Services() {
  const images = [mockOne, mockTwo, mockThree];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <div className="services_contain">
        <div className="s_section_one">
          <p className="s_head">Services</p>
          <div className="services_grid">
            <div className="g_one gStyle">
              <div className="card_one card_ser"></div>
              <p className="s_sub">Portfolio Site</p>
            </div>
            <div className="g_two gStyle">
              <div className="card_two card_ser"></div>
              <p className="s_sub">Small Business Site</p>
            </div>
            <div className="g_three gStyle">
              <div className="card_three card_ser"></div>
              <p className="s_sub">Information Site</p>
            </div>
            <div className="g_four gStyle">
              <div className="card_four card_ser"></div>
              <p className="s_sub">Resumes Consulting</p>
            </div>
            <div className="g_five gStyle">
              <div className="card_five card_ser"></div>
              <p className="s_sub">Web Development Training</p>
            </div>
            <div className="g_six gStyle">
              <div className="card_six card_ser"></div>
              <p className="s_sub">Mobile Apps</p>
            </div>
          </div>
        </div>
        <div className="s_section_two">
          <p id="headetwo" className="s_head">
            Mock Up's:
          </p>
          <div className="gallery">
            <Slider {...settings}>
              {images.map((src, index) => (
                <div key={index} className="slide-container">
                  <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="slide-image"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
