import useFetch from "../../hooks/usefetch";
import { useEffect } from "react";
import "./featured.scss";

//Imported Animation

import Aos from "aos";
import "aos/dist/aos.css";

const Featured = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const { data, loading, error } = useFetch(
    "/api/hotels/countByCity?cities=berlin,madrid,london"
  );

  return (
    <div className="featured">
      {!data ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://blog.norwegianreward.com/wp-content/uploads/2017/12/Norwegian_Reward_Berlin_Brandenburg_iStock_940x450.jpg"
              alt=""
              className="featuredImg"
              data-aos="fade-down"
            />
            <div className="featuredTitles" data-aos="fade-up">
              <h1>Berlin</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://images.ctfassets.net/zmjc9gr9hbbf/1wm11PSR5i6W9iqxhOnTM5/e63f112b19e0adfed25d2a4b9212f060/MAD32860.jpg?w=1980"
              alt=""
              className="featuredImg"
              data-aos="fade-down"
            />
            <div className="featuredTitles" data-aos="fade-up">
              <h1>Madrid</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://media.tacdn.com/media/attractions-splice-spp-674x446/09/93/6a/89.jpg"
              alt="This is an image"
              className="featuredImg"
              data-aos="fade-down"
            />
            <div className="featuredTitles" data-aos="fade-up">
              <h1>London</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
