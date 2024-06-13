import React from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

import './Explore.css' // Import the custom CSS file

function Explore() {
  React.useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className='mt-5' style={{backgroundColor:'black'}}>
      <div className="container-fluid text-white">
        <div className="row">
          <div className="col-md-12 text-center mt-5 mb-5">
            <h1><span className='color'>Explore</span> like never before...</h1>
            <p>At <span className='color'>A2Z</span>, we offer a range of <span className='color'>IT Services </span> designed to help businesses <br /> of all sizes <span className='color'> leverage technology</span> to drive <span className='color'>growth & success.</span></p>
          </div>
          <div className='d-flex flex-wrap justify-content-center align-items-center mb-5'>
            <div className="col-md-2 rounded text-center m-2 explore-col-2 p-2 hovereffect" data-aos="fade-up" style={{boxShadow:'1px solid white'}}>
              <img src="https://media.licdn.com/dms/image/C5612AQF79epthg7Wbw/article-cover_image-shrink_720_1280/0/1649140977382?e=1723075200&v=beta&t=Ov9htYAU7uWJ86FIqWyUALYKF-ObDQM6v5shpwbxDJA" alt="" style={{width:'100%',height:'200px'}} />
              <br />
              <p className='hovereffecttext'>Custom Software Development</p>
            </div>
            <div className=" col-md-2 rounded text-center m-2 p-2 explore-col-2 hovereffect" data-aos="fade-up" style={{boxShadow:'1px solid white'}}>
              <img src="https://riseuplabs.com/wp-content/uploads/2021/07/mobile-application-development-guidelines-riseuplabs.jpg" alt="" style={{width:'100%',height:'200px'}} />
              <br />
              <p className='hovereffecttext'>Mobile App Development</p>
            </div>
            <div className=" col-md-2 rounded text-center m-2 p-2 explore-col-2 hovereffect" data-aos="fade-up" style={{boxShadow:'1px solid white'}}>
              <img src="https://www.moveoapps.com/blog/wp-content/uploads/2020/07/web-application-development-process.png" alt="" style={{width:'100%',height:'200px'}} />
              <br />
              <p className='hovereffecttext'>Web Application Development</p>
            </div>
            <div className="col-md-2 rounded text-center m-2 p-2 explore-col-2 hovereffect" data-aos="fade-up" style={{boxShadow:'1px solid white'}}>
              <img src="https://emeritus.org/in/wp-content/uploads/sites/3/2023/03/How-to-Learn-Digital-Marketing.jpg.optimal.jpg" alt="" style={{width:'100%',height:'200px'}} />
              <br />
              <p className='hovereffecttext'>Digital Marketing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Explore
