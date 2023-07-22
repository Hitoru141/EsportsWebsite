import axios from "axios";

const deleteCarousel = (id) => {
  if (!id) {
    return alert("Upload the image first before deleting.");
  }
  axios
    .delete(
      `https://astraeus-firebase-endpoints.onrender.com/delCarousel/${id}`
    )
    .then((response) => {
      alert("Deleted from Firebase Firestore/Storage successfully!");
      window.location.reload();
    })
    .catch((error) => {
      console.log(error);
    });
};

export default deleteCarousel;
