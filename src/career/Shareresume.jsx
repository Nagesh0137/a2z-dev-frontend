import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useDispatch,useSelector } from "react-redux";
import { getCareerresumeData } from "../Redux/action";

function Shareresume() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const dispatch=useDispatch();
  const{careerresume}=useSelector(store=>store.product)
  useEffect(()=>{
      dispatch(getCareerresumeData())
  },[]);
  // console.log(careerresume);

  return (
    <>
    {
    careerresume?.map((item)=>{
                            return(
                              <>
      <div
        className="container-fluid text-white"
        style={{ backgroundColor: "black" }}
        data-aos="fade-up">
        <div className="row pt-5 pb-5">
          <div className="col-md-6 p-3">
            <img
              className="p-3"
              src={`http://ec2-18-207-168-121.compute-1.amazonaws.com:2000/img/${item.resume_image}`}
              style={{
                width: "100%",
                height: "400px",
                boxShadow: "0px 0px 5px 1px white",
              }}
              alt=""
            />
          </div>
          <div className="col-md-6 pt-5">
            <h1>{item.resume_heading}</h1>
            <h1 className="color">{item.resume_title}</h1>
            <h1>{item.resume_link}</h1>
          </div>
        </div>
      </div>
      <div></div>
      </>
    )
})
} 

    </>
  );
}

export default Shareresume;
