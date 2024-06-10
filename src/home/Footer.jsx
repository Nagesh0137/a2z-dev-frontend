import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported
import React from "react";
import { NavLink } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <>
      <footer className="Footer pt-5 pb-5" style={{ backgroundColor: "black" }}>
        <div className="container-md-fluid">
          <div className="row">
            <div className="col-12 col-md-4">
              <h5 style={{ color: "white", marginLeft: "50px" }}>
                USEFUL LINKS
              </h5>
              <ul
                style={{
                  listStyle: "none",
                  color: "white",
                  padding: "2px",
                  paddingTop: "10px",
                  marginLeft: "50px",
                }}>
                <li>
                  <NavLink to="/" className="nav-link">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about-us" className="nav-link">
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/career" className="nav-link">
                    Career
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className="nav-link">
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="col-12 ps-5 ps-0 col-md-4 ">
              <h5 style={{ color: "white" }}>OUR SERVICES</h5>
              <ul
                style={{
                  listStyle: "none",
                  color: "white",
                  padding: "2px",
                  paddingTop: "10px",
                }}>
                <li>Web Design</li>
                <li>Web Development</li>
                <li>Product Management</li>
                <li>Marketing</li>
              </ul>
            </div>

            <div className="col-md-4 ps-5 ps-0 pe-3 pe-md-0 s">
              <h5 style={{ color: "white", marginLeft: "1px" }}>Follow Us</h5>
              <p style={{ color: "white" }}>
                Embark on an exciting journey with us! Follow our page for the
                latest updates, exclusive content, and much more. Don't miss out
                on the adventure
              </p>
              <ul>
                <a href="https://www.facebook.com/a2zinfo.ithub/">
                  <li>
                    <i class="fa-brands fa-facebook"></i>
                  </li>
                </a>
                <a href="https://www.instagram.com/a2z.ithub/">
                  <li>
                    <i class="fa-brands fa-instagram"></i>
                  </li>
                </a>
                <a href="https://api.whatsapp.com/send?phone=919011144920">
                  <li>
                    <i class="fa-brands fa-whatsapp"></i>
                  </li>
                </a>
                <a href="https://www.linkedin.com/company/a2zinfotechs">
                  <li>
                    <i class="fa-brands fa-linkedin"></i>
                  </li>
                </a>
              </ul>
            </div>
            <hr className="hr-line" />
            <div className="col-12 s1">
              <p>© Copyright A2Z IT HUB. All Rights Reserved </p>
              <p>Designed By A2Z IT HUB PVT LTD</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
