import axios from "axios";
import { appSettings } from "../../Appdata/appdata";

const deleteCarouselAPI = async (id) => {
  const { data: response } = await axios.delete(
    `${appSettings.carousel}/${id}`
  );
  return response;
};

export default deleteCarouselAPI;
