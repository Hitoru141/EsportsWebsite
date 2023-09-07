import axios from "axios";
import { appSettings } from "../../Appdata/appdata";
import deleteImageHandler from "../deleteImageService";

import { toast } from "react-toastify";

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

    toast.success("Deleted from Firestore/Storage successfully!");
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  }
};

export default deleteTeamHandler;
