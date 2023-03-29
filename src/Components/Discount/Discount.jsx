import React, { useEffect } from "react";
import "./Discount.css";

import Aos from "aos";
import "aos/dist/aos.css";

import sea from "/src/Components/Assets/sea.mp4";

const Discount = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="discount section">
      <div className="setContainer">
        <video src={sea} autoPlay loop muted typeof="mp4">
          {" "}
        </video>
        <div className="textDiv">
          <span data-aos="fade-up" data-aos-duration="2000" className="title">
            Sign Up for 35% Discount
          </span>
          <p data-aos="fade-up" data-aos-duration="2500">
            Want to get instat siscount for your next tour to any of your
            favorite destinations.
          </p>

          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="input_btn flex"
          >
            <input
              type="text"
              className="text"
              placeholder="Enter your Email"
            />
            <button className="btn">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;
