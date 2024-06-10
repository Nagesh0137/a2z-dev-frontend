import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {
    useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);
  
    return (
    <>
    <div className="container-fluid" data-aos="fade-up">
        <div className="row" style={{backgroundColor:'black'}} >
            <div className="col-md-6 text-center mt-5 text-white">
                <img src="https://www.a2zithub.org/assets/location.png" width={100} alt="" />
                <p className='color fs-2'>Visit Us Today!</p>
                <p className='fs-4'>Open Doors, Open Minds.</p>
                <p className='fs-4'>Explore the Possibilities of Technology!</p>
            </div>
            <div className="col-md-6 text-center p-4 text-white">
            <p className='color fs-1 fw-bold text-decoration-underline mt-3'>Let's Get In Touch</p>
            <p className='text-decoration-justify ps-5 pe-5'>We appreciate your interest and are eager to hear from you. At our <span className='color text-decoration-underline'>Software Company</span>, we prioritize our clients' needs and demands, striving to deliver exceptional service and innovative solutions. We are also open to collaboration and look forward to exploring potential opportunities together.</p>
            <p>Let’s connect and take this forward. What do you think?</p>
            <div className="row">
                <div className="col-sm-6 text-start d-flex">
                    <div>
                <i class="fa-solid fa-location-dot fs-4 color me-2"></i>
                </div>
                <div>
                <span className='mb-2'>3rd Floor Lendkar Apartment Balikashram Rd, near Kamala Ayurvedic Hospital, Ahmednagar Maharashtra 414001</span>
                </div></div>
                <div className="col-sm-6 d-flex text-start">
                    <div>
                    <i className='fa fa-phone color me-2 fs-4'></i>
                    </div>
                    <div>
                     +91 9011144920
                     </div>
                </div>
                <div className="col-sm-6 d-flex text-start mt-4">
                    <div>
                <i class="fa-solid fa-envelope color me-2 fs-4"></i>
                </div>
                <div>

                a2zinfotech@gmail.com
                </div>
                </div>
                <div className="col-sm-6 d-flex text-start mt-4">
                <div>
                <i class="fa fa-linkedin color me-2 fs-4"></i>
                </div>
                <div>
                a2zinfotechs
                </div>
                </div>
            </div>
            </div>
            <div className="col-md-12 p-0" >
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d965133.1939958192!2d74.730411!3d19.1053948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdcb17ca9d749e5%3A0x516744f9b2f35ec9!2sA2Z%20IT%20HUB%20PVT.%20LTD.!5e0!3m2!1shi!2sin!4v1717578738035!5m2!1shi!2sin" width="600" height="450"  style={{width:'100%'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='rounded p-5 border shadow mt-5 mb-5 bg-dark'></iframe>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact