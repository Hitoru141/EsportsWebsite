import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import tbanner from "../assets/Astraeus.jpg";

const Careers = () => {
  return (
    <div className="glbwrapper">
      <Navbar banner={tbanner} />

      <p className="h1-weekly">
        Nothing to see here for now...{" "}
        <span className="h-esport">&#10100;Under Development&#10101;</span>
      </p>

      <Footer />
    </div>
  );
};

export default Careers;
