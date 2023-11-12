import { useEffect } from "react";
import "./Reviews.scss";

//imported icons

import { AiFillStar } from "react-icons/ai";

//Import images

import Image3 from "../../Assests/Images/image3.avif";
import Image4 from "../../Assests/Images/image4.avif";
import Image5 from "../../Assests/Images/image5.avif";
import Image6 from "../../Assests/Images/image6.avif";
import Image9 from "../../Assests/Images/image9.png";

//Imported Animation

import Aos from "aos";
import "aos/dist/aos.css";

export default function Reviews() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="review section container">
      <div className="secConatiner grid">
        <div className="textDiv">
          <span className="redText" data-aos="fade-up">
            FROM OUR CLIENTS
          </span>
          <h3 data-aos="fade-up">
            Real Travel History From Our Beloved Clients
          </h3>
          <p data-aos="fade-up">
            Bu choosing us ad their tour agency, customer can expect an
            enriching and enjoyable travel experience, filled with unforgettble
            memories that will last a lifetime.
          </p>
          <span className="stars flex" data-aos="fade-up">
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
          </span>

          <div className="clientsImages flex">
            <img src={Image3} alt="Client Image" data-aos="fade-up" />
            <img src={Image4} alt="Client Image" data-aos="fade-up" />
            <img src={Image5} alt="Client Image" data-aos="fade-up" />
            <img src={Image6} alt="Client Image" data-aos="fade-up" />
          </div>
        </div>
        <div className="imgDiv">
          <img src={Image9} alt="Div image" data-aos="fade-down" />
        </div>
      </div>
    </div>
  );
}
