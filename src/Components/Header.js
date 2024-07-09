import React from "react";
import img1 from "../img/Bitmaplogo.png";
import img2 from "../img/Bannersection.png";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <div className="main">
        <div className="navbar">
          <div className="nav-logo">
            <img src={img1} alt="img1" className="im" />
          </div>
          <div className="nav-contact">
            <Link to="/" className="nav-link">
              <div className="a1">Home</div>
            </Link>
            <Link to="/service" className="nav-link">
              <div className="a1">Services</div>
            </Link>
            <Link to="/aboutus" className="nav-link">
              <div className="a2">About us</div>
            </Link>
            <Link to="/blogs" className="nav-link">
              <div className="a2">Blogs</div>
            </Link>
            <Link to={"/contact"}>
              <button className="button">CONTACT US</button>
            </Link>
          </div>
        </div>
        <div className="container">
          <div className="row main1">
            <div className="col-6">
              <div>
                <h1>
                  How much <br />
                  could you save?
                </h1>
                <p className="main5">
                  Answer the questions below to get a fixed price <br />{" "}
                  quotation for us to take your accountancy hassles away
                  <br />
                  from you.
                </p>
              </div>
              <div className="main2">
                <h3 class="main3">
                  Is your turnover expected to be more than £85k?
                </h3>
                <button className="button1">Yes</button>
                <button className="button1">No</button>
              </div>
              <div>
                <h4 className="main4">Takes less than 30 seconds</h4>
              </div>
            </div>
            <div className="col-6 img1">
              <img src={img2} width="100%" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
