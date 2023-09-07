import Footer from "../Components/Footer";
import ManagementCards from "../Components/ManagementCards";
import Navbar from "../Components/Navbar";
import tbanner from "../assets/Astraeus.jpg";
import Pres from "../assets/PresidentTestPic.jpg";
import coo from "../assets/CEOprof.jpg";
import heo from "../assets/CEOprof1.jpg";
import ceo from "../assets/CEOprof3.jpg";

const About = () => {
  return (
    <div className="Mainwrapper">
      <div id="background">
        <div id="circle">
          <div id="circle-glow" />
          <div id="circle-inner" />
        </div>
      </div>
      <Navbar banner={tbanner} />
      <div className="about_banner" />
      <section className="about_section">
        <p className="about_p">
          <span className="h-esport">Astraeus Esports</span> is a VALORANT-based
          organization that was founded on July 27, 2022, and whose members
          reside in the Southeast Asia Region.
        </p>
        <p className="about_p">
          We, Astraeus Esports, envision a future where our talents shine on the
          global esports stage. With eyes set on the horizon, Astraeus Esports
          is not just about winning games; we're about shaping the future of
          esports together, whether you're a player dreaming to be the star of
          the main stage, a fan seeking a community that shares your passion, or
          a partner eager to be part of the esports revolution.
        </p>
      </section>
      <p className="team-header">
        ASTRAEUS <span className="h-esport">MANAGEMENT</span>
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
            nickname=" 'Noir' "
            designation="CEO "
            imageProf={ceo}
          />
          <ManagementCards
            name="Luisa Therese Singson"
            nickname=" 'Noir' "
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
            nickname=" 'Noir' "
            designation="Head of Operations "
            imageProf={heo}
          />
          <ManagementCards
            name="?????-?????-"
            nickname=" 'Noir' "
            designation="Creative Designer "
            imageProf={Pres}
          />
        </div>
      </div>
      <p className="team-header">
        OUR <span className="h-esport">SPONSORS</span>
      </p>
      <Footer />
    </div>
  );
};

export default About;
