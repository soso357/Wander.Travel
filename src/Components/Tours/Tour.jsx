import React, { useEffect } from "react";
import "./Tour.css";

import Aos from "aos";
import "aos/dist/aos.css";

import bbb3 from "/src/Components/Assets/bbb3.jpg";
import bbb4 from "/src/Components/Assets/bbb4.jpg";

import { AiFillStar } from "react-icons/ai";

const Tour = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="tours container section">
      <div className="secContainer">
        <span className="secTitle">Hot Toures</span>

        <div className="tourContainer">
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="singleTour grid"
          >
            <div className="imgDiv">
              <img src={bbb3} />
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="tourInfo"
            >
              <span className="tourTitle">Spain, Benidorm</span>

              <div className="stars_review flex">
                <div className="stars">
                  <AiFillStar className="icon" />
                  <AiFillStar className="icon" />
                  <AiFillStar className="icon" />
                  <AiFillStar className="icon" />
                  <AiFillStar className="icon" />
                </div>
                <small className="custReview">2 Customer Review</small>
              </div>

              <p>
                Spain a Country on Europe's Iberian Peninsula, includes 17
                autonomous regions with diverse geography and cultures. Capital
                city Madrid is home to the Royal Palace and Prado musem, housing
                works by Europen masters
              </p>

              <button className=" btn">Buy This Tour </button>
            </div>

            <span className="price">790$</span>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="singleTour grid"
          >
            <div className="imgDiv">
              <img src={bbb4} />
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="3500"
              className="tourInfo"
            >
              <span className="tourTitle">Batumi, Georgia</span>

              <div className="stars_review flex">
                <div className="stars">
                  <AiFillStar className="icon" />
                  <AiFillStar className="icon" />
                  <AiFillStar className="icon" />
                  <AiFillStar className="icon" />
                  <AiFillStar className="icon" />
                </div>
                <small className="custReview">11 Customer Review</small>
              </div>

              <p>
                Batumi is the second-largest city of Georgia and the capital of
                the Autonomous Republic of Adjara, located on the coast of the
                Black Sea in Georgia's southwest. It is situated in a
                subtropical zone at the foot of the Caucasus.
              </p>

              <button className=" btn">Buy This Tour </button>
            </div>

            <span className="price">350$</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tour;
