import deleteImageService from "../deleteImageService";
import deleteCarouselAPI from "../../API/carouselAPI/deleteCarouselAPI";

const deleteCarousel = async (carsel) => {
  try {
    await deleteCarouselAPI(carsel.id);
    deleteImageService(carsel.img_link);
    alert("Deleted from Firebase Firestore/Storage successfully!");
    window.location.reload();
  } catch (err) {
    alert(`Carousel was not deleted please try again!`);
  }
};

export default deleteCarousel;
