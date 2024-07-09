import React, { useEffect, useState } from "react";
import { getSettings } from "../service/Api";
import Fimge from "../img/Bitmaplogo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const [footerDetails, setFooterDetails] = useState({});
  useEffect(() => {
    const fetchSettings = async () => {
      const data = await getSettings();
      setFooterDetails(data.data);
    };
    fetchSettings();
  }, []);

  return (
    <>
      <footer
        className="mt-5 pt-5 pb-4"
        id="footer"
        style={{ backgroundColor: "#E7F1F2" }}
      >
        <div className="container text-center text-md-start">
          <div className="row text-center text-md-start">
            <div className="col-md-2 col-lg-3 col-xl-3 mx-auto mt-3 ">
              <h5 className="mb-4">
                <span>Tagline will go here. Lorem ipsum d oler sit amet…</span>
              </h5>
              <a
                href="mailto:geckoinquiry@mailinator.com"
                className="text-decoration-none"
              >
                {footerDetails.inquiry_mail}
              </a>
            </div>
            <div className="col-md-2 mx-auto mt-3 border-left">
              <h5 className="text-uppercase mb-4" style={{ color: "gray" }}>
                Address
              </h5>
              <p>
                <p>{footerDetails.address}</p>
              </p>
            </div>
            <div className="col-md-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4" style={{ color: "gray" }}>
                Contact
              </h5>
              <a
                href="mailto:geckoinquiry@mailinator.com"
                className="text-decoration-none"
              >
                <i className="fa fa-envelope pe-1"></i>
                {footerDetails.contact_mail}
              </a>
              <p>
                <i className="fa fa-phone pe-1"></i>
                {footerDetails.contact_no}
              </p>
            </div>
          </div>
          <hr className="mb-4 text-black" />
          <div className="container">
            <div className="row text-md-start">
              <div className="col-lg-2  mx-auto ">
                <img src={Fimge} />
              </div>
              <div className="footer-nav col-md-6  mx-auto">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/service">Services</Link>
                  </li>
                  <li>
                    <Link to="/aboutus">About Us</Link>
                  </li>
                  <li>
                    <Link to="/blogs">Blogs</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
