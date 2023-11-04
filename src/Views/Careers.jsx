import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import tbanner from "../assets/Astraeus.jpg";

import TypeWriterEffect from "react-typewriter-effect";

const Careers = () => {
  return (
    <div className="glbwrapper">
      <Navbar banner={tbanner} />
      <p className="about-h1">
        Coming soon!{" "}
        <TypeWriterEffect
          textStyle={{
            color: "#8a2be2",
            fontWeight: 500,
            fontSize: "1.5em",
          }}
          startDelay={1000}
          cursorColor="#8a2be2"
          multiText={["{Under Construction}"]}
          multiTextDelay={1000}
          typeSpeed={100}
        />
        {/* <p className="about-h1">
          ASTRAEUS <span className="h-esport">&#123;Under Construction&#125;</span>
        </p> */}
      </p>
      <Footer />
    </div>
  );
};

export default Careers;
