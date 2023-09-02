import axios from "axios";
import { appSettings } from "../../Appdata/appdata";
import deleteImageHandler from "../deleteImageService";

const deleteTeamHandler = async (team) => {
  const { teamLogoURL, teamBannerURL, teamName } = team;

  try {
    axios.delete(`${appSettings.teams}/${teamName}`).then(() => {
      alert("Deleted from Firebase Firestore/Storage successfully!");
    });
    await Promise.all([
      deleteImageHandler(teamLogoURL),
      deleteImageHandler(teamBannerURL),
    ]);

    window.location.reload();
  } catch (err) {
    alert(`Unable to delete Team`);
  }
};

export default deleteTeamHandler;
