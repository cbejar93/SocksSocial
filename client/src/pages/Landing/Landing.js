import React from "react";
import bluesock from "../../images/bluesock.png";
import donut from "../../images/donutSock.jpg";
import missing from "../../images/missing.jpg";
import "./Landing.css";

const picHeight = {
    height: '368px'
}
// This is the first page a user sees in the website 
const Landing = () => (
    <div className="card-group mt-5 mb-5">
        <div className="card">
            <img className="card-img-top" src={bluesock} alt="sock here" style={picHeight}/>
          <div className="card-body">
              <h1 className="card-title">Socks as a Passion!</h1>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div className="card">
            <img className="card-img-top" src={donut} alt="sock here 2" style={picHeight} />
          <div className="card-body">
              <h1 className="card-title">Be Super Positive!</h1>
              <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div className="card">
            <img className="card-img-top" src={missing} alt="sock here 2" style={picHeight} />
          <div className="card-body">
              <h1 className="card-title">Mourn your Missing Socks!</h1>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
</div>


)

export default Landing;