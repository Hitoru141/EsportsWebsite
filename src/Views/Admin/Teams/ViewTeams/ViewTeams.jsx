import React, { useEffect, useState } from "react";
import axios from "axios";
import { appSettings } from "../../../../Appdata/appdata";

const ViewTeams = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    const getTeams = async () => {
      const data = await axios.get(appSettings.teams);
      setTeams(data.data);
    };
    getTeams();
  }, []);

  return (
    <div className="adteamcard_wrap">
      {teams.map((team, index) => (
        <div key={index} className="adteam_card">
          <img
            src={team.teamLogoURL}
            className="adteam_card"
            alt={`${team.name} Logo`}
          />
          <p className="adteam_name">{team.teamName}</p>
          <button className="adteamcard_delbtn">Delete</button>
          <button className="adteamcard_updtbtn">Update</button>

          <button className="adteamcard_playerbtn">Manage Members</button>
        </div>
      ))}
    </div>
  );
};

export default ViewTeams;
