import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Questions.scss";
import Accordion from "./Accordion";

//Imported Animation

import Aos from "aos";
import "aos/dist/aos.css";

export default function Questions() {
  const [active, secActive] = useState(
    "How do i choose the right travel destination for me?"
  );

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_jnw07cs",
        "template_4s2hgwh",
        formRef.current,
        "nL1phBLrCuoyDx5DL"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="questions section container">
      <div className="secHeading">
        <h3 data-aos="fade-up">Frequently Asked Quesyions</h3>
      </div>
      <div className="secContainer grid">
        {/** import an a component from a different file */}
        <div className="accordion grid">
          <Accordion
            title="How do i choose the right travel destination for me?"
            desc=" Consider your interests, budget, disired experiences, and the type of environment you enjoy. Research destinations that aling with your preferences and offer attractions or activities you find appealing."
            active={active}
            secActive={secActive}
          />
          <Accordion
            title="What are the best tome to visit specific destionatios?"
            desc="Research the climate, weather patterns, and peak tourist seasons of the destination you're interested in. Opt for the shoulder seasons when the weather is pleasant, and crowds are fewer, if possible."
            active={active}
            secActive={secActive}
          />
          <Accordion
            title="How can i find budget-friendly travel options and deals?"
            desc="Look for travel apps or websites that offer competitve prices. Being flexible with your travel dates can also help you find better deals."
            active={active}
            secActive={secActive}
          />
          <Accordion
            title="What essential items should i peck for my adventure?"
            desc="Peck appropriate clothing, toiletries, travel documents (passport, visa, etc.), essential metications, and any specific gear needed for your adventure (e.g., hiking boots, snorkeling gear)."
            active={active}
            secActive={secActive}
          />
        </div>
        <div className="form">
          <div className="secHeading">
            <h4 data-aos="fade-up">Do you have any specific question?</h4>
            <p data-aos="fade-up">
              Please fill the form below and our dedicated team will get intouch
              with you as soon an possible.
            </p>
          </div>
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="formContent grid">
              <input
                type="email"
                placeholder="Enter email address"
                data-aos="fade-up"
                name="user_email"
              />
              <textarea
                placeholder="Enter your question here"
                data-aos="fade-up"
                name="massage"
              />
              <button className="btn" data-aos="fade-up">
                {" "}
                Submit Inquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
