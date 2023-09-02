import axios from "axios";
import { appSettings } from "../../Appdata/appdata";
import deleteImageHandler from "../deleteImageService";

const deleteTeamHandler = (team) => {
  const { teamLogoURL, teamBannerURL } = team;

  try {
    axios.delete(`${appSettings.teams}/${team.teamName}`).then((response) => {
      alert("Deleted from Firebase Firestore/Storage successfully!");
      window.location.reload();
    });
    deleteImageHandler(teamLogoURL);
    deleteImageHandler(teamBannerURL);
  } catch (err) {
    alert(`Unable to delete Team`);
  }
};

export default deleteTeamHandler;
