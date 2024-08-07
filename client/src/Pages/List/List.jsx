import useFetch from "../../hooks/usefetch.js";
import { useState, useEffect } from "react";

import "./List.scss";
import Navbar from "../../Components/NavBarSecond/NavBarSecond";
import Header from "../../Components/Header/Header";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../Components/SeachItems/SearchItem";

import Aos from "aos";
import "aos/dist/aos.css";

export default function List() {
  const location = useLocation();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [Destinations, setDestinations] = useState(location.state.Destinations);
  const [dates, setDates] = useState(location.state.dates);
  const [openDate, setOpenDate] = useState(false);
  const [option, setOption] = useState(location.state.option);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const { data, loading, error, reFetch } = useFetch(
    `/api/hotels?city=${Destinations}&minPrice=${min || 0}&maxPrice=${
      max || 999
    }`
  );

  const handleClick = () => {
    reFetch();
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper" data-aos="fade-up">
          <div className="listSearch">
            <h1 className="lsTitle" data-aos="fade-up">
              Search
            </h1>
            <div className="lsItem" data-aos="fade-up">
              <label>Destination</label>
              <input
                placeholder={Destinations}
                onChange={(e) => setDestinations(e.target.value)}
                type="text"
              />
            </div>
            <div className="lsItem" data-aos="fade-up">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                dates[0].startDate,
                "dd/MM/yyyy"
              )} to ${format(dates[0].endDate, "dd/MM/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDates([item.selection])}
                  ranges={dates}
                  minDate={new Date()}
                />
              )}
            </div>
            <div className="lsItem" data-aos="fade-up">
              <label>Options</label>
              <div className="lsOption">
                <div className="lsOptionItem">
                  <span className="IsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input
                    data-aos="fade-up"
                    type="number"
                    onChange={(e) => setMin(e.target.value)}
                    className="inOptionInput"
                  />
                </div>
                <div className="lsOptionItem" data-aos="fade-up">
                  <span className="IsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input
                    data-aos="fade-up"
                    type="number"
                    onChange={(e) => setMax(e.target.value)}
                    className="inOptionInput"
                  />
                </div>
                <div className="lsOptionItem" data-aos="fade-up">
                  <span className="IsOptionText">Adult</span>
                  <input
                    data-aos="fade-up"
                    type="number"
                    className="inOptionInput"
                    placeholder={option.adult}
                    min={1}
                  />
                </div>
                <div className="lsOptionItem" data-aos="fade-up">
                  <span className="IsOptionText">Children</span>
                  <input
                    data-aos="fade-up"
                    type="number"
                    className="inOptionInput"
                    placeholder={option.children}
                    min={0}
                  />
                </div>
                <div className="lsOptionItem" data-aos="fade-up">
                  <span className="IsOptionText">Room</span>
                  <input
                    data-aos="fade-up"
                    type="number"
                    className="inOptionInput"
                    placeholder={option.room}
                    min={1}
                  />
                </div>
              </div>
            </div>
            <button
              className="listBtn"
              onClick={handleClick}
              data-aos="fade-up"
            >
              Search
            </button>
          </div>
          <div className="listResult" data-aos="fade-up">
            {loading ? (
              "Loading..."
            ) : (
              <>
                {data.map((item, index) => {
                  return <SearchItem item={item} key={index} />;
                })}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
