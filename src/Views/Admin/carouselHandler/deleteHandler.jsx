import axios from "axios";

const deleteCarousel = (id) => {
  axios
    .delete(
      `https://astraeus-firebase-endpoints.onrender.com/delCarousel/${id}`
    )
    .then((response) => {
      alert("Deleted from Firebase Firestore/Storage successfully!");
      window.location.reload();
    })
    .catch((error) => {
      console.error(error);
    });
};

export default deleteCarousel;
