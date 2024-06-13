import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./OurCulture.css";
import { useDispatch,useSelector } from "react-redux";
import { getCareercultureData,getCareerkeyfactorData } from "../Redux/action";

function OurCulture() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const dispatch1=useDispatch();
    const{careerculture}=useSelector(store=>store.product)
    useEffect(()=>{
        dispatch1(getCareercultureData())
    },[]);
    // console.log(careerculture);

    const dispatch2=useDispatch();
    const{careerkeyfactor}=useSelector(store=>store.product)
    useEffect(()=>{
        dispatch2(getCareerkeyfactorData())
    },[]);
    // console.log(careerkeyfactor);

  return (
    <div
      className="container-fluid text-white our-culture-container"
      data-aos="fade-up">
      <div className="row">
        <div className="col-md-12 text-center">
          <h1 className="color">Our Culture</h1>
          <div className="d-flex justify-content-center">
            <hr className="rounded-pill custom-hr" />
          </div>
          <div className="row mt-5 ">
            <div className="col-md-6 ">
            {
     careerculture?.map((item)=>{
                            return(
                              <>

              <h3 className="fw-bold">
              {item.culture_title1}
              </h3>
              <h6 className="fw-bold color">
              {item.culture_title2}
              </h6>
              </>
              )
          })
      } 

              <ul
                className="list-unstyled justify-content-center"
                style={{ fontSize: 19, marginLeft: 10 }}>
 {
     careerkeyfactor?.map((item)=>{
                            return(
                              <>
                <li className="text-center check ">
                {item.culture_key_factors_points  }
                </li>
                </>
              )
          })
      } 
              </ul>
            </div>
            <div className="col-md-6">
            {
     careerculture?.map((item)=>{
                            return(
                              <>
              <img
                src={`http://ec2-18-207-168-121.compute-1.amazonaws.com:2000/img/${item.culture_image}`}
                style={{ opacity: "0.5" }}
                className="img-fluid p-5 custom-img"
                alt="Team Collaboration"
              />
                      </>
              )
          })
      } 

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurCulture;
