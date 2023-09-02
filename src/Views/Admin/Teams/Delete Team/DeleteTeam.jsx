import React from "react";
import deleteTeamHandler from "../../../../service/teamsHandler/deleteTeamHandler";

const DeleteTeam = ({ team }) => {
  const deleteTeam = () => {
    deleteTeamHandler(team);
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
