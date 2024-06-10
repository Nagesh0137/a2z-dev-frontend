import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './mission.css'; 

function Missionvision() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  return (
    <div className="deck d-flex justify-content-center align-items-center" style={{ backgroundColor: 'black', minHeight: '100vh', backgroundImage: "url('https://a2zithub.org/assets/img22.png')", backgroundRepeat: 'no-repeat', backgroundPosition: 'center right' }}>
      <div className="card-space">
        <div className="card asdf m-5">
            <div className="card-body">
                
            </div>
          <div className="face front d-flex justify-content-center align-items-center text-center">
            <h1 className='color'>Our Mission</h1>
          </div>

          <div className="face back d-flex justify-content-center align-items-center text-center text-white">
            <p className='fs-5'>Our mission is to enable the success of our clients. We are committed to understanding their unique needs, challenges, and goals, and <span className='color'>delivering customized solutions.</span> By partnering with our clients, we aim to create long-term value.
            </p>
          </div>
        </div>
      </div>
      <div className="card-space">
        <div className="card asdf  m-5">
          <div className="face front d-flex justify-content-center align-items-center text-center">
            <h1 className='color'>Our Vision</h1>
          </div>
          <div className="face back d-flex justify-content-center align-items-center text-center text-white">
            <p className='fs-5'>Our vision is to make a significant and<span className='color'>positive impact</span>  on the businesses we serve, helping them harness the full potential of technology and navigate the ever-evolving digital landscape with<span className='color'>confidence</span> and <span className='color'>success.</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Missionvision;
