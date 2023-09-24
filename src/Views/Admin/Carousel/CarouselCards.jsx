import "../../Styles/admin.css";
import deleteCarousel from "../../service/carouselHandler/deleteHandler";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// eslint-disable-next-line react/prop-types
const CarouselCards = ({ carsel }) => {
  const handleDelete = () => {
    // Show a confirmation message before proceeding with the delete action
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (confirmDelete) {
      console.log("Delete button clicked!");
      deleteCarousel(carsel);
    }
  };

  return (
    <div className="carousel-card">
      <img src={carsel.img_link} className="carousel-card" />
      <button className="delete-button" onClick={handleDelete}>
        Delete
      </button>
      <ToastContainer />
    </div>
  );
};

export default CarouselCards;
