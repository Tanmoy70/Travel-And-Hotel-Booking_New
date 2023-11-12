import { Link } from "react-router-dom";
import "./Seachitem.scss";

export default function SearchItem({ item }) {
  return (
    <div>
      <div className="searchItem">
        <img src={item.photos[0]} alt="This is an image" className="siImg" />
        <div className="siDesc">
          <h1 className="siTitle">{item.name}</h1>
          <span className="siDistance">{item.distance}m from center</span>
          <span className="siTaxiOp">Free airport taxi</span>
          <span className="siSubtitle">
            Studio Apartment with Air conditioning
          </span>
          <span className="siFeatures">{item.desc}</span>
          <span className="siCancelOp">Free cancellation </span>
          <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="siDetails">
          {item.rating && (
            <div className="siRating">
              <div className="reviewRating">
                <span>Excellent</span>
                <span className="review">13 review</span>
              </div>

              <button>{item.rating}</button>
            </div>
          )}
          <div className="siDetailTexts">
            <span className="siPrice">${item.cheapestPrice}</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <Link to={`/hotels/${item._id}`}>
              <button className="siCheckButton">See availability</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}