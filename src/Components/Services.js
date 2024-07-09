import React from "react";
import img1 from "./../img/Service/Audit-1.png";
import img2 from "./../img/Service/Budget-2.png";
import img3 from "./../img/Service/Payroll-3.png";
import img4 from "./../img/Service/Software-Training-4.png";
import img5 from "./../img/Service/Taxplanning-5.png";
import img6 from "./../img/Service/Management-6.png";

function Services() {
  return (
    <div>
      <div>
        <div className="container">
          <div className="row select1">
            <div>
              <h1>Services</h1>
            </div>
            <div className="col-4 select2">
              <img src={img1}></img>
              <h5>Audit & Account</h5>
              <p className="ps1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>
            <div className="col-4 select2">
              <img src={img2}></img>
              <h5>Budget & Projections</h5>
              <p className="ps1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>
            <div className="col-4 select2">
              <img src={img3}></img>
              <h5>Payroll & Bookkeeping</h5>
              <p className="ps1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>
          </div>
          <div className="row select1">
            <div className="col-4 select2">
              <img src={img4}></img>
              <h5>Software Training & IT</h5>
              <p className="ps1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>
            <div className="col-4 select2">
              <img src={img5}></img>
              <h5>Tax planning & Returns</h5>
              <p className="ps1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>
            <div className="col-4 select2">
              <img src={img6}></img>
              <h5>Management Information</h5>
              <p className="ps1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
