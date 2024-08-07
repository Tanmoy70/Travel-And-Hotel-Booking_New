import { useEffect } from "react";
import "./Middle.scss";

//Imported Animation

import Aos from "aos";
import "aos/dist/aos.css";

export default function Middle() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="middle section">
      <div className="secContainer container">
        <div className="grid">
          <span className="flex" data-aos="fade-up">
            <h1>15</h1>
            <p>World of Experience</p>
          </span>
          <span className="flex" data-aos="fade-up">
            <h1>5K+</h1>
            <p>Fine Destinations</p>
          </span>
          <span className="flex" data-aos="fade-up">
            <h1>20K+</h1>
            <p>Customer Reviews</p>
          </span>
          <span className="flex" data-aos="fade-up">
            <h1>4.8</h1>
            <p>Overall Rating</p>
          </span>
        </div>
      </div>
    </div>
  );
}
