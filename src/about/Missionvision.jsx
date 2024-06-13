import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './mission.css'; 
import { useDispatch,useSelector } from "react-redux";
import { getMissionData,getVisionData } from "../Redux/action";

function Missionvision() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  const dispatch1=useDispatch();
  const{mission}=useSelector(store=>store.product)
  useEffect(()=>{
      dispatch1(getMissionData())
  },[]);
  // console.log(mission);

  const dispatch2=useDispatch();
  const{vision}=useSelector(store=>store.product)
  useEffect(()=>{
      dispatch2(getVisionData())
  },[]);
  console.log(vision);

  return (
    <div className="deck d-flex justify-content-center align-items-center" style={{ backgroundColor: 'black', minHeight: '100vh', backgroundImage: "url('https://a2zithub.org/assets/img22.png')", backgroundRepeat: 'no-repeat', backgroundPosition: 'center right' }}>
               {
     mission?.map((item)=>{
                            return(
                              <>
      <div className="card-space">
        <div className="card asdf m-5">
            <div className="card-body">
                
            </div>
          <div className="face front d-flex justify-content-center align-items-center text-center">
            <h1 className='color'>{item.mission_title}</h1>
          </div>

          <div className="face back d-flex justify-content-center align-items-center text-center text-white">
            <p className='fs-5'>{item.mission_desc}
            </p>
          </div>
        </div>
      </div>

</>
)
})
} 
{
vision?.map((item)=>{
                            return(
                              <>
      <div className="card-space">
        <div className="card asdf  m-5">
          <div className="face front d-flex justify-content-center align-items-center text-center">
            <h1 className='color'>{item.vision_title}</h1>
          </div>
          <div className="face back d-flex justify-content-center align-items-center text-center text-white">
            <p className='fs-5'>{item.vision_desc}</p>
          </div>
        </div>
      </div>

</>
)
})
} 
    </div>
  );
}

export default Missionvision;
