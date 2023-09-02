import React from "react";
import deleteTeamHandler from "../../../../service/teamasHandler/deleteTeamHandler";

const DeleteTeam = ({ team }) => {
  const deleteTeam = () => {
    deleteTeamHandler(team.teamName);
  };
  return (
    <div>
      <button className="adteamcard_delbtn" onClick={deleteTeam}>
        Delete
      </button>
    </div>
  );
};

export default DeleteTeam;
