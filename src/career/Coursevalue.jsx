import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import "./CourseValue.css";

function CourseValue() {
  const [valData, setData] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    axios
      .get("http://localhost:3000/career")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div
      className="container-fluid text-white course-value-container"
      data-aos="fade-up">
      <div className="row">
        {valData.map((item, index) => (
          <React.Fragment key={index}>
            {console.log(index)}
            {index % 2 === 0 ? (
              <>
                <div className="col-md-6 bordered content-box">
                  <h1>{item.title}</h1>
                </div>
                <div className="col-md-6 icon-container">
                  <i className={`${item.icon} fs-1 color icon`}></i>
                </div>
              </>
            ) : (
              <>
                <div className="col-md-6 icon-container">
                  <i className={`${item.icon} fs-1 color icon`}></i>
                </div>
                <div className="col-md-6 bordered content-box">
                  <h1>{item.title}</h1>
                </div>
              </>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default CourseValue;
