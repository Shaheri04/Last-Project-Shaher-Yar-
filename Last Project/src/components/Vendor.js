import React, { useState } from "react";
import { vendors } from "../data/Data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Vendor() {
  const [hover, setHover] = useState(false);

  const headingStyle = {
    fontSize: "2.5rem",
    fontWeight: "700",
    color: hover ? "gold" : "white",
    textTransform: "uppercase",
    textAlign: "center",
    marginBottom: "2rem",
    transition: "color 0.3s ease-in-out",
  };

  const imageStyle = {
    width: "150px",  // Fixed width
    height: "150px", // Fixed height
    objectFit: "cover", // Ensure image covers area without distortion
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="container-fluid py-5">
        <div
          className="carousel-heading-container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "2rem",
          }}
        >
          <h2
            className="carousel-heading"
            style={headingStyle}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            Best Selling Products
          </h2>
        </div>
        <div className="row px-xl-5">
          <div className="col">
            <Slider {...sliderSettings}>
              {vendors.map((vendor, key) => (
                <div className="bg-light p-4" key={key}>
                  <img
                    src={vendor.image}
                    alt={`Vendor ${key + 1}`}
                    style={imageStyle} // Apply image styles
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
