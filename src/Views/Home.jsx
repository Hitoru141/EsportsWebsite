import "../Styles/main.css";

import Navbar from "../Components/Navbar";
// import Footer from "../Components/footer";
import Carousel from "../Components/Carousel";
import ContCreatorsCard from "../Components/ContCreatorsCard";
import TeamCard from "../Components/TeamCard";
import tbanner from "../assets/Astraeus.jpg";

const Home = () => {
  return (
    <div className="Mainwrapper">
      <Navbar banner={tbanner} />
      <Carousel />
      <section className="section-wrap">
        <p className="team-header">
          ASTRAEUS <span className="h-esport">ESPORTS</span>
        </p>
        <p className="sub-header">Meet our team</p>
        <div className="team-category">
          <div className="page-content">
            <TeamCard />
            <ContCreatorsCard />
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
