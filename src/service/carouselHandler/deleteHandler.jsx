import axios from "axios";
import { appSettings } from "../../Appdata/appdata";

const deleteCarousel = (id) => {
  if (!id) {
    return alert("Upload the image first before deleting.");
  }
  axios
    .delete(`${appSettings.carousel}/${id}`)
    .then((response) => {
      alert("Deleted from Firebase Firestore/Storage successfully!");
      window.location.reload();
    })
    .catch((error) => {
      console.log(error);
    });
};

export default deleteCarousel;
