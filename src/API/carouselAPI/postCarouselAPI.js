import axios from "axios";
import { appSettings } from "../../Appdata/appdata";

const postCarouselAPI = async (imageData) => {
  const { data: response } = await axios.post(
    `${appSettings.carousel}`,
    imageData
  );
  return response;
};

export default postCarouselAPI;
