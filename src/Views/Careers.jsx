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
          startDelay={2000}
          cursorColor="#8a2be2"
          multiText={["{Under Construction}"]}
          multiTextDelay={1000}
          typeSpeed={30}
        />
      </p>
      <Footer />
    </div>
  );
};

export default Careers;
