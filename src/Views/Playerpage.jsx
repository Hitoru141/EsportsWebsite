import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Playercard from "../Components/Playercard";
import Footer from "../Components/Footer";
import "../Styles/players.css";
import { appSettings } from "../Appdata/appdata";
import { useParams } from "react-router-dom";
import axios from "axios";
import tbanner from "../assets/SOLbanner.jpg";

// Atom
import { useRecoilState } from "recoil";
import SelectedTeamAtom from "../Recoil/SelectedTeamAtom";

const Playerpage = ({ team }) => {
  const [membersArray, setMembersArray] = useState([""]);
  const [filteredTeam, setFilteredTeam] = useRecoilState(SelectedTeamAtom);
  const { teamName } = useParams();
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const teams = await axios.get(`${appSettings?.teams}`);
        const teamArray = teams?.data;
        const filteredTeam = teamArray?.filter(
          (team) => team?.teamName === teamName
        );
        setFilteredTeam(filteredTeam[0].teamBannerURL);
      } catch (error) {
        console.error("Error fetching team data:", error);
      }
    };
    fetchTeams();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${appSettings.member}`);
        const members = [];
        response.data.forEach((data) => {
          if (data.teamName === teamName) {
            members.push(data);
          }
        });
        // Delay setting the loading state to false for a minimum of 2 seconds
        setTimeout(() => {
          setMembersArray(members);
          setLoading(false);
        }, 2000);
      } catch (error) {
        console.error("Error fetching member data:", error);
        setLoading(false); // Handle the error and set loading to false
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
          {loading ? (
            <div className="loaderbg">
              <div className="loader"></div>
            </div>
          ) : (
            membersArray.map((member, index) => (
              <Playercard key={index} member={member} />
            ))
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Playerpage;
