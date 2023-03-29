import React from "react";
import "./Review.css";

import bbb5 from '/src/Components/Assets/bbb5.jpg'
import bbb6 from  '/src/Components/Assets/bbb6.jpg'
import bbb7  from  '/src/Components/Assets/bbb7.jpg'

const Reviw = () => {
  return (
  <div className="review section">
    <div className="secContainer">
      <span className="secTitle">What People Say
      </span>

      <div className="reviewContainer container grid">
        <div className="singleReview">
          <div className="imgDiv">
            <img src={bbb5}/>
          </div>

          <p>

          Spain is a wonderland and Benidor is heaven.
          </p>
          <div className="name">
            Nicola Kalina
          </div>
        </div>
        <div className="singleReview">
          <div className="imgDiv">
            <img src={bbb6}/>
          </div>

          <p>

          Spain is a great country with beautiful streets, but if you want to explore a new destination, you should visit Benidorm.
          </p>
          <div className="name">
            Stiven Kahar
          </div>
        </div>
        <div className="singleReview">
          <div className="imgDiv">
            <img src={bbb7}/>
          </div>

          <p>

          Georgia is the heart of Eurasia and the most fascinating country I have ever visited, and Batumi is the new Dubai.
          </p>
          <div className="name">
            Kavin Afburt
          </div>
        </div>
      </div>
    </div>
  </div>
  )
};

export default Reviw;
