import React, { useEffect } from "react";
import "./corevalues.css"; // Assuming you have your custom CSS file for styling
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS file for animations

function Corevalues() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <>
      <div
        className="container-fluid core-values-container"
        style={{ backgroundColor: "black" }}>
        <h1
          className="text-center color"
          style={{ textShadow: "0px 0px 2px #fff", fontSize: "40px" }}>
          Our Core Values
        </h1>
        <div className="container">
          <div className="row">
            {[
              {
                icon: "fa-solid fa-lightbulb",
                title: "Innovation",
                text: "Embrace and drive technological innovation.",
              },
              {
                icon: "fa-solid fa-star",
                title: "Quality",
                text: "Deliver high-quality solutions and services.",
              },
              {
                icon: "fa-solid fa-handshake",
                title: "Focus",
                text: "Prioritize client satisfaction and personalized solutions.",
              },
              {
                icon: "fa-solid fa-lines-leaning",
                title: "Improvement",
                text: "Learn, adapt, and improve continuously.",
              },
              {
                icon: "fa-solid fa-shield",
                title: "Reliability",
                text: "Ensure reliable and robust software and applications.",
              },
              {
                icon: "fa-solid fa-square-check",
                title: "Accountability",
                text: "Take ownership and deliver on commitments.",
              },
            ].map((value, index) => (
              <div className="col-md-4 mb-5" key={index} data-aos="fade-up">
                <div
                  className="card corecard p-5 text-center text-white"
                  style={{ backgroundColor: "black" }}>
                  <i class={`fs-1 ${value.icon}`}></i>
                  <div className="card-body">
                    <h5 className="card-title fs-4 color">{value.title}</h5>
                    <p className="card-text">{value.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Corevalues;
