import axios from "axios";
import { appSettings } from "../../../../Appdata/appdata";
import { toast } from "react-toastify";

function submitTeam(teamName, teamBannerURL, teamLogoURL) {
  axios
    .post(appSettings.teams, {
      teamName: teamName,
      teamBannerURL: teamBannerURL,
      teamLogoURL: teamLogoURL,
    })
    .then((response) => {
      if (response.status === 201) {
        // Team Added Successfully
        toast.success("Team Added Successfully");
      }
    })
    .catch((error) => {
      if (response.status === 409) {
        // Alert teamName exists
        toast.error("Team Name already exists");
      } else if (error.response && error.response.status === 500) {
        // Internal Server Error
        toast.error("Internal Server Error");
      } else {
        console.log(error);
      }
    });
}

export default submitTeam;
