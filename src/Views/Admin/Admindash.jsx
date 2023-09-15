import "src/Styles/admin.css";
import { Link, useNavigate } from "react-router-dom";
import AdTeam from "./Teams/Addteam/AdTeam";
import { useState, useEffect } from "react";

import AdCarousel from "./Carousel/AdCarousel";

const Admindash = (data) => {
  const [activeComponent, setActiveComponent] = useState("carousel");

  const handleButtonClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className="Adminwrapper2">
      <nav className="nav">
        <div className="container">
          <div className="logo">
            <Link to="/#">ASTRAEUS ESPORTS</Link>
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
