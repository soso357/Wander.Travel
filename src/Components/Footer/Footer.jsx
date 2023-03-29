import React from "react";
import "./Footer.css";

import { HiPhone } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div className="setContainer container">
        <div className="content grid">
          <div className="row">
            <div className="spanText">CONTACT US</div>

            <div className="contactDiv">
              <span className="flex">
                <HiPhone className="icon" />
                <span>+244 399 993 99</span>
              </span>
              <span className="flex">
                <MdEmail className="icon" />
                <span>isratech9@outlook.com</span>
              </span>
              <span className="flex">
                <BsGithub className="icon" />
                <span>isratech357</span>
              </span>
            </div>
          </div>

          <div className="row">
            <div className="spanText">POPULAR NEWS</div>

            <div className="singleNews">
              <span className="text">
                Your Personal Guide to the most places to visit in the world
              </span>
              <p>May 09, 2023</p>
            </div>
            <div className="singleNews">
              <span className="text">
                THE grand reveal of the most iconic hotel in the world -
                Atlantis The Royal
              </span>
              <p>May 12, 2023</p>
            </div>
          </div>

          <div className="row">
            <div className="spanText">QUICK LINKS</div>
            <div className="footerLinks">
              <ul>
                <li>About Us</li>
                <li>Our Team</li>
                <li>Gallery</li>
                <li>Blog</li>
                <li>Careers</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bottomDiv flex">
          <p>Copyright 2023 IsraTech - All rights reserved</p>

          <div className="social flex">
            <BsFacebook className="icon" />
            <AiOutlineTwitter className="icon" />
            <AiFillYoutube className="icon" />
            <AiFillInstagram className="icon" />
          </div>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
