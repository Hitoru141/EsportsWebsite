import "../../Styles/admin.css";
import { Link } from "react-router-dom";
import AdTeam from "./AdTeam";
import { useState } from "react";
import AdCarousel from "./AdCarousel";
const Admindash = (data) => {
  console.log(data);

  const [activeComponent, setActiveComponent] = useState("carousel");

  const handleButtonClick = (component) => {
    setActiveComponent(component);
  };
  return (
    <div className="Adminwrapper2">
      <nav className="nav">
        <div className="container">
          <div className="logo">
            <Link to="/">
              <a href="#">ASTRAEUS ESPORTS</a>
            </Link>
          </div>
          <div id="mainListDiv" className="main_list">
            <ul className="navlinks">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Community</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>
          <span className="navTrigger">
            <i></i>
            <i></i>
            <i></i>
          </span>
        </div>
      </nav>
      <div className="adbtn-wrapper">
        <button
          className={activeComponent === "carousel" ? "adbtn active" : "adbtn"}
          onClick={() => handleButtonClick("carousel")}
        >
          Carousel
        </button>
        <button
          className={activeComponent === "team" ? "adbtn active" : "adbtn"}
          onClick={() => handleButtonClick("team")}
        >
          Add Team
        </button>
      </div>
      <div className="optionsview-cont">
        {activeComponent === "carousel" && <AdCarousel />}
        {activeComponent === "team" && <AdTeam />}
      </div>
    </div>
  );
};

export default Admindash;
