import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import tbanner from "../assets/Astraeus.jpg";
import prog from "../assets/progresss.gif";

const Careers = () => {
  return (
    <div className="glbwrapper">
      <Navbar banner={tbanner} />

      <p className="h1-weekly">
        Nothing to see here for now...
        <span className="h-esport">&#10100;Under Development&#10101;</span>
      </p>
      <div className="career-card">
        <img src={prog} className="career-card-img" />
      </div>
      <Footer />
    </div>
  );
};

export default Careers;
