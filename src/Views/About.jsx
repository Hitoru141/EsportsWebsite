import Navbar from "../Components/Navbar";
import tbanner from "../assets/Astraeus.jpg";

const About = () => {
  return (
    <div className="Mainwrapper">
      <Navbar banner={tbanner} />
      <div className="about_banner"></div>
    </div>
  );
};

export default About;
