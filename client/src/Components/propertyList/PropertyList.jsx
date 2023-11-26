import { useEffect } from "react";
import "./propertyList.scss";

//Imported Animation

import Aos from "aos";
import "aos/dist/aos.css";
import useFetch from "../../hooks/usefetch";

const PropertyList = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const { data, loading, error } = useFetch("/api/hotels/countByType");

  const images = [
    "https://media.cntraveller.com/photos/629f1658f78438ff9ee3a25c/4:3/w_1780,h_1335,c_limit/The%20Landmark-london-june22-pr-global.jpeg",
    "https://www.marylebonesquare.com/static/3-20c27cd3c3cdda48c828cfa2a6137e6d.jpg",
    "https://ohiosamishcountry.com/images/businesses/berlin-resort/New-Suite-2015b.jpg",
    "https://b8architecture.com/dev/wp-content/uploads/2022/02/b8-architecture-modern-luxury-villa-venus-dubai-marbella-madrid-cover.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
  ];

  return (
    <div className="pContainer">
      <h1 className="CotainerTitle" data-aos="fade-up">
        Browse by property type
      </h1>
      <div className="pList">
        {loading ? (
          "loading"
        ) : (
          <>
            {data &&
              images.map((img, i) => (
                <div className="pListItem" key={i}>
                  <img
                    src={img}
                    alt="This is an"
                    className="pListIng"
                    data-aos="fade-down"
                  ></img>
                  <div className="pListTitles" data-aos="fade-up">
                    <h1>{data[i]?.type}</h1>
                    <h2>
                      {data[i]?.count} {data[i]?.type}
                    </h2>
                  </div>
                </div>
              ))}
          </>
        )}
      </div>
    </div>
  );
};

export default PropertyList;
