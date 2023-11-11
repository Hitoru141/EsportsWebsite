import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import tbanner from "../assets/Astraeus.jpg";

import TypeWriterEffect from "react-typewriter-effect";

const Careers = () => {
  return (
    <div className="glbwrapper">
      <Navbar banner={tbanner} />

      <div className="career-card">
        {" "}
        <p className="h1-weekly">
          Nothing to see here for now...
          <TypeWriterEffect
            textStyle={{
              color: "#8a2be2",
              fontWeight: 500,
              fontSize: "1.5em",
            }}
            startDelay={1000}
            cursorColor="#8a2be2"
            multiText={["{Under Development}"]}
            multiTextDelay={1000}
            typeSpeed={100}
          />
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Careers;
