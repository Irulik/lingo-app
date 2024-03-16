import React from "react";
import { Link } from "react-router-dom";
import "./AdvantageSection.css";

import tutor from "../../img/pictures/Tutor.png";
import mac from "../../img/-mac.svg";

const AdvantageSection = () => {
  return (
    <section className="advan">
      <div className="advan-inner" />
      <div className="advan-inner">
        <div className="advan-potential">
          <div className="advan-content">
            <h1 className="advan-title">
              Unlock your potential with the best <em>language</em> tutors
            </h1>
            <p className="advan-text">
              Embark on an Exciting Language Journey with Expert Language
              Tutors: Elevate your language proficiency to new heights by
              connecting with highly qualified and experienced tutors.
            </p>
            <div className="advan-button">
              <Link to="/lingo-app" className="advan-center">
                Get started
              </Link>
            </div>
          </div>
        </div>

        <div className="advan_pictures">
          <div className="advan__pictures-wrapper">
            <div className="advan_image-container">
              <img
                className="advan_tutor"
                src={tutor}
                alt="photo of tutor"
                width="339"
                height="339"
              />
              <div className="advan_comp">
                <img
                  className="advan_mac"
                  src={mac}
                  alt="icon-mac"
                  width="46"
                  height="56"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantageSection;
