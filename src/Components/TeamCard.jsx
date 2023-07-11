import { Link } from "react-router-dom";
import "../Styles/hero.css";
import { BiSolidChevronsRight } from "react-icons/bi";
// import esport from "../assets/esports setup.jpg.webp";

const TeamCard = () => {
  return (
    <div className="card">
      {/* <img src={esport} className="" /> */}
      <div className="content">
        <h2 className="title">VALORANT</h2>
        <Link to="/valoteam">
          <button className="btn">
            View Team
            <BiSolidChevronsRight
              style={{
                fontSize: "2em",
                position: "absolute",
                top: "60%",
                transform: "translateY(-50%)",
              }}
            />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TeamCard;
