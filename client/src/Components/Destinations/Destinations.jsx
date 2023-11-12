import { useContext, useEffect, useState } from "react";
import "./Destinations.scss";

import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

//impoted icons

import { BsFillCalendarDateFill } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { TiLocation } from "react-icons/ti";
import { FaBed } from "react-icons/fa";
import { IoIosMan } from "react-icons/Io";

//Imported Animation

import Aos from "aos";
import "aos/dist/aos.css";

//impoted images

// import Image1 from "../../Assests/Images/image1.avif";
// import Image2 from "../../Assests/Images/image10.avif";
// import Image3 from "../../Assests/Images/image11.avif";
// import Image4 from "../../Assests/Images/image12.avif";
// import Image5 from "../../Assests/Images/image13.avif";
// import Image6 from "../../Assests/Images/image14.avif";
// import Image7 from "../../Assests/Images/image15.avif";
// import Image8 from "../../Assests/Images/image16.avif";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";

//Create an array that is gonna contain all destination data and we loop thorugh this data.

// const destinations = [
//   {
//     id: 1,
//     img: Image1,
//     name: "Seychelles Island",
//     location: "Indian Ocean",
//     rating: "4.7",
//   },
//   {
//     id: 2,
//     img: Image2,
//     name: "Bora Bora Island ",
//     location: "Polunesia",
//     rating: "4.3",
//   },
//   {
//     id: 3,
//     img: Image3,
//     name: "Maldives Island",
//     location: "Indian Ocean",
//     rating: "4.9",
//   },
//   {
//     id: 4,
//     img: Image4,
//     name: "Santorini Island",
//     location: "Greece",
//     rating: "4.8",
//   },
//   {
//     id: 5,
//     img: Image5,
//     name: "Bali Island",
//     location: "Indonesia",
//     rating: "4.9",
//   },
//   {
//     id: 6,
//     img: Image6,
//     name: "Maui Island",
//     location: "Hawaii, USA",
//     rating: "4.9",
//   },
//   {
//     id: 7,
//     img: Image7,
//     name: "Capri Island",
//     location: "Italy",
//     rating: "4.7",
//   },
//   {
//     id: 8,
//     img: Image8,
//     name: "Fiji Island",
//     location: "South Pacific",
//     rating: "4.4",
//   },
// ];

export default function Destinations() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [Destinations, setDestinations] = useState("");

  const [option, setOption] = useState({
    adult: 2,
    children: 2,
    room: 1,
  });

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOption((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? option[name] + 1 : option[name] - 1,
      };
    });
  };

  const { dispatch } = useContext(SearchContext);

  const handleSearch = () => {
    dispatch({ type: "NEW_SEARCH", payload: { Destinations, dates, option } });
    navigate("/hotels", { state: { Destinations, dates, option } });
  };

  const {} = useContext(SearchContext);

  return (
    <div className="destination section container">
      <div className="secCotainer">
        <div className="secTitle">
          <span className="redText" data-aos="fade-up">
            EXPLORE NOW
          </span>
          <h3 data-aos="fade-up">Find Your Dream Destination</h3>
          <p data-aos="fade-up">
            Fill in the fields below to find the best spot for your next tour.
          </p>
        </div>

        <div className="searchField grid">
          <div className="inputField flex" data-aos="fade-up">
            <FaBed className="icon" />
            <input
              type="text"
              placeholder="Whare are you going?"
              onChange={(e) => setDestinations(e.target.value)}
            />
          </div>
          <div className="inputField flex" data-aos="fade-up">
            <BsFillCalendarDateFill classNamesetOpenDate="icon" />
            <span onClick={() => setOpenDate(!openDate)}>{`${format(
              dates[0].startDate,
              "dd/MM/yyyy"
            )} to ${format(dates[0].endDate, "dd/MM/yyyy")}`}</span>
          </div>
          {openDate && (
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDates([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={dates}
              className="date"
              minDate={new Date()}
            />
          )}

          <div className="inputField flex" data-aos="fade-up">
            <IoIosMan className="icon" />
            <span
              onClick={() => setOpenOptions(!openOptions)}
            >{`${option.adult} adult · ${option.children} children · ${option.room} room `}</span>
          </div>

          {openOptions && (
            <div className="options">
              <div className="optionsItem">
                <span className="optionText">Adult</span>
                <div className="optionCounter">
                  <button
                    disabled={option.adult <= 1}
                    className="optionBtn"
                    onClick={() => handleOption("adult", "d")}
                  >
                    -
                  </button>
                  <span className="optionNo">{option.adult}</span>
                  <button
                    className="optionBtn"
                    onClick={() => handleOption("adult", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="optionsItem">
                <span className="optionText">Children</span>
                <div className="optionCounter">
                  <button
                    disabled={option.children <= 0}
                    className="optionBtn"
                    onClick={() => handleOption("children", "d")}
                  >
                    -
                  </button>
                  <span className="optionNo">{option.children}</span>
                  <button
                    className="optionBtn"
                    onClick={() => handleOption("children", "i")}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="optionsItem">
                <span className="optionText">Room</span>
                <div className="optionCounter">
                  <button
                    disabled={option.room <= 1}
                    className="optionBtn"
                    onClick={() => handleOption("room", "d")}
                  >
                    -
                  </button>
                  <span className="optionNo">{option.room}</span>
                  <button
                    className="optionBtn"
                    onClick={() => handleOption("room", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}
          <button
            className="btn flex"
            data-aos="fade-up"
            onClick={handleSearch}
          >
            <BiSearchAlt className="icon" />
            Search
          </button>
        </div>

        <div className="secMenu">
          <ul className="flex" data-aos="fade-up">
            <li className="active">All</li>
            <li>Recomended</li>
            <li>Beach</li>
            <li>Park</li>
            <li>Nature</li>
            <li>Mountain</li>
          </ul>
        </div>
        {/*
        <div className="destinationContainer grid">
          {destinations.map((destination) => {
            return (
              <div
                className="singleDestination"
                key={destination.id}
                data-aos="fade-up"
              >
                <div className="imageDiv" data-aos="fade-up">
                  <img src={destination.img} alt="Destination Image" />
                  <div className="descInfo flex">
                    <div className="text">
                      <span className="name">{destination.name}</span>
                      <p className="flex">
                        <TiLocation className="icon" />
                        {destination.location}
                      </p>
                    </div>
                    <span className="rating">{destination.rating}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div> */}
      </div>
    </div>
  );
}
