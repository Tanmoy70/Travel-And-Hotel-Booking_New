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

  const { data, loading, error } = useFetch("/api/hotels/");

  return (
    <div className="fpContainer">
      <h1 className="fpHeading" data-aos="fade-up">
        Homes guests love
      </h1>
      <div className="fp">
        {loading ? (
          "Loading"
        ) : (
          <>
            {data.map((item) => (
              <div className="fpItem" data-aos="fade-up" key={item._id}>
                <img
                  src={item.photos[0]}
                  alt="This is an image"
                  className="fpImg"
                />
                <span className="fpName">{item.name}</span>
                <span className="fpCity">{item.city}</span>
                <span className="fpPrice">
                  Starting from ${item.cheapestPrice}{" "}
                </span>
                {item.rating && (
                  <div className="fpRating">
                    <button>{item.rating}</button>
                    <span>Excellent</span>
                  </div>
                )}
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
