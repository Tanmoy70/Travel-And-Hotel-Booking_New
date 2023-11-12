import "./header.scss";

import {
  faBed,
  faCar,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ type }) => {
  return (
    <div className="header">
      <div className="headerContainer ">
        <div className="headerList">
          <div className="secMenu">
            <ul className="flex">
              <div className="HeaderIcon active">
                {" "}
                <FontAwesomeIcon icon={faBed} className="FaviIcon" />
                <li className="activeLi">Stays</li>
              </div>
              <div className="HeaderIcon">
                <FontAwesomeIcon icon={faPlane} className="FaviIcon" />
                <li>Flights</li>
              </div>
              <div className="HeaderIcon">
                <FontAwesomeIcon icon={faCar} className="FaviIcon" />
                <li>Car rentals</li>
              </div>
              <div className="HeaderIcon">
                <FontAwesomeIcon icon={faBed} className="FaviIcon" />
                <li>Attractions</li>
              </div>
              <div className="HeaderIcon">
                <FontAwesomeIcon icon={faTaxi} className="FaviIcon" />
                <li>Airport taxis</li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
