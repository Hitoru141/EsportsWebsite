import Navbar from "../Components/Navbar";
import Playercard from "../Components/Playercard";
import Footer from "../Components/Footer";
import "../Styles/players.css";
import { appSettings } from "../Appdata/appdata";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import tbanner from "../assets/SOLbanner.jpg";

//Atom
import { useRecoilState } from "recoil";
import SelectedTeamAtom from "../Recoil/SelectedTeamAtom";

const Playerpage = ({ team }) => {
  const [membersArray, setMembersArray] = useState([""]);
  const [filteredTeam, setFilteredTeam] = useRecoilState(SelectedTeamAtom);
  const { teamName } = useParams();

  useEffect(() => {
    const fetchTeams = async () => {
      const teams = await axios.get(`${appSettings?.teams}`);
      const teamArray = teams?.data;
      const filteredTeam = teamArray?.filter(
        (team) => team?.teamName === teamName
      );
      setFilteredTeam(filteredTeam[0].teamBannerURL);
    };
    fetchTeams();
  }, []);

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
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [teamName]);

  return (
    <div className="Mainwrapper">
      <Navbar banner={filteredTeam} />
      <div className="player-wrap">
        <p className="pteam-header">{membersArray[0].teamName}</p>
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
