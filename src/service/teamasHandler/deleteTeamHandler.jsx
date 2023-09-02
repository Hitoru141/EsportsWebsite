import axios from "axios";
import { appSettings } from "../../Appdata/appdata";
import { getStorage, ref, deleteObject } from "firebase/storage";
import deleteImageHandler from "../deleteImageService";

const deleteTeamHandler = (team) => {
  const folderName = "carousel";
  const imageURL = team.teamLogoURL;
  deleteImageHandler(folderName, imageURL);
  //   console.log(team.teamBannerURL);
  //   const storage = getStorage();
  //   const deleteImage = ref(storage, team.teamBannerURL);
  axios
    .delete(`${appSettings.teams}/${team.teamName}`)
    .then((response) => {
      alert("Deleted from Firebase Firestore/Storage successfully!");
      window.location.reload();
    })
    .catch((error) => {
      console.log(error);
    });
};

export default deleteTeamHandler;
