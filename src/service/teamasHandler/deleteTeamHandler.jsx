import axios from "axios";
import { appSettings } from "../../Appdata/appdata";

const deleteTeamHandler = (teamName) => {
  console.log(teamName);
  //   if (!teamName) {
  //     return alert("Upload the image first before deleting.");
  //   }
  //   axios
  //     .delete(`${appSettings.teams}/${teamName}`)
  //     .then((response) => {
  //       alert("Deleted from Firebase Firestore/Storage successfully!");
  //       window.location.reload();
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
};

export default deleteTeamHandler;
