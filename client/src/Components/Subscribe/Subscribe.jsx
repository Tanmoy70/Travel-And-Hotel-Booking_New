import { useEffect } from "react";
import "./Subscribe.scss";

//Imported image

import Girl from "../../Assests/Images/girlSmile.jpg";

//Imported Animation

import Aos from "aos";
import "aos/dist/aos.css";

export default function Subscribe() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="subcribe section container">
      <div className="secContainer grid">
        <img src={Girl} alt="Div Image" data-aos="fade-down" />

        <div className="textDiv">
          <h4 data-aos="fade-up">Best way to start your journey!</h4>
          <p data-aos="fade-up">
            We offer personalized itineraries tailored to individual preferences
            and interests.
          </p>
          <button className="btn" data-aos="fade-up">
            Start Here
          </button>
        </div>
      </div>
    </div>
  );
}
