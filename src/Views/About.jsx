import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import ManagementCards from "../Components/ManagementCards";
import Navbar from "../Components/Navbar";
import SponsorCards from "../Components/SponsorCards";

// Assets
import designer from "../assets/KWATRO.jpg";
import tbanner from "../assets/Astraeus.jpg";
import Pres from "../assets/PresidentTestPic.jpg";
import coo from "../assets/CEOprof.jpg";
import heo from "../assets/CEOprof1.jpg";
import ceo from "../assets/CEOprof3.jpg";
import ava from "../assets/AvaLogo.png";
import kwatro from "../assets/KwatroLogo.png";

const About = () => {
  const [isFaded, setIsFaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const paragraph = document.querySelector(".about_p");
      const paragraphPosition = paragraph.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (
        !isFaded &&
        paragraphPosition.top >= 0 &&
        paragraphPosition.bottom <= windowHeight
      ) {
        setIsFaded(true);
        window.removeEventListener("scroll", handleScroll); // Disable the effect after it has been triggered once
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isFaded]);

  return (
    <div className="glbwrapper">
      <div id="background">
        <div id="circle">
          <div id="circle-glow" />
          <div id="circle-inner" />
        </div>
      </div>
      <Navbar banner={tbanner} />
      <div className="about_banner" />
      <section className="about_section">
        <p className={`about_p ${isFaded ? "fade-in" : ""}`}>
          <span className="h-esport">Astraeus Esports</span> is a VALORANT-based
          organization that was founded on July 27, 2022, and whose members
          reside in the Southeast Asia Region.
        </p>
        <p className={`about_p ${isFaded ? "fade-in" : ""}`}>
          We, Astraeus Esports, envision a future where our talents shine on the
          global esports stage. With eyes set on the horizon, Astraeus Esports
          is not just about winning games; we're about shaping the future of
          esports together, whether you're a player dreaming to be the star of
          the main stage, a fan seeking a community that shares your passion, or
          a partner eager to be part of the esports revolution.
        </p>
      </section>
      <p className="about-h1">
        ASTRAEUS <span className="h-span">MANAGEMENT</span>
      </p>
      <div id="app">
        <div id="profiles">
          <ManagementCards
            name="Breth Mark Villaraza"
            nickname=" 'Noir' "
            designation="Owner "
            imageProf={Pres}
          />
          <ManagementCards
            name="Jannela Cunanan"
            nickname=" 'Cielastrae' "
            designation="CEO "
            imageProf={ceo}
          />
          <ManagementCards
            name="Luisa Therese Singson"
            nickname=" 'Lu' "
            designation="COO "
            imageProf={coo}
          />
          <ManagementCards
            name="?????-?????-"
            nickname=" 'Noir' "
            designation="Board of Directors "
            imageProf={ceo}
          />
          <ManagementCards
            name="Melissa Robin Ramos"
            nickname=" 'Meru' "
            designation="Head of Operations "
            imageProf={heo}
          />
          <ManagementCards
            name="Kwatro Creatives"
            nickname=" 'Kwatro' "
            designation="Creative Designer "
            imageProf={designer}
          />
        </div>
      </div>
      <p className="about-h1">
        OUR <span className="h-esport">PARTNERS </span>
      </p>
      <div className="sponsor_wrapper">
        <SponsorCards logo={ava} name="Ava Entertainment" />
        <SponsorCards logo={kwatro} name="Kwatro Creatives" />
        <SponsorCards logo={ava} name="Eury Cart" />
      </div>
      <Footer />
    </div>
  );
};

export default About;
