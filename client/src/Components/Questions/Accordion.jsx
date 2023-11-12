import { useEffect } from "react";
import "./Questions.scss";

//Imported icons

import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";

//Imported Animation

import Aos from "aos";
import "aos/dist/aos.css";

export default function Accordion({ title, desc, active, secActive }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="accodionContainer" data-aos="fade-up">
      <span
        className={(active === title ? "activeTitle" : "") + " title" + " flex"}
      >
        {title}
        <span onClick={() => secActive(title)}>
          {active === title ? (
            <BsArrowDownCircle className="icon" />
          ) : (
            <BsArrowUpCircle className="icon" />
          )}
        </span>
      </span>
      <p className={(active === title ? "show" : "") + " description"}>
        {desc}
      </p>
    </div>
  );
}
