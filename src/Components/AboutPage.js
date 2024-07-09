import React from "react";
import About from "./../img/About.png"
 
function AboutPage() {
  return (
    <div>
          <div className="container select4">
          <div className="row select3">
            <div className="col-4">
              <h3>About us</h3>
              <p className="sep">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor Lorem ipsum dolor siselectt amet
                consetetur sadipscing elitr
              </p>
              <button className="btn btn-primary">About US</button>
            </div>
            <div className="col-8">
              <img src={About} width="100%" className="img01"></img>
            </div>
          </div>
        </div>
      </div>
  );
}

export default AboutPage;
