import axios from "axios";

function submitTeam(teamName, teamBannerURL, teamLogoURL) {
  axios
    .post("https://astraeus-firebase-endpoints.onrender.com/teams", {
      teamName: teamName,
      teamBannerURL: teamBannerURL,
      teamLogoURL: teamLogoURL,
    })
    .then((response) => {
      if (response.status === 201) {
        // Team Added Successfully
        window.alert("Team Added Successfully");
      } else if (response.status === 409) {
        // Alert teamName exists
        window.alert("Team Name already exists");
      }
    })
    .catch((error) => {
      if (error.response && error.response.status === 500) {
        // Internal Server Error
        window.alert("Internal Server Error");
      } else {
        console.log(error);
      }
    });
}

export default submitTeam;
