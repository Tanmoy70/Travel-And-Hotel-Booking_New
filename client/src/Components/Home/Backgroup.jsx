import { useEffect } from "react";
import "./Home.scss";

//Imported Assests

import Video from "../../Assests/Videos/video2.mp4";
import Image10 from "../../Assests/Images/image10.avif";
import Image11 from "../../Assests/Images/image11.avif";
import Image12 from "../../Assests/Images/image12.avif";
import Image13 from "../../Assests/Images/image13.avif";

//Imported Animation

import Aos from "aos";
import "aos/dist/aos.css";

//imported Icons

import { AiOutlineSwapRight } from "react-icons/ai";

export default function Backgroup() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="Home">
      <div className="videoBg">
        <video src={Video} autoPlay loop muted></video>
      </div>

      <div className="sectionText">
        <h1 data-aos="fade-up">Unlock Your Travel Dreams With Us!</h1>
        <p data-aos="fade-up">
          Discover the world's most adventurous nature, life is so short for a
          trip.
        </p>
        <button className="btn" data-aos="fade-up">
          GET STARTED <AiOutlineSwapRight className="icon" />
        </button>
      </div>

      <div className="popularPlaces">
        <div className="contect">
          <h3 data-aos="fade-up">Popular Places</h3>
          <div className="images flex" data-aos="fade-up">
            <img src={Image10} alt="Destination Images" />
            <img src={Image11} alt="Destination Images" />
            <img src={Image12} alt="Destination Images" />
            <img src={Image13} alt="Destination Images" />
          </div>
        </div>
      </div>
    </div>
  );
}
