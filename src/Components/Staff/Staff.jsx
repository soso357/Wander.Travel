import React from "react";
import "./Staff.css";

import bbb8 from "/src/Components/Assets/bbb8.jpg";
import bbb9 from "/src/Components/Assets/bbb9.webp";
import bbb10 from "/src/Components/Assets/bbb10.jpg";

const Staff = () => {
  return (
    <div className="staff container section">
      <div className="secContainer">
        <span className=" secTitle">Different People - One Mission</span>

        <div className="staffContainer grid">
          <div className="singleStaff">
            <div className="imgDiv">
              <img src={bbb8} />
            </div>

            <span className="name">Nicle Charmaine</span>
            <span className="jobTitle">CEO Wander</span>
            <span className="contact">+344 990 7778 99</span>

          </div>
          <div className="singleStaff">
            <div className="imgDiv">
              <img src={bbb9} />
            </div>

            <span className="name">Mel Gupeta</span>
            <span className="jobTitle">Software Eng</span>
            <span className="contact">+344 550 5898 99</span>
            
          </div>
          <div className="singleStaff">
            <div className="imgDiv">
              <img src={bbb10} />
            </div>

            <span className="name">Alexander Cher</span>
            <span className="jobTitle">IT Specialist</span>
            <span className="contact">+344 770 5558  55</span>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staff;
