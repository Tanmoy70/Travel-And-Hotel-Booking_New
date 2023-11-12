import { useEffect } from "react";
import "./Portfolio.scss";

//Impoted Assests

import icon1 from "../../Assests/Images/icon1.png";
import icon2 from "../../Assests/Images/icon2.png";
import icon6 from "../../Assests/Images/icon6.png";
import image2 from "../../Assests/Images/image2.avif";

//Imported Animation

import Aos from "aos";
import "aos/dist/aos.css";

export default function Portfolio() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="portfolio section container">
      <div className="secContainer grid">
        <div className="leftContent">
          <div className="secHeading">
            <h3 data-aos="fade-up">Why Should You Choose Us</h3>
            <p data-aos="fade-up">
              We have extensive knowlenge and experience in the travel
              indrustry.
            </p>
          </div>

          <div className="grid">
            <div className="singlePortfolio flex" data-aos="fade-up">
              <div className="iconDiv">
                <img src={icon1} alt="Icon image" />
              </div>
              <div className="infor" data-aos="fade-up">
                <h4 data-aos="fade-up">Safety and support</h4>
                <p data-aos="fade-up">
                  Our top priority is the safety and well-being of our clients.
                  We maintain high safety standards and have emergency support
                  available during the trip.
                </p>
              </div>
            </div>
            <div className="singlePortfolio flex" data-aos="fade-up">
              <div className="iconDiv">
                <img src={icon2} alt="Icon image" />
              </div>
              <div className="infor" data-aos="fade-up">
                <h4>Diverse Range of Destinations</h4>
                <p>
                  Whether it's a domestic tour or an international adventure, we
                  cover a wide range of destinations to cater to different
                  interests and preferences.
                </p>
              </div>
            </div>
            <div className="singlePortfolio flex" data-aos="fade-up">
              <div className="iconDiv">
                <img src={icon6} alt="Icon image" />
              </div>
              <div className="infor" data-aos="fade-up">
                <h4>24/7 Customer Support</h4>
                <p>
                  Our dedicated customer support team is available roude the
                  clock to address any queries or concerns before, during, and
                  after the trip.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="rightContainer" data-aos="fade-down">
          <img src={image2} alt="Image" />
        </div>
      </div>
    </div>
  );
}
