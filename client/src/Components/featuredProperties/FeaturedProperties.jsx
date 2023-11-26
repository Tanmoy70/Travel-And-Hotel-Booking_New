import { useEffect } from "react";
import "./featuredProperties.scss";

//Imported Animation

import Aos from "aos";
import "aos/dist/aos.css";
import useFetch from "../../hooks/usefetch";

export default function FeaturedProperties() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const { data, loading, error } = useFetch("/api/hotels?featured=true");

  return (
    <div className="fpContainer">
      <h1 className="fpHeading" data-aos="fade-up">
        Homes guests love
      </h1>
      <div className="fp">
        <div className="fpItem" data-aos="fade-up">
          <img
            src="https://d8a6qj9sir70y.cloudfront.net/media/glmhhpg5/acl-rm-deluxe-with-balcony-bed-dsc_0581.jpg?mode=crop&width=768&height=511"
            alt="This is an image"
            className="fpImg"
          />
          <span className="fpName">Aparthotel Start Miasto</span>
          <span className="fpCity">London</span>
          <span className="fpPrice">Starting from $150</span>
          <div className="fpRating">
            <button>8.9</button>
            <span>Awasome</span>
          </div>
        </div>
        <div className="fpItem" data-aos="fade-up">
          <img
            src="https://media.timeout.com/images/103677712/750/422/image.jpg"
            alt="This is an image"
            className="fpImg"
            data-aos="fade-down"
          />
          <span className="fpName">Avani Alonso Martinez Madrid Hotel</span>
          <span className="fpCity">Madrid</span>
          <span className="fpPrice">Starting from $142</span>
          <div className="fpRating">
            <button>9.1</button>
            <span>Excellent</span>
          </div>
        </div>
        <div className="fpItem" data-aos="fade-up">
          <img
            src="https://media.cntraveler.com/photos/5be1c837d1f6b12d39556ba7/16:9/w_3999,h_2249,c_limit/The-Goring-Hotel__2018_Most-SplendidGarden_-047-V2-HIGH-RES.jpg"
            alt="This is an image"
            className="fpImg"
          />
          <span className="fpName">NH Berlin Alexanderplatz</span>
          <span className="fpCity">Berlin</span>
          <span className="fpPrice">Starting from $130</span>
          <div className="fpRating">
            <button className="RatingNumber">9.4</button>
            <span>Excellent</span>
          </div>
        </div>
      </div>
    </div>
  );
}
