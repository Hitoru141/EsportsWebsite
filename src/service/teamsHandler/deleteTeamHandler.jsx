import axios from "axios";
import { appSettings } from "../../Appdata/appdata";
import deleteImageHandler from "../deleteImageService";

const deleteTeamHandler = async (team) => {
  const { teamLogoURL, teamBannerURL, teamName } = team;

  const confirmed = window.confirm(
    `Are you sure you want to delete the team ${teamName}?`
  );

  if (confirmed) {
    await Promise.all([
      deleteImageHandler(teamLogoURL),
      deleteImageHandler(teamBannerURL),
    ]);

    await axios.delete(`${appSettings.teams}/${teamName}`).then(() => {
      console.log("Deleted from Firebase Firestore successfully!");
    });

    alert("Deleted from Firestore/Storage successfully!");
    window.location.reload();
  }
};

export default deleteTeamHandler;
