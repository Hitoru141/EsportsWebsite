import Navbar from "../Components/Navbar";
import Playercard from "../Components/Playercard";
import Footer from "../Components/Footer";
import "../Styles/players.css";
import { appSettings } from "../Appdata/appdata";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import tbanner from "../assets/SOLbanner.jpg";

const Playerpage = () => {
  const [membersArray, setMembersArray] = useState([]);
  const { teamName } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${appSettings.member}s`);
        const members = [];
        response.data.forEach((data) => {
          if (data.teamName === teamName) {
            members.push(data);
          }
        });
        setMembersArray(members);
        console.table(membersArray);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [teamName]);

  return (
    <div className="Mainwrapper">
      <Navbar banner={tbanner} />
      <div className="player-wrap">
        <p className="pteam-header"> SOL ESPORTS</p>
        <div className="playercard-wrap">
          {membersArray.map((member, index) => (
            <Playercard key={index} member={member} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Playerpage;
