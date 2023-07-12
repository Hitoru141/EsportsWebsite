import "../../Styles/admin.css";
import { Link } from "react-router-dom";
import AdTeam from "./AdTeam";
const Admindash = (data) => {
  console.log(data);
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
        <button className="adbtn">ADD TEAM</button>
        <button className="adbtn">ADD TEAM</button>
      </div>
      <div className="optionsview-cont">
        <AdTeam />
      </div>
    </div>
  );
};

export default Admindash;
