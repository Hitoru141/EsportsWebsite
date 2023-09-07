import deleteImageService from "../deleteImageService";
import deleteCarouselAPI from "../../API/carouselAPI/deleteCarouselAPI";
import { toast } from "react-toastify";

const deleteCarousel = async (carsel) => {
  try {
    await deleteCarouselAPI(carsel.id);
    deleteImageService(carsel.img_link);
    toast.success("Deleted image carousel successfully!");
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  } catch (err) {
    toast.error("Carousel was not deleted, please try again!");
  }
};

export default deleteCarousel;
