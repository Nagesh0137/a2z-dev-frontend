import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useDispatch,useSelector } from "react-redux";
import { getCareerfrontData } from "../Redux/action";

function Slider() {
    useEffect(() => {
      AOS.init({ duration: 1000 }); 
    }, []);


    const dispatch=useDispatch();
    const{careerfront}=useSelector(store=>store.product)
    useEffect(()=>{
        dispatch(getCareerfrontData())
    },[]);
    console.log(careerfront);
  
  return (
    <>
    {
     careerfront?.map((item)=>{
                            return(
                              <>
      <div className="container-fluid" data-aos="fade-up">
        <div className="row text-white">
          <div className="col-md-6" style={{ backgroundColor: 'black' }}>
            <div className='d-flex justify-content-center align-items-center' style={{ height: '100%' }}>
              <h1>{item.career_title}</h1>
            </div>
          </div>
          <div className="col-md-6 p-0">
            <img src={`http://ec2-18-207-168-121.compute-1.amazonaws.com:2000/img/${item.career_image}`} alt="Career" className='w-100' />
          </div>
        </div>
      </div>
      <div className="container-fluid"  data-aos="fade-up">
        <div className="row">
            <div className="col-md-12 p-0 d-flex justify-content-center" style={{backgroundColor:'black'}}>
            <div className='col-9 mt-5 mb-5 text-center text-white'>
            <p className='fs-4'>{item.career_desc}</p>
            </div>
            </div>
        </div>
      </div>
                </>
              )
          })
      } 
    </>
  );
}

export default Slider;
