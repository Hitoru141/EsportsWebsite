import { useEffect, useState } from "react";
import axios from "axios";
import { appSettings } from "../../../../Appdata/appdata";
import { useQuery } from "@tanstack/react-query";
import DeleteTeam from "../Delete Team/DeleteTeam";
import { Link } from "react-router-dom";
import UpdateTeamForm from "../TeamComponents/UpdateTeamForm";

const ViewTeams = () => {
  const [teams, setTeams] = useState([]);
  const [activeTeamIndex, setActiveTeamIndex] = useState(-1);

  const fetchTeams = async () => {
    const data = await axios.get(appSettings.teams);
    return data.data;
  };

  const query = useQuery({ queryKey: ["teams"], queryFn: fetchTeams });

  useEffect(() => {
    if (query.data) {
      setTeams(query.data);
    }
  }, [query.data]);

  const toggleModal = (index) => {
    setActiveTeamIndex(index === activeTeamIndex ? -1 : index);
  };

  const closeModal = () => {
    setActiveTeamIndex(-1);
  };

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
          <DeleteTeam team={team} />
          <button
            className="adteamcard_updtbtn"
            onClick={() => toggleModal(index)}
          >
            Update
          </button>

          {activeTeamIndex === index && (
            <UpdateTeamForm closeModal={closeModal} team={team}/>
          )}

          <Link to={`/astraadmin787/${team.teamName}/manageTeam`}>
            <button className="adteamcard_playerbtn">Manage Members</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ViewTeams;
